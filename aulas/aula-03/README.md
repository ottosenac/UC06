# Aula 03 - Backend, BaaS e APIs (Supabase) — Artefatos

## Objetivo
Integrar backend com banco de dados usando **Supabase** para o MVP **Gestão de Empréstimos da Biblioteca Comunitária** (protótipo visual da Aula 02), conforme atividade do PDF `Aula 03 - Backend, BaaS e APIs.pdf`.

## Projeto Supabase (informado)
- **Dashboard/Projeto:** https://supabase.com/dashboard/project/esvqnlllqaitohwhoacc
- **Project URL (API):** `https://esvqnlllqaitohwhoacc.supabase.co`
- **Credenciais (keys):** **não armazenadas no repositório**. A chave publicável/anon do projeto deve ser configurada localmente (ex.: `supabase-config.js`, gitignored) para o front; a chave secreta/service role **nunca** deve ser usada no frontend nem commitada. Se chaves foram expostas, rotacione-as em *Project Settings > API*.

## Artefatos entregues no repositório
- [schema.sql](../../schema.sql) (raiz) e [schema.sql](schema.sql): modelagem PostgreSQL/Supabase para `livros`, `leitores`, `emprestimos` (>= 2 tabelas), constraints, relacionamentos, índices, trigger de `updated_at`, **RLS habilitado** e **políticas** de CRUD para `anon/authenticated` (MVP/prototipação).
- [lib/supabase.ts](../../lib/supabase.ts): cliente Supabase (padrão Vite/`import.meta.env`) conforme atividade.
- [lib/supabase.js](../../lib/supabase.js): cliente utilizável no protótipo web.
- [supabase-config.example.js](../../supabase-config.example.js): exemplo de configuração local do front (copiar para `supabase-config.js`, **gitignored**, preencher `anonKey`).
- [.env.example](../../.env.example): variáveis `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (sem segredos).
- [index.html](../../index.html): integração de **CRUD no front** (listar/buscar/inserir/editar/excluir livros, cadastrar leitores, registrar empréstimos, listar/registrar devoluções) quando o Supabase está configurado; inclui ação “Inserir 3 livros (teste)”.
- [aulas/aula-03-conteudo.md](../aula-03-conteudo.md): conteúdo consolidado e checklist da Aula 03.

## Passos para concluir a configuração e validar (execução)
1. **[Concluído]** No Supabase, executar o conteúdo de `schema.sql` no **SQL Editor** (tabelas, RLS e policies).
2. **[Concluído localmente]** Configurar a chave publicável/anon no front: criar/preencher `supabase-config.js` a partir de `supabase-config.example.js` (gitignored, sem commitar segredos). *Nunca* usar a chave secreta/service role no frontend.
3. Abrir o `index.html` do projeto em um servidor local (ex.: `npm start`/`npm run dev` ou outro servidor estático) para testar o front.
4. Validar CRUD no front e conferir no **Table Editor**:
   - **Create:** inserir 3 livros (botão “Inserir 3 livros (teste)”) e/ou cadastrar livro/leitor/empréstimo.
   - **Read:** listar/buscar acervo e empréstimos.
   - **Update:** editar livro ou registrar devolução (atualiza empréstimo/livro).
   - **Delete:** excluir livro sem vínculos de empréstimo.
5. Submissão (conforme aula): link do repositório + URL do projeto Supabase.

## Observações
- O schema de seed inclui 3 livros (`LIV-001`, `LIV-014`, `LIV-022`) via `INSERT ... ON CONFLICT DO NOTHING`; o botão do front também faz upsert dos 3 livros de teste.
- Policies RLS atuais são permissivas para `anon/authenticated` visando teste do MVP; em produção devem ser restringidas (ex.: `auth.uid()`, papéis) e combinadas com autenticação.
- `supabase-config.js` e `.env` estão ignorados pelo Git (`.gitignore`).

