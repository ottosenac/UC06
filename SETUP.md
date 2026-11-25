# Setup - Node.js + MySQL (padrão do projeto)

## Pré-requisitos
- Node.js 18+ e npm
- MySQL Server em execução localmente

## 1. Banco de dados
Crie o banco e as tabelas:

```bash
mysql -u root -p < schema.mysql.sql
```

(ou execute `schema.mysql.sql` no MySQL Workbench/phpMyAdmin)

> Observação: `schema.sql` contém a versão anterior (Supabase/PostgreSQL) e não é usado pelo backend Node.js.

## 2. Configuração
Copie o arquivo de exemplo e ajuste as credenciais:

```bash
copy .env.example .env
```

Edite `.env` com `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` e `PORT` conforme seu ambiente. O arquivo `.env` é ignorado pelo Git.

## 3. Instalar dependências e executar
```bash
npm install
npm start
```

Abra no navegador: `http://localhost:3000` (o servidor Express serve o `index.html` e a API em `/api`).

## 4. Telas integradas ao back-end
- **Agenda**: lista agendamentos do dia e serviços (`GET /api/agendamentos?data=YYYY-MM-DD`, `GET /api/servicos`), cancelar agendamento (`PUT /api/agendamentos/:id`).
- **Novo agendamento**: cria agendamento (`POST /api/agendamentos`).
- **Serviços**: lista, edita e exclui serviços (`GET/PUT/DELETE /api/servicos`).
- **Cadastro/Edição de serviço**: cria/atualiza serviço (`POST/PUT /api/servicos`).

## Observações
- App local (single-user), sem login.
- Conflitos de horário são validados no frontend por sobreposição de duração e há restrição de unicidade `(data, horario)` no banco.
- Serviços com agendamentos vinculados não podem ser excluídos (FK/restrição).
