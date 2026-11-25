# Aula 03 - Backend, BaaS e APIs (conteúdo extraído e orientações)

> **Fonte:** `Aula 03 - Backend, BaaS e APIs.pdf` (UC6 - Prototipação Rápida de Aplicações com IA).  
> **Integração desta etapa:** Supabase (projeto informado pelo usuário, conectado ao GitHub `ottosenac`) para o MVP **Gestão de Empréstimos da Biblioteca Comunitária** (protótipo visual da Aula 02).

## Conteúdo identificado (síntese das capturas do PDF)

- **BaaS (Backend as a Service):** backend pronto/gerenciado (banco, autenticação, APIs, storage etc.) para acelerar MVPs, reduzindo infraestrutura própria.
- **APIs e REST/HTTP:** requisições com método (GET/POST/PUT/PATCH/DELETE), URL/recurso, headers (ex.: `Authorization`, `Content-Type`, `apikey`) e body (JSON). Respostas com status code, headers e body. Supabase gera API automaticamente a partir das tabelas.
- **Autenticação e autorização:** autenticação valida identidade (ex.: login/sessão/JWT); autorização define o que o usuário autenticado pode fazer. No banco, **RLS (Row Level Security)** + policies controlam acesso por linha/usuário; sem RLS/policies adequadas, dados podem ficar expostos.
- **Segurança e cuidados no MVP (mesmo sem ser produção):** credenciais protegidas (não hardcoded; usar `.env` e `.gitignore`), HTTPS, RLS ativada com políticas, sem segredos em logs, atenção à LGPD (coleta mínima, finalidade, acesso, exclusão/retenção) e backups/confirmar frequência e retenção no BaaS.

## 5 passos para conectar front ao back (Supabase)

1. **Criar/acessar projeto** no Supabase (nome, senha do DB, região).
2. **Instalar SDK** no projeto front: `npm install @supabase/supabase-js`.
3. **Copiar credenciais** (Project Settings → API): URL e anon key. Configurar em `.env`/variáveis de ambiente (não commitar).
4. **Inicializar cliente** (ex.: `lib/supabase.ts`) com `createClient(url, anonKey)`.
5. **Testar CRUD** (insert, select, update, delete) e confirmar no Table Editor.

> Observação: em projeto Vite as variáveis costumam usar prefixo `VITE_` e `import.meta.env`; em projeto estático/Node deve-se adaptar a forma de expor configuração sem versionar segredos.

## Atividade: Configure o backend do seu MVP

**Objetivo:** usar o protótipo visual da Aula anterior e integrar backend com banco de dados (Supabase).

### Passos da atividade (PDF)
1. **Modelar as entidades** (tabelas, atributos e relacionamentos do projeto).
2. **Gerar schema com IA** (prompt CTQ), revisar tipos, constraints e RLS.
3. **Criar/configurar projeto Supabase** e executar o SQL no SQL Editor.
4. **Integrar SDK no front** (instalar `@supabase/supabase-js`, configurar `.env`, criar cliente em `lib/supabase.ts` ou equivalente).
5. **Testar CRUD completo** (inserir, listar, atualizar, excluir registros) e confirmar no Table Editor.

### Entregáveis indicados
- Schema SQL documentado (`schema.sql`).
- Projeto Supabase criado/configurado com RLS habilitado.
- Tabelas com políticas criadas (mín. 2, conforme atividade).
- SDK integrado e variáveis de ambiente configuradas (`.env` não versionado).
- Operações CRUD testadas do front.
- Registros de teste inseridos no banco.
- Submissão: link do repositório + URL do projeto Supabase (ou conforme orientação do professor).

## Checklist do que deve ser executado (resultado esperado da atividade)

- [x] **Modelar entidades** do MVP Biblioteca Comunitária (livros, leitores, empréstimos) com atributos e relacionamentos.
- [x] **Gerar/revisar schema SQL** (`schema.sql`) com constraints e **RLS/policies** adequadas.
- [x] **Configurar projeto Supabase** informado e executar o schema no SQL Editor (RLS habilitado). *(schema executado pelo usuário no projeto `esvqnlllqaitohwhoacc`)*
- [x] **Integrar `@supabase/supabase-js`** e configurar variáveis de ambiente/chave publicável localmente para o front (sem commitar segredos; `supabase-config.js` gitignored preparado).
- [x] **Criar cliente Supabase** no projeto (`lib/supabase.ts` e integração utilizável pelo protótipo).
- [x] **Implementar CRUD do front** (listar, inserir, atualizar, excluir).
- [x] **Validar a integração com o Supabase:** leitura do acervo e fluxo automatizado de cadastro de livro, leitor e empréstimo.
- [x] **Inserir/validar registros de teste:** os livros iniciais e dados de demonstração foram inseridos e consultados no Supabase.

**Limite da validação:** edição, exclusão e devolução não foram verificadas integralmente no frontend React atual; empréstimo e devolução usam duas gravações separadas e exigem tratamento transacional para evitar inconsistências em caso de falha.
- [x] **Organizar artefatos no repositório** (schema, integração, documentação) e registrar URL do projeto Supabase para submissão.

