# Aula 01 - Descoberta e Requisitos (conteúdo extraído)

> **Fonte:** `Aula 01 - Descoberta e Requisitos.pdf` (material da UC6 - Prototipação Rápida de Aplicações com IA).  
> **Observação:** Extração feita por captura visual das páginas do PDF (o texto não pôde ser extraído automaticamente neste ambiente). O conteúdo abaixo consolida o que foi identificado nas capturas; para detalhes literais de todas as páginas, consulte o PDF.

---

## Conteúdo da aula (consolidado das capturas)

### Página 1 — Capa
- **Título:** Prototipação Rápida de Aplicações com IA
- **Instrutor/autor:** Tobias Pinto de Souza
- **Instituição:** Senac

### Página 4 — Objetivos/atividades iniciais e contexto de exemplo
- **Blocos identificados:**
  - **Documentar requisitos:** Produzir requisitos funcionais e não funcionais claros a partir das descobertas.
  - **Escrever histórias de usuário:** Estruturar funcionalidades com critérios de aceitação verificáveis.
  - **Validar respostas de IA:** Aplicar revisão crítica e cruzamento de fontes antes de incorporar saídas ao projeto.
- **Cenário de exemplo apresentado (salão):** "Salão Serena: agendamentos no papel, clientes na fila" — exemplo de contexto com agenda por WhatsApp/caderno, conflitos de horário, etc.  
  - *Nota do projeto:* o contexto de salão **não será mais utilizado** no projeto refatorado; o conteúdo da aula serve como referência metodológica.

### Página 7 — Prototipação rápida
- **Definição:** "Prototipação rápida é a prática de construir versões simplificadas e funcionais de uma aplicação para validar ideias, levantar requisitos e aprender com usuários em ciclos curtos e iterativos."
- **Princípios destacados:**
  - **01 Funcional:** O protótipo faz algo real (ex.: cadastra, lista, valida). Não é só imagem estática.
  - **02 Descartável:** Feito para validar hipóteses. Pode (e deve) ser reescrito quando vira produto.
  - **03 Iterativo:** Ciclos curtos: constrói-se, testa-se, aprende-se, ajusta-se. Sem ciclos longos.

### Página 11 — Estrutura CTQF (Contexto, Tarefa, Quem, Formato)
- **Ideia:** Um prompt eficaz não é uma frase solta — é uma instrução estruturada (CTQF; relacionado a padrões como RTF/CRISP).
- **Elementos:**
  - **C (Contexto):** Domínio, restrições, público.
  - **T (Tarefa):** O que produzir, com qual profundidade.
  - **Q (Quem):** Persona de execução (analista, dev sênior, UX).
  - **F (Formato):** Lista, tabela, JSON, markdown, código.
- **Checklist do prompt:** contexto (usuário/domínio/problema), tarefa (o que produzir), quem/papel, formato de entrega.

### Página 16 — Requisitos e documentação
- **Seção:** Requisitos e documentação
- **Texto visível:** "Da persona ao documento técnico que o resto da UC vai consumir."

### Página 21 — Atividade (última página)
- **Título:** Exercício 01 - Sistema selecionado para executar
- **Subtítulo:** Documento de requisitos gerado por IA, validado por humanos.
- **Checklist de validação humana (conforme slide):**
  - **Cruzamento:** Cada RF tem persona associada? Cada RNF é mensurável?
  - **Viés:** IA inventou APIs, bibliotecas ou padrões inexistentes? Verifique.
  - **Clareza:** Um dev novo consegue ler e entender em 5 minutos?
  - **Segurança:** RNFs cobrem autenticação, dados sensíveis e LGPD?
- **Formato/entrega:** "FORMATO: MARKDOWN (README.MD) NO REPOSITÓRIO DO PROJETO (criar git)"

---

## Checklist do que deve ser executado (resultado esperado da atividade)

- [x] **Definir/selecionar o sistema** que será executado ao longo da UC (substituindo o contexto de salão, conforme nova diretriz do projeto).
- [x] **Realizar descoberta e levantamento** (problema, público/personas, dores, necessidades) conforme orientações da aula.
- [x] **Documentar requisitos** funcionais e não funcionais claros a partir das descobertas.
- [x] **Escrever histórias de usuário** com critérios de aceitação verificáveis (quando aplicável ao formato pedido).
- [x] **Gerar o documento de requisitos com apoio de IA** e **validar com revisão humana** aplicando o checklist do slide:
  - [x] **Cruzamento:** cada RF tem persona associada? Cada RNF é mensurável?
  - [x] **Viés:** verificar se a IA inventou APIs, bibliotecas ou padrões inexistentes.
  - [x] **Clareza:** um desenvolvedor novo consegue ler e entender em ~5 minutos.
  - [x] **Segurança:** RNFs cobrem autenticação, dados sensíveis e LGPD.
- [x] **Produzir o artefato em Markdown** (`README.md`) no **repositório do projeto**.
- [x] **Criar/configurar o repositório Git** do projeto (se ainda não existir) e versionar o documento.
- [x] **Registrar ajustes** decorrentes da validação (rastreabilidade entre personas, RFs e RNFs).

