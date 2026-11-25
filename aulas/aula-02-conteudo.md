# Aula 02 - UX/UI Design (conteúdo extraído e orientações)

> **Fonte:** `Aula 02 - UX e UI Design.pdf` (UC6 - Prototipação Rápida de Aplicações com IA).  
> **Observação:** Extração parcial por captura visual de páginas do PDF (texto não extraído automaticamente neste ambiente). Este arquivo consolida os pontos identificados e o que deve ser executado na atividade, com a **etapa de lo-fi pulada** conforme solicitado.
> **Contexto do projeto:** Sistema **Gestão de Empréstimos da Biblioteca Comunitária** (definido na Aula 01), substituindo o contexto de salão.

---

## Conteúdo/temas identificados (consolidado das capturas)

- **Jornada do usuário (exemplo do material):** etapas da dor ao sucesso, com pontos de fricção, momento de verdade e métrica de sucesso (exemplo ilustrativo no domínio de salão; adaptar ao domínio da biblioteca).
- **Hierarquia visual:** guiar o olhar da informação mais importante para a menos importante usando tamanho, cor/contraste, espaçamento e tipografia. Sem hierarquia, o usuário não sabe onde clicar primeiro.
  - Tamanho: maior = mais importante (título > subtítulo > corpo).
  - Cor e contraste: botões primários em cor de marca; secundários em outline.
  - Espaçamento: mais espaço ao redor = mais destaque.
  - Tipografia: pesos diferenciados (ex.: 800 título, 500 subtítulo, 400 corpo).
- **Tokens visuais:** definir paleta de cores, tipografia e espaçamento (ex.: referência a paleta/tokens do projeto; possibilidade de usar paleta Senac Tech). Exemplo citado no material: `tokens.json`.
- **Atividades/cronograma identificados no slide:**
  - Passo 1: **Mapa de telas**
  - Passo 2: **Lo-fi** *(pulado nesta execução)*
  - Passo 3: **Tokens**
  - Passo 4: **Hi-fi com IA**
  - Passo 5: **Heurístico**
- **Instruções de entrega (capturadas):**
  - 03 **Defina tokens visuais:** escolha paleta (pode usar Senac Tech), tipografia e espaçamento.
  - 04 **Gere hi-fi com IA:** use prompt CTQ por tela; itere até 3 variações se necessário.
  - 05 **Teste heurístico:** aplique as 5 heurísticas principais em cada tela; corrija críticos.
  - Formato: **Markdown (escolher melhor estrutura ou perguntar para IA) e colocar no Git do projeto (GitHub)**.
- **Autoavaliação (itens visíveis):** distinguir UX de UI por perguntas-guia; mapear jornada com pontos de fricção; mapa de telas com profundidade ≤ 3; definir tokens (cores, tipo, espaçamento); 4 telas em alta fidelidade prontas; teste heurístico aplicado em cada tela.
- **Critérios de avaliação do professor (visíveis):** 1) Coerência visual entre telas; 2) Fluxo sem dead-ends; 3) Acessibilidade básica (POUR-P, POUR-O); 4) Uso crítico da IA (não copia cega).

---

## Perguntas finais do PDF ("Antes de encerrar — pause e responda")

> Transcrição das perguntas visíveis nas capturas do slide final. O enunciado solicitado menciona 4 perguntas; nas capturas disponíveis foram identificadas 3 perguntas explícitas (abaixo). As respostas estão em `aulas/aula-02/05-respostas-perguntas-finais.md`.

1. **Hierarquia:** Em cada uma das suas 4 telas, qual é o ÚNICO elemento que fala mais alto? Você consegue apontá-lo em 2 segundos?
RE: Botões de confirmação.
2. **Acessibilidade:** Você conseguiria navegar pelas suas telas só com o teclado (Tab, Enter, Esc)? O foco está visível em todos os botões? 
RE: Sim.
3. **Validação humana:** A IA gerou componentes que você não entende completamente (CSS não óbvio, classes desconhecidas)? O que você fez para validar?
RE: Sim, validei testando em tela, visualizando erros no console e de network.

---

## Checklist do que deve ser executado (Aula 02) — lo-fi pulado

- [x] **Definir o mapa de telas** do sistema (fluxo/navegação, profundidade ≤ 3) — `aulas/aula-02/01-mapa-de-telas.md`.
- [ ] ~~Lo-fi~~ (etapa pulada).
- [x] **Definir tokens visuais** (paleta, tipografia, espaçamento) — `aulas/aula-02/02-tokens-visuais.md`, `aulas/aula-02/tokens.json`.
- [x] **Gerar hi-fi com IA** (prompt CTQ por tela, até 3 variações se necessário) — `aulas/aula-02/03-hi-fi-com-ia.md`, `aulas/aula-02/hi-fi-telas.html`.
- [x] **Aplicar teste heurístico** (5 heurísticas principais em cada tela; corrigir críticos) — `aulas/aula-02/04-teste-heuristico.md`.
- [x] **Responder as perguntas finais do PDF** — `aulas/aula-02/05-respostas-perguntas-finais.md`.
- [ ] **Organizar/registrar no Git do projeto**.


