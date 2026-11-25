# Aula 04 - Frontend e Integração

## Objetivo da etapa

Transformar o protótipo da Biblioteca Comunitária em uma interface funcional com **React 19**, **Vite**, **Tailwind 4** e o **Supabase** configurado na Aula 03. O PDF usa um salão como cenário didático; nesta entrega, as mesmas quatro telas foram adaptadas às histórias de usuário do sistema de empréstimos.

## Conteúdo aplicado

- Componentes React reutilizáveis, props e estado com `useState`/`useEffect`.
- Formulários controlados e validação no cliente para melhorar a experiência de uso.
- Integração por SDK `@supabase/supabase-js`, com tratamento de loading, sucesso, vazio e erro.
- Layout responsivo mobile-first em Tailwind (uma coluna no celular, duas em telas médias e três no desktop para o acervo).
- Mensagens de falha amigáveis e tentativa novamente nas leituras de dados.

## Entrega implementada

O app está em [`frontend/`](frontend/), separado do protótipo estático e do backend Node/MySQL legado da raiz.

| Tela | Operação Supabase | Estados de UI |
|---|---|---|
| Acervo e disponibilidade | `SELECT` em `livros`, busca por título/código | loading, sucesso, vazio, erro |
| Cadastro de livro | `INSERT` em `livros` | validação, enviando, sucesso, erro |
| Registrar empréstimo | `SELECT` em `leitores`/`livros` + `INSERT` em `emprestimos` + `UPDATE` em `livros` | loading, sucesso, vazio, erro |
| Empréstimos e devoluções | `SELECT` em `emprestimos` + `UPDATE` para devolução e disponibilidade | loading, sucesso, vazio, erro |

### Componentes base

- `Button`: variantes primária, secundária, perigo e neutra.
- `Input`: rótulo acessível, foco visível e mensagem de validação.
- `Card`: superfície reutilizável de conteúdo.
- `Badge`: status de livro/empréstimo.
- `LoadingState`, `EmptyState`, `ErrorState` e `SuccessState`: feedback claro para operações assíncronas.

## Como executar

1. Entre em `aulas/aula-04/frontend`.
2. Copie `.env.example` para `.env.local`.
3. Preencha apenas `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com a URL e a chave **publicável/anon** do projeto da Aula 03. Não use a chave `service_role`.
4. Execute `npm install` e `npm run dev`.
5. Abra a URL mostrada pelo Vite (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
```

## Validação realizada

- `npm install` concluído sem vulnerabilidades reportadas.
- `npm run build` concluído com sucesso em 25/11/2026.
- As quatro telas foram abertas localmente com a configuração existente. Após aplicar as policies RLS e os privilégios SQL (`GRANT`) do schema no projeto Supabase, o acervo carregou os três livros de teste; empréstimos e devoluções renderizaram seus estados vazios sem erro de permissão.

## Checklist da Aula 04

- [x] Gerar e revisar componentes base reutilizáveis (Button, Input, Card e Badge).
- [x] Implementar quatro telas em React + Tailwind, adaptadas ao MVP Biblioteca Comunitária.
- [x] Implementar operações reais do SDK Supabase (consulta, inserção e atualização) no código do frontend.
- [x] Desenhar estados loading, success, empty e error nas telas que fazem chamadas assíncronas.
- [x] Aplicar validação client-side nos formulários, mantendo as constraints/segurança no banco.
- [x] Implementar navegação entre as quatro telas e layout responsivo (mobile, tablet e desktop).
- [x] Documentar execução, configuração e validação técnica nesta README.
- [x] Validar o bundle de produção com `npm run build`.
- [x] Executar e confirmar policies RLS e privilégios SQL no Supabase; validar leituras do frontend contra o projeto.
- [ ] Registrar screenshots funcionais das quatro telas após a configuração local do Supabase.
- [ ] Publicar em Vercel/Netlify e anexar a URL pública da submissão.
