const express = require('express');
const path = require('path');
require('dotenv').config();
const { pool } = require('./db');

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());
app.use(express.static(path.join(__dirname)));

function asService(row) {
  return {
    id: Number(row.id),
    nome: row.nome,
    duracao_min: Number(row.duracao_min),
    preco: Number(row.preco),
    ativo: !!row.ativo
  };
}

function asAppointment(row) {
  return {
    id: Number(row.id),
    servico_id: Number(row.servico_id),
    cliente_nome: row.cliente_nome,
    cliente_telefone: row.cliente_telefone,
    data: row.data instanceof Date ? row.data.toISOString().slice(0, 10) : String(row.data),
    horario: String(row.horario).slice(0, 5),
    status: row.status,
    servico: {
      nome: row.servico_nome,
      duracao_min: Number(row.duracao_min),
      preco: Number(row.preco)
    }
  };
}

function badRequest(res, message) {
  return res.status(400).json({ error: message });
}

// Serviços
app.get('/api/servicos', async (_req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, nome, duracao_min, preco, ativo FROM servicos WHERE ativo = 1 ORDER BY nome'
    );
    res.json(rows.map(asService));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/servicos', async (req, res) => {
  try {
    const nome = String(req.body?.nome || '').trim();
    const duracao = Number(req.body?.duracao_min);
    const preco = Number(req.body?.preco);
    if (nome.length < 3) return badRequest(res, 'Nome deve ter pelo menos 3 caracteres.');
    if (!Number.isInteger(duracao) || duracao < 10 || duracao > 480) return badRequest(res, 'Duração deve ser entre 10 e 480 minutos.');
    if (!(preco > 0)) return badRequest(res, 'Preço deve ser maior que zero.');

    const [result] = await pool.execute(
      'INSERT INTO servicos (nome, duracao_min, preco, ativo) VALUES (?, ?, ?, 1)',
      [nome, duracao, preco]
    );
    res.status(201).json({ id: Number(result.insertId), nome, duracao_min: duracao, preco, ativo: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/servicos/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return badRequest(res, 'ID é obrigatório.');
    const nome = String(req.body?.nome || '').trim();
    const duracao = Number(req.body?.duracao_min);
    const preco = Number(req.body?.preco);
    if (nome.length < 3) return badRequest(res, 'Nome deve ter pelo menos 3 caracteres.');
    if (!Number.isInteger(duracao) || duracao < 10 || duracao > 480) return badRequest(res, 'Duração deve ser entre 10 e 480 minutos.');
    if (!(preco > 0)) return badRequest(res, 'Preço deve ser maior que zero.');

    const [result] = await pool.execute(
      'UPDATE servicos SET nome = ?, duracao_min = ?, preco = ? WHERE id = ? AND ativo = 1',
      [nome, duracao, preco, id]
    );
    if (result.affectedRows === 0) {
      const [rows] = await pool.execute('SELECT id FROM servicos WHERE id = ? AND ativo = 1', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Serviço não encontrado.' });
    }
    res.json({ id, nome, duracao_min: duracao, preco, ativo: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/servicos/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return badRequest(res, 'ID é obrigatório.');
    try {
      const [result] = await pool.execute('DELETE FROM servicos WHERE id = ?', [id]);
      if (result.affectedRows === 0) return res.status(404).json({ error: 'Serviço não encontrado.' });
      res.json({ ok: true });
    } catch (e) {
      if (e && e.code === 'ER_ROW_IS_REFERENCED_2') {
        return res.status(409).json({ error: 'Este serviço possui agendamentos vinculados e não pode ser excluído.' });
      }
      throw e;
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Agendamentos
app.get('/api/agendamentos', async (req, res) => {
  try {
    const data = String(req.query.data || '').trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return badRequest(res, 'Parâmetro data (YYYY-MM-DD) é obrigatório.');
    const [rows] = await pool.execute(
      `SELECT a.id, a.servico_id, a.cliente_nome, a.cliente_telefone, a.data, a.horario, a.status,
              s.nome AS servico_nome, s.duracao_min, s.preco
       FROM agendamentos a
       JOIN servicos s ON s.id = a.servico_id
       WHERE a.data = ? AND a.status <> 'cancelado'
       ORDER BY a.horario`,
      [data]
    );
    res.json(rows.map(asAppointment));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/agendamentos', async (req, res) => {
  try {
    const servicoId = Number(req.body?.servico_id);
    const nome = String(req.body?.cliente_nome || '').trim();
    const telefone = String(req.body?.cliente_telefone || '').trim();
    const data = String(req.body?.data || '').trim();
    let horario = String(req.body?.horario || '').trim();
    const status = String(req.body?.status || 'confirmado').trim();

    if (!servicoId) return badRequest(res, 'Serviço inválido.');
    if (nome.length < 3) return badRequest(res, 'Nome da cliente deve ter pelo menos 3 caracteres.');
    if (!telefone) return badRequest(res, 'Telefone é obrigatório.');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return badRequest(res, 'Data inválida.');
    if (!/^\d{2}:\d{2}/.test(horario)) return badRequest(res, 'Horário inválido.');
    horario = horario.slice(0, 5);

    try {
      const [result] = await pool.execute(
        `INSERT INTO agendamentos (servico_id, cliente_nome, cliente_telefone, data, horario, status)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [servicoId, nome, telefone, data, `${horario}:00`, status]
      );
      res.status(201).json({ id: Number(result.insertId) });
    } catch (e) {
      if (e && e.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Este horário já está ocupado (conflito).' });
      }
      throw e;
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/agendamentos/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return badRequest(res, 'ID é obrigatório.');
    const status = String(req.body?.status || 'cancelado').trim();
    const [result] = await pool.execute('UPDATE agendamentos SET status = ? WHERE id = ?', [status, id]);
    if (result.affectedRows === 0) {
      const [rows] = await pool.execute('SELECT id FROM agendamentos WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Agendamento não encontrado.' });
    }
    res.json({ ok: true, id, status });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
