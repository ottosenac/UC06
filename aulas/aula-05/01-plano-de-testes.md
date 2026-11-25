# Plano de Testes - Biblioteca Comunitária

**Data da execução técnica:** 25/11/2026  
**Ambiente:** React 19 + Vite + Tailwind 4 + Supabase; navegador Chromium via Playwright.  
**Escopo:** MVP de acervo, leitores, empréstimos e devoluções.

## Matriz de rastreabilidade

| RF | Requisito | Evidência/teste | Status |
|---|---|---|---|
| RF01 | Cadastrar livro no acervo | CT-US01-01, CT-US01-02, E2E passos 1-2 | Aprovado |
| RF02 | Consultar e buscar acervo | CT-US01-06, tela Acervo | Aprovado |
| RF03 | Cadastrar leitor | CT-US01-03, CT-US01-04, E2E passo 3 | Aprovado |
| RF04 | Registrar empréstimo com prazo | CT-US01-05, CT-US01-07, E2E passo 4 | Aprovado |
| RF05 | Registrar devolução/liberar exemplar | CT-US01-08, CT-US01-09 | Pendente de execução manual completa |
| RF06 | Indicar atraso, limite e bloqueio | CT-US01-09 | Pendente: regra de limite/atraso ainda não está automatizada no frontend |

**Cobertura atual:** 4 de 6 RFs com evidência técnica completa; RF05 parcial e RF06 pendente. O ponto pendente é apresentado como risco conhecido, não como requisito concluído.

## Casos funcionais - US-01 Registrar empréstimo

| ID | Cenário | Pré-condição | Passos resumidos | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|---|
| CT-US01-01 | Cadastrar livro válido | Supabase disponível | Informar título, autor e código com valores válidos | Livro salvo como disponível | Validado no E2E | Aprovado |
| CT-US01-02 | Livro sem título | Tela Cadastro aberta | Deixar título vazio e salvar | Mensagem de mínimo de caracteres; não envia | Validação client-side exibida | Aprovado |
| CT-US01-03 | Cadastrar leitor válido | Supabase disponível | Informar nome e telefone válidos | Leitor persistido | Validado no E2E | Aprovado |
| CT-US01-04 | Telefone inválido | Tela Cadastro aberta | Informar menos de 8 dígitos | Mensagem de telefone inválido; não envia | Validar manualmente na sessão de usabilidade | Pendente |
| CT-US01-05 | Empréstimo válido | Leitor e livro disponível | Selecionar os dois e confirmar | Empréstimo criado; livro fica emprestado | Validado no E2E | Aprovado |
| CT-US01-06 | Consulta do acervo | Livros cadastrados | Abrir Acervo e buscar por código | Livro e status corretos são exibidos | Três livros carregados após RLS/GRANT | Aprovado |
| CT-US01-07 | Empréstimo sem seleção | Tela Empréstimo aberta | Não selecionar leitor/livro e confirmar | Interface bloqueia e explica o campo faltante | Coberto pelo componente; validar manualmente | Pendente |
| CT-US01-08 | Devolução de item ativo | Empréstimo ativo | Registrar devolução na tela Devoluções | Status devolvido e livro disponível | Fluxo implementado; validar manualmente | Pendente |
| CT-US01-09 | Regra de limite/atraso | Leitor com 3 itens/atraso | Tentar novo empréstimo | Bloqueio/alerta explícito | Regra ainda não automatizada | Falha conhecida |

## Integração E2E

Arquivo: [`../aula-04/frontend/tests/emprestimo-flow.spec.js`](../aula-04/frontend/tests/emprestimo-flow.spec.js)

O teste executa em navegador real e valida:

1. cadastro de livro no Supabase;
2. cadastro de leitor no Supabase;
3. seleção dos registros na tela de empréstimo;
4. criação do empréstimo e atualização do status do livro;
5. exibição do empréstimo na tela Devoluções.

**Resultado:** `1 passed` em 25/11/2026 (aprox. 5,2 s). Os dados de evidência usam prefixo `E2E-`.
