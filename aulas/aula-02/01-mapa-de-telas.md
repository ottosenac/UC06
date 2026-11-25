# Aula 02 — Mapa de Telas

Sistema: **Gestão de Empréstimos da Biblioteca Comunitária** (Aula 01)  
Objetivo: suportar cadastro/consulta de acervo e leitores, registro de empréstimos e devoluções, e controle de atrasos/regras (RF01–RF06).

## 1. Visão geral e princípios

- **Profundidade de navegação:** ≤ 3 níveis a partir da entrada principal.
- **Fluxo sem dead-ends:** toda tela oferece caminho de retorno (menu/navegação) e ações com feedback (sucesso/erro).
- **Personas atendidas:** Marina (coordenação/acervo/atrasos), Carlos (atendimento rápido: empréstimo/devolução), Joana (consulta de disponibilidade/prazos no balcão).
- **Lo-fi:** etapa pulada; mapa define estrutura para hi-fi.

## 2. Mapa de navegação (alto nível)

```text
[Início / Painel]
 ├─ (1) Acervo e Disponibilidade
 │     ├─ Buscar livro (título/código)
 │     ├─ Ver detalhe/situação do exemplar
 │     └─ [Atalho] Cadastrar livro (RF01)  ──> (2) Formulário de Livro
 │
 ├─ (2) Cadastro / Gestão
 │     ├─ Novo/editar Livro (RF01)
 │     └─ Novo/editar Leitor (RF03)
 │
 ├─ (3) Registrar Empréstimo
 │     ├─ Selecionar leitor e livro
 │     ├─ Confirmar retirada/prazo (14 dias) (RF04)
 │     └─ Feedback: sucesso | bloqueio/alerta (limite/atraso/indisponível) (RF06)
 │
 └─ (4) Empréstimos, Devoluções e Atrasos
       ├─ Listar por status (ativo/devolvido/atrasado) (RF06)
       ├─ Consultar situação/prazo (RF02, RF06)
       └─ Registrar devolução (RF05) ──> Feedback + livro disponível
```

## 3. Definição das 4 telas (alta fidelidade)

| # | Tela | Objetivo principal | Conteúdo/elementos-chave | RFs | Persona(s) | Nível |
|---|---|---|---|---|---|---|
| 1 | **Acervo e Disponibilidade** | Consultar livros e situação em segundos | Busca (título/código), lista com status (disponível/emprestado/atrasado), prazo previsto quando aplicável, atalho para cadastrar/emprestar | RF02, RF06 | Marina, Carlos, Joana | 1 (a partir do menu) |
| 2 | **Cadastro (Livro/Leitor)** | Manter cadastros confiáveis | Formulário Livro (título, autor, código, disponibilidade) e Leitor (nome, telefone/contato); validação e mensagens | RF01, RF03 | Marina, Carlos | 2 (acesso via menu ou atalho) |
| 3 | **Registrar Empréstimo** | Formalizar retirada com prazo e regras | Seleção de leitor e exemplar, data retirada, prazo padrão 14 dias, confirmação, feedback de bloqueio/alerta (limite 3, atraso pendente, indisponível) | RF04, RF06 | Carlos, Marina | 2 |
| 4 | **Empréstimos e Devoluções** | Acompanhar status e concluir devolução | Lista/filtros por status (ativo/atrasado/devolvido), destaque de atrasos, ação "Registrar devolução", atualização para disponível, mensagens de erro/confirm. | RF05, RF06 | Marina, Carlos (Joana consulta prazo) | 2 |

## 4. Fluxos principais (sem dead-ends)

- **F1 Consulta de disponibilidade (Joana/Carlos):** Menu → (1) Acervo → buscar → ver status/prazo → (opcional) ir para (3) Empréstimo se disponível.
- **F2 Cadastrar livro (Marina):** Menu → (2) Cadastro → preencher → salvar → feedback sucesso → voltar/listar no (1).
- **F3 Registrar empréstimo (Carlos):** Menu → (3) Empréstimo → selecionar leitor/livro → confirmar → sucesso (mostra prazo) **ou** bloqueio com motivo e ação de voltar/corrigir.
- **F4 Registrar devolução (Carlos/Marina):** Menu → (4) Empréstimos → localizar ativo/atrasado → registrar devolução → feedback + status atualizado → disponível em (1).

## 5. Pontos de atenção de UX
- Elemento primário único por tela (hierarquia) e CTAs claros.
- Feedback imediato para sucesso, erro, bloqueio por regra e "não encontrado".
- Navegação persistente (menu/topo) para retorno ao Painel e às demais telas (profundidade ≤ 3).
