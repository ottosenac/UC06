# Aula 02 — Respostas às Perguntas Finais

Contexto: 4 telas hi-fi do sistema **Gestão de Empréstimos da Biblioteca Comunitária** — (1) Acervo e Disponibilidade, (2) Cadastro (Livro/Leitor), (3) Registrar Empréstimo, (4) Empréstimos e Devoluções.

---

## Pergunta 1 — Hierarquia
**Enunciado:** Em cada uma das suas 4 telas, qual é o ÚNICO elemento que fala mais alto? Você consegue apontá-lo em 2 segundos?

**Resposta:**

| Tela | Único elemento que mais se destaca | Por que é identificado em ~2s |
|---|---|---|
| 1. Acervo e Disponibilidade | **Campo de busca (título/código) + título "Acervo e Disponibilidade"** como ponto de entrada, com CTA primário "Buscar/Consultar" em cor de marca | Posicionado no topo da área principal, maior área de interação e contraste do botão primário; responde à tarefa imediata das personas (localizar livro/situação) |
| 2. Cadastro (Livro/Leitor) | **Botão primário "Salvar"** (no contexto do formulário ativo) apoiado pelo título da seção/aba ativa | CTA primário com cor de marca e peso visual; hierarquia do formulário conduz o olhar até a ação de conclusão |
| 3. Registrar Empréstimo | **Botão primário "Confirmar empréstimo"** | Única ação final de maior contraste na tela, precedida pelo resumo (leitor, livro, prazo) que prepara a decisão |
| 4. Empréstimos e Devoluções | **Lista/tabela de empréstimos com status (destaque para "Atrasado") e ação "Registrar devolução"**; o elemento âncora é o **bloco de status/atrasos em evidência** no topo da lista | Badges de status (especialmente atraso) e cabeçalho da seção criam foco imediato; ação de devolução é o CTA operacional principal por item |

Em todas as telas foi aplicado o princípio de hierarquia (tamanho, cor/contraste, espaçamento e tipografia) para garantir um ponto focal dominante.

---

## Pergunta 2 — Acessibilidade
**Enunciado:** Você conseguiria navegar pelas suas telas só com o teclado (Tab, Enter, Esc)? O foco está visível em todos os botões?

**Resposta:**
- **Navegação por teclado (proposta hi-fi):** a estrutura das telas foi planejada para ordem lógica de tabulação (menu → busca/filtros → conteúdo → ações). Elementos interativos (links de navegação, campos, botões, abas/filtros) são nativos ou previstos como focáveis; `Enter` aciona botões/links e `Esc` deve fechar/descartar contextos sobrepostos (ex.: diálogos de confirmação), quando existirem. No artefato HTML estático, a navegação entre telas ocorre por abas/links focáveis; na implementação real, deve-se garantir `tabindex` adequado e ausência de armadilhas de foco.
- **Foco visível:** os tokens definem indicador de foco (`color.focus` e `border.focusRing`) para que **todos os botões, links e campos** exibam contorno visível ao receber foco via teclado, sem remover o outline padrão sem substituto equivalente.
- **Situação atual:** a acessibilidade foi **especificada e parcialmente aplicada no hi-fi** (foco, contraste, rótulos), mas a conformidade plena (Tab/Enter/Esc em todos os fluxos, leitores de tela, POUR) deve ser **validada no protótipo/código interativo**. Ajustes identificados como necessários na implementação: garantir foco em todos os controles, ordem de tabulação coerente, mensagens de erro associadas aos campos e fechamento por `Esc` em modais.

---

## Pergunta 3 — Validação humana
**Enunciado:** A IA gerou componentes que você não entende completamente (CSS não óbvio, classes desconhecidas)? O que você fez para validar?

**Resposta:**
- **Revisão crítica do que foi gerado:** os artefatos hi-fi e estilos foram revisados para assegurar compreensão do layout (estrutura HTML, classes, flex/grid, estados de foco/hover e badges de status). Componentes ou trechos não essenciais/obscuros foram simplificados ou documentados nos arquivos `.md`.
- **Validação contra requisitos e tokens:** conferência de aderência aos RFs/RNFs da Aula 01 (fluxos de empréstimo/devolução, regras RF06, campos mínimos) e aos tokens definidos (cores, tipografia, espaçamento), evitando elementos "inventados" sem relação com o domínio.
- **Validação de consistência e acessibilidade:** checagem de hierarquia (um elemento dominante por tela), coerência visual entre telas, presença de feedback/estados e indicação de foco visível.
- **Validação prática recomendada:** executar o HTML no navegador, navegar por teclado (Tab/Enter/Esc), testar responsividade e, na fase de implementação, inspecionar CSS/DOM e ajustar classes/comportamentos não compreendidos antes de incorporar ao projeto. Nada foi tratado como correto apenas por ter sido gerado por IA.

---

## Pergunta 4 — Uso crítico da IA (resposta reflexiva complementar)
**Enunciado (complementar, alinhado ao critério 4 "Uso crítico da IA — não copia cega"):** Como você garantiu que o uso da IA foi crítico e não uma cópia cega?

**Resposta:**
- **Prompts com contexto e restrições (CTQ):** cada tela foi solicitada com contexto do domínio, personas, RFs/RNFs e tokens, reduzindo respostas genéricas.
- **Iteração e seleção:** consideradas variações (até 3 por tela) e escolhida a versão mais clara e aderente aos critérios (coerência, fluxo sem dead-ends, acessibilidade).
- **Verificação humana:** cruzamento com o mapa de telas, regras de negócio (prazo 14 dias, limite 3, atraso), consistência visual e compreensão do código/CSS gerado; ajustes aplicados onde havia ambiguidade ou excesso.
- **Rastreabilidade:** decisões e prompts documentados em `03-hi-fi-com-ia.md`, limitações e correções registradas no teste heurístico (`04-teste-heuristico.md`).
