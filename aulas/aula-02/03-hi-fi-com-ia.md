# Aula 02 — Hi-Fi com IA (CTQ por tela)

Sistema: **Gestão de Empréstimos da Biblioteca Comunitária**  
Abordagem: prompts no formato **CTQ (Contexto, Tarefa, Quem)** por tela, com até 3 variações quando necessário. Artefato visual gerado: `hi-fi-telas.html` (4 telas em alta fidelidade, navegáveis por abas).

## Diretrizes aplicadas (tokens e hierarquia)
- Tokens de `tokens.json` / `02-tokens-visuais.md` (cores, tipografia, espaçamento, foco visível).
- Um único elemento de maior destaque por tela (H1/CTA primário).
- Feedback de sucesso/erro/bloqueio e estados de status (disponível, emprestado, atrasado).
- Fluxo sem dead-ends (navegação persistente entre as 4 telas).

---

## Tela 1 — Acervo e Disponibilidade

**CTQ - Prompt (v1):**
- **Contexto:** Sistema web interno da biblioteca comunitária (Aula 01). Usuários: Marina (coord.), Carlos (balcão), Joana (consulta). RF02/RF06: buscar por título/código e ver situação (disponível/emprestado/atrasado) e prazo.
- **Tarefa:** Gerar uma tela hi-fi de "Acervo e Disponibilidade" com barra de busca, filtros rápidos, tabela/lista de livros (título, autor, código, status, prazo) e CTAs "Cadastrar livro" e "Registrar empréstimo". Destacar status por cor/badge e um único CTA primário.
- **Quem:** Designer UI sênior focado em acessibilidade e atendimento rápido.
- **Formato:** layout responsivo em HTML/CSS com tokens (azul primário, neutros claros), componentes prontos para implementação.

**Variações/iterações:** v1 (lista densa) → v2 (cards + busca em destaque) → **v3 selecionada** (busca em destaque + tabela clara com badges e ações por linha), por equilibrar leitura rápida e densidade de informação.

**Resultado:** implementado na aba "Acervo e Disponibilidade" de `hi-fi-telas.html`.

---

## Tela 2 — Cadastro (Livro/Leitor)

**CTQ - Prompt (v1):**
- **Contexto:** Mesma aplicação; Marina/Carlos cadastram acervo e leitores (RF01, RF03). Dados mínimos: Livro (título, autor, código) e Leitor (nome, telefone).
- **Tarefa:** Gerar tela hi-fi de cadastro com formulário estruturado (seções Livro/Leitor ou alternância), rótulos claros, validação visível, botões "Salvar" (primário) e "Cancelar/Voltar" (secundário), e mensagens de sucesso/erro.
- **Quem:** Designer UI com foco em formulários simples para voluntários.
- **Formato:** HTML/CSS usando tokens, campos com foco visível e hierarquia clara.

**Variações/iterações:** v1 (form único longo) → v2 (abas Livro/Leitor) → **v2 selecionada** (abas reduzem carga cognitiva); v3 ajustou espaçamento e estados de erro.

**Resultado:** aba "Cadastro" em `hi-fi-telas.html`.

---

## Tela 3 — Registrar Empréstimo

**CTQ - Prompt (v1):**
- **Contexto:** Atendimento no balcão (Carlos/Marina). RF04: vincular leitor e livro, data de retirada, prazo padrão 14 dias, status "emprestado". RF06: bloquear/alertar se leitor tem atraso pendente, atingiu 3 ativos ou livro indisponível.
- **Tarefa:** Gerar tela hi-fi de registro de empréstimo com seleção/busca de leitor e livro, exibição de prazo calculado (14 dias), CTA primário "Confirmar empréstimo" e área de feedback para bloqueio/alerta com motivo e ação corretiva.
- **Quem:** UX/UI designer focado em fluxos de atendimento sem dead-ends.
- **Formato:** HTML/CSS com tokens, destaque do CTA e estados de alerta/erro.

**Variações/iterações:** v1 (campos soltos) → v2 (resumo do empréstimo em card) → **v2 selecionada** com painel de regra/bloqueio visível (RF06) e CTA único.

**Resultado:** aba "Registrar Empréstimo" em `hi-fi-telas.html`.

---

## Tela 4 — Empréstimos e Devoluções

**CTQ - Prompt (v1):**
- **Contexto:** Acompanhamento e atendimento (Marina/Carlos). RF05: registrar devolução atualizando status para "devolvido" e liberando exemplar. RF06: listar e destacar atrasos (prazo vencido).
- **Tarefa:** Gerar tela hi-fi com filtros por status (ativo/atrasado/devolvido), lista de empréstimos (leitor, livro, retirada, prazo, status), ação "Registrar devolução" por item elegível e mensagens de confirmação/erro.
- **Quem:** Designer UI focado em clareza operacional e acessibilidade.
- **Formato:** HTML/CSS com tokens, badges de status, linhas de atraso destacadas.

**Variações/iterações:** v1 (tabela simples) → v2 (cards) → **v3 selecionada** (tabela com filtros e destaque de atrasos + coluna de ação), melhor para gestão.

**Resultado:** aba "Empréstimos e Devoluções" em `hi-fi-telas.html`.

---

## Observações sobre uso de IA
- Prompts estruturados (CTQ) e restritos ao domínio/requisitos da Aula 01 para evitar invenção de funcionalidades.
- Saídas revisadas quanto a hierarquia, consistência com tokens, acessibilidade básica (foco/contraste/rótulos) e aderência aos RFs/RNFs.
- Até 3 variações consideradas por tela; versão final escolhida por clareza e alinhamento aos critérios (coerência, fluxo sem dead-ends, acessibilidade, uso crítico).
