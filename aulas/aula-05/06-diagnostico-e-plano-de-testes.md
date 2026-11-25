# Aula 05 — Diagnóstico e plano de testes

**Projeto:** Entrelinhas — gestão de acervo e empréstimos  
**Data dos registros:** 25/11/2026  
**Ambiente:** aplicação React, Supabase e navegador Chromium; automação com Playwright.

## Objetivo e método

Verificar se o aplicativo permite cadastrar livros e leitores, consultar o acervo e registrar empréstimos e devoluções, além de identificar problemas de integração e de uso. A atividade reúne testes funcionais, integração ponta a ponta, observação de usabilidade e diagnóstico de defeitos com apoio de IA.

## 1. Matriz de rastreabilidade

| Requisito | Evidência associada | Resultado |
|---|---|---|
| RF01 — Cadastrar livro | Casos 01 e 02; fluxo E2E | Aprovado para os cenários executados |
| RF02 — Consultar acervo | Caso 06; leitura real no Supabase | Listagem aprovada; busca específica requer confirmação |
| RF03 — Cadastrar leitor | Caso 03; fluxo E2E | Aprovado para dados válidos |
| RF04 — Registrar empréstimo | Caso 05; fluxo E2E | Aprovado para o fluxo válido |
| RF05 — Registrar devolução | Caso 08 | Implementado; teste completo ainda não comprovado |
| RF06 — Controlar atraso e limite | Caso 09 | Regra de limite/atraso não automatizada no frontend |

## 2. Testes funcionais — história de empréstimo

| Caso | Cenário e passos | Resultado esperado | Evidência / resultado |
|---|---|---|---|
| 01 | Cadastrar livro com título, autor e código válidos | Livro salvo como disponível | Aprovado no fluxo E2E |
| 02 | Tentar cadastrar livro sem título | Mensagem junto ao campo; sem envio | Aprovado na validação do formulário |
| 03 | Cadastrar leitor com nome e telefone válidos | Leitor persistido | Aprovado no fluxo E2E |
| 04 | Tentar cadastrar leitor sem telefone | Mensagem de validação; sem envio | Aprovado no teste automatizado de validações |
| 05 | Selecionar leitor e livro e confirmar empréstimo | Registro criado; livro emprestado | Aprovado no fluxo E2E |
| 06 | Abrir o acervo conectado | Livros e situações exibidos | A listagem carregou dados reais do Supabase |
| 07 | Tentar empréstimo sem selecionar leitor ou livro | Operação bloqueada com orientação | Tratamento implementado; execução manual não registrada |
| 08 | Registrar devolução de empréstimo ativo | Registro devolvido e livro disponível | Implementado; execução completa não registrada |
| 09 | Tentar emprestar com limite ou atraso pendente | Bloqueio ou alerta claro | Regra ainda não implementada no frontend |

Teste adicional: ao simular código de livro duplicado, o sistema exibiu uma mensagem específica e preservou os dados do formulário. Campos obrigatórios de livro e leitor também foram validados.

## 3. Integração ponta a ponta

O teste automatizado abriu o aplicativo, cadastrou livro e leitor, registrou um empréstimo e confirmou a presença do registro na tela de empréstimos. O fluxo utilizou Supabase e registros identificados com prefixo `E2E-`.

**Resultado registrado:** 1 teste E2E aprovado em 25/11/2026. Em outra execução, também passaram os testes de navegação, tema e seletores. O teste de validação de formulários e código duplicado passou posteriormente.

**Arquivo executável no projeto:** `aulas/aula-04/frontend/tests/emprestimo-flow.spec.js`.

**Limite:** o teste E2E acima não comprova exclusão nem devolução completa. Empréstimo e devolução fazem duas gravações separadas; uma falha entre elas pode deixar os dados inconsistentes.

## 4. Usabilidade — autoteste do responsável

O responsável pelo projeto avaliou a navegação e relatou os seguintes pontos:

| Observação | Diagnóstico e encaminhamento |
|---|---|
| Não encontrou uma forma clara de desistir do empréstimo | Foram adicionados “Voltar” e “Cancelar”; teste de navegação passou. |
| Havia ações duplicadas para iniciar empréstimo | A ação foi concentrada na navegação principal. |
| A opção de adicionar não foi encontrada inicialmente | O responsável informou depois que a encontrou em Cadastros; recomenda-se observar a descoberta por outros usuários. |
| Alguns botões pareceram não responder | Relato sem identificação do botão e passos suficientes para reprodução; não é possível atribuir uma correção específica. |
| A integração com Supabase apresentava falha de permissão | As permissões foram revistas; as leituras passaram no reteste. |

**Registro:** tempo, quantidade de cliques e conclusão cronometrada não foram informados. Esta avaliação é um autoteste; não representa duas sessões independentes com colegas.

## 5. Diagnóstico dos três defeitos prioritários

### 01 — Acesso negado às tabelas

- **Reprodução:** abrir o acervo com o projeto Supabase configurado; a resposta era `permission denied for table livros`.
- **Causa identificada:** as políticas RLS existiam, mas faltavam privilégios SQL para as funções de acesso da aplicação.
- **Correção:** configurar os privilégios necessários para as três tabelas do MVP e sequências, mantendo as políticas RLS.
- **Reteste:** os livros passaram a carregar no acervo, e as telas de empréstimos consultaram os dados sem esse erro.

### 02 — Erro de sintaxe ao executar o schema

- **Reprodução:** colar o SQL no editor do Supabase; o editor indicava erro na primeira linha.
- **Causa identificada:** caractere invisível BOM no início do arquivo.
- **Correção:** salvar o schema em UTF-8 sem BOM.
- **Reteste:** o editor retornou sucesso.

### 03 — Ausência de cadastro de leitor no frontend

- **Reprodução:** em uma base sem leitores, o formulário de empréstimo solicitava cadastro, mas a tela de cadastro oferecia apenas livros.
- **Causa identificada:** faltava um formulário de leitor na aplicação React.
- **Correção:** incluir cadastro de leitor com validação de nome e telefone.
- **Reteste:** o fluxo E2E cadastrou leitor e livro, criou empréstimo e confirmou o registro na listagem.

## 6. Priorização MoSCoW

| Prioridade | Itens |
|---|---|
| **Must** | Cadastro de livros e leitores, consulta ao acervo, empréstimo, devolução, persistência e feedback de erros. |
| **Should** | Implementar e validar regras de limite e atraso; melhorar confirmação de ações e acessibilidade. |
| **Could** | Perfis de acesso, lembretes, dashboard e exportação. |
| **Fora desta versão** | Aplicativo nativo, pagamentos, calendário externo e sincronização offline complexa. |

## 7. Limitações da IA e revisão humana

A IA ajudou a elaborar testes e hipóteses, mas as sugestões precisaram ser verificadas: políticas RLS não substituem os privilégios SQL; um seletor de teste inicialmente era ambíguo; e observações de usabilidade não podem ser presumidas. Não foram criados resultados para participantes inexistentes. A decisão sobre regras de negócio e a avaliação por usuários dependem de validação humana.

## Conclusão

O fluxo principal de cadastro e empréstimo foi demonstrado com integração real ao banco. Permanecem como pontos de atenção a validação completa de devolução e exclusão, a aplicação das regras de atraso/limite e a consistência das operações quando uma gravação falha. O autoteste revelou melhorias úteis de navegação, mas não substitui uma avaliação independente de usabilidade.
