# Bugs, Diagnóstico e Correções com IA

O processo seguiu o workflow da aula: reproduzir, reunir contexto, levantar hipóteses, validar a hipótese e retestar. Nenhuma correção foi marcada como concluída sem reteste.

## BUG-01 - Acesso negado às tabelas no frontend

- **Prioridade:** Must / alta - bloqueava todas as leituras do MVP.
- **Reprodução:** abrir Acervo com URL e chave publicável configuradas; retorno `permission denied for table livros`.
- **Diagnóstico:** RLS policies existiam no projeto, mas as roles `anon`/`authenticated` não possuíam privilégios SQL de tabela e sequência.
- **Hipótese validada:** consulta às policies retornou 12 policies corretas; o erro persistiu até a concessão dos privilégios.
- **Correção:** adicionar `GRANT USAGE` no schema, CRUD apenas para `livros`, `leitores` e `emprestimos`, e `USAGE, SELECT` em sequências.
- **Reteste:** Acervo carregou `Capitães da Areia`, `Dom Casmurro` e `Vidas Secas`; telas de empréstimo/devoluções também consultaram sem erro.

## BUG-02 - `schema.sql` falhava no SQL Editor

- **Prioridade:** Must / alta - impedia configurar o banco para a turma.
- **Reprodução:** colar o schema no SQL Editor; erro `42601: syntax error at or near "BOM"` na linha 1.
- **Diagnóstico:** o arquivo estava em UTF-8 com BOM (`EF BB BF`), caractere invisível interpretado pelo editor antes do comentário SQL.
- **Correção:** normalizar `schema.sql` para UTF-8 sem BOM.
- **Reteste:** SQL Editor retornou `Success. No rows returned.`

## BUG-03 - Fluxo de empréstimo sem cadastro de leitor no frontend React

- **Prioridade:** Must / alta - em uma base nova a tela Empréstimo mostrava estado vazio e não oferecia como criar o leitor necessário.
- **Reprodução:** abrir o frontend sem leitores cadastrados; a tela orientava a cadastrar leitor, mas a tela Cadastro oferecia apenas livro.
- **Diagnóstico:** `App.jsx` renderizava somente `BookForm`; não havia componente/ação para `leitores`.
- **Correção:** criar `ReaderForm.jsx`, com validação de nome e telefone, e adicioná-lo à tela Cadastro.
- **Reteste:** Playwright cadastrou leitor, livro, empréstimo e confirmou o registro em Devoluções (`1 passed`).

## Falha de teste corrigida durante a automação

O primeiro teste Playwright criou o empréstimo, mas falhou na asserção porque havia dois badges “Em dia” na tela e o seletor era ambíguo. A asserção foi restringida ao item do empréstimo criado. O reteste passou; isso é uma correção da automação de teste, não um defeito do produto.

## Observações do autoteste do responsável

- **UX-01 - Saída do empréstimo:** o usuário relatou que não havia como voltar quando desistia. Foram adicionados “Voltar” e “Cancelar”; teste de navegação automatizado passou.
- **UX-02 - Ações duplicadas:** o usuário apontou botões repetidos de novo/registrar empréstimo. A ação foi concentrada na navegação principal.
- **UX-03 - Encontrabilidade do cadastro:** após a reorganização, o usuário inicialmente não encontrou como adicionar e depois informou que encontrou. A opção permanece em “Cadastros”; observação registrada para futura validação com outras pessoas.
- **UX-04 - Botões sem resposta:** relato geral do usuário, sem identificação de botão ou passos suficientes para reproduzir. **Em aberto** até nova reprodução; não há evidência para atribuir uma correção específica.
- **UX-05 - Supabase não funcionava:** o acesso retornou `permission denied` durante a integração. Ver BUG-01: privilégios SQL foram aplicados e as leituras foram retestadas com sucesso.
