-- Serena Agenda - schema MySQL (banco local)
-- Crie o banco e execute este arquivo (ex.: mysql -u root -p < schema.mysql.sql)

CREATE DATABASE IF NOT EXISTS serena_agenda
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
USE serena_agenda;

-- 1. Catálogo de serviços
CREATE TABLE IF NOT EXISTS servicos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(120) NOT NULL,
  duracao_min INT NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  ativo TINYINT(1) NOT NULL DEFAULT 1,
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT chk_servicos_nome CHECK (CHAR_LENGTH(nome) >= 3),
  CONSTRAINT chk_servicos_duracao CHECK (duracao_min BETWEEN 10 AND 480),
  CONSTRAINT chk_servicos_preco CHECK (preco > 0)
) ENGINE=InnoDB;

CREATE INDEX idx_servicos_ativo ON servicos (ativo);

-- 2. Agendamentos
CREATE TABLE IF NOT EXISTS agendamentos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  servico_id INT UNSIGNED NOT NULL,
  cliente_nome VARCHAR(120) NOT NULL,
  cliente_telefone VARCHAR(30) NULL,
  data DATE NOT NULL,
  horario TIME NOT NULL,
  status ENUM('pendente','confirmado','concluido','cancelado') NOT NULL DEFAULT 'pendente',
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_agendamentos_servico FOREIGN KEY (servico_id)
    REFERENCES servicos(id) ON DELETE RESTRICT,
  CONSTRAINT chk_agendamentos_nome CHECK (CHAR_LENGTH(cliente_nome) >= 2),
  CONSTRAINT uq_agendamentos_data_horario UNIQUE (data, horario)
) ENGINE=InnoDB;

CREATE INDEX idx_agendamentos_data_horario ON agendamentos (data, horario);
CREATE INDEX idx_agendamentos_servico ON agendamentos (servico_id);

-- Dados iniciais opcionais
INSERT INTO servicos (nome, duracao_min, preco)
SELECT 'Corte feminino', 60, 85.00
WHERE NOT EXISTS (SELECT 1 FROM servicos WHERE nome = 'Corte feminino');
INSERT INTO servicos (nome, duracao_min, preco)
SELECT 'Escova', 45, 55.00
WHERE NOT EXISTS (SELECT 1 FROM servicos WHERE nome = 'Escova');
INSERT INTO servicos (nome, duracao_min, preco)
SELECT 'Manicure', 45, 40.00
WHERE NOT EXISTS (SELECT 1 FROM servicos WHERE nome = 'Manicure');
