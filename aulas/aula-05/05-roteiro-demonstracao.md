# Roteiro da Demonstração - Biblioteca Comunitária

**Duração alvo:** 5 minutos.  
**Cenário único:** cadastrar dados mínimos e registrar um empréstimo, mostrando a persistência e a responsividade.

## Preparação

- Abrir `http://127.0.0.1:5174/` ou a URL pública do deploy quando existir.
- Confirmar conexão com o Supabase e deixar o navegador em uma largura de celular ao final.
- Não mostrar chaves, `.env.local` ou painel de credenciais.

## Fala e ações

| Tempo | Ação na tela | Fala sugerida |
|---:|---|---|
| 0:00-0:35 | Abrir Acervo | “Uma biblioteca comunitária perde tempo com cadernos e não sabe rapidamente se um livro está disponível. Aqui o acervo é consultado em segundos.” |
| 0:35-1:20 | Tela Cadastro: criar leitor e livro de demonstração | “O atendente cadastra apenas os dados essenciais do leitor e do exemplar. A interface valida os campos antes de enviar.” |
| 1:20-2:15 | Tela Empréstimo: selecionar leitor e livro; confirmar | “O empréstimo relaciona o leitor ao livro, define o prazo e atualiza a disponibilidade no banco.” |
| 2:15-2:55 | Tela Devoluções | “A operação fica registrada. Ao devolver, o exemplar volta para disponível.” |
| 2:55-3:35 | Voltar ao Acervo e pesquisar o código | “Os dados persistem no Supabase; não são uma lista fixa do protótipo.” |
| 3:35-4:15 | Reduzir largura do navegador | “O layout é mobile-first e mantém a navegação e os estados de interface em telas menores.” |
| 4:15-5:00 | Encerrar no pitch | “O próximo passo é validar com usuários da biblioteca, automatizar a regra de atrasos e publicar o MVP.” |

## Plano de contingência

- Se a rede falhar, mostre o estado de erro amigável e explique que a tela trata a indisponibilidade do backend.
- Se não houver dados, use o fluxo Cadastro; ele foi testado ponta a ponta pelo Playwright.
