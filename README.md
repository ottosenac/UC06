# UC06 - Prototipação Rápida de Aplicações com IA

**Sistema selecionado (Aula 01):** Gestão de Empréstimos da Biblioteca Comunitária  
**Padrão técnico do projeto:** Node.js + Express + MySQL (backend), frontend web integrado ao backend.  
**Contexto:** o projeto é desenvolvido por etapas (aulas), utilizando os PDFs como referência e executando as atividades solicitadas. O contexto de salão usado como exemplo no material não é mais adotado.

---

## Aula 01 — Descoberta e Requisitos

### 1. Problema escolhido

**Sistema:** Gestão de Empréstimos da Biblioteca Comunitária

**Contexto:** Uma biblioteca comunitária de bairro realiza o controle de acervo e empréstimos de livros de forma manual (caderno/planilhas). O atendimento é feito por bibliotecários e voluntários, e os leitores são moradores da comunidade.

**Principais dores:**
- Dificuldade para saber rapidamente se um livro está disponível, emprestado ou atrasado.
- Registros manuais geram inconsistências (empréstimos sem baixa, perda de histórico, dados duplicados).
- Falta de controle de prazos de devolução, gerando atrasos e conflitos na reserva/retirada.
- Tempo de atendimento alto para consultas simples (disponibilidade, situação do leitor, itens emprestados).

**Objetivo do sistema (visão inicial):** Centralizar o cadastro do acervo e dos leitores, registrar empréstimos e devoluções, e permitir consulta rápida da disponibilidade e da situação dos empréstimos.

### 2. Entrevista simulada (descoberta)

**Data:** 2026-11-24  
**Entrevistador:** Analista de requisitos (equipe do projeto)  
**Entrevistados:**  
- **Marina** — Bibliotecária/coordenadora da biblioteca (gestão do acervo e regras)  
- **Carlos** — Voluntário no balcão de atendimento  
- **Joana** — Moradora e leitora frequente

#### Roteiro e respostas

**P1. Qual é o maior problema no dia a dia da biblioteca?**  
- **Marina:** "Hoje não temos controle confiável. Às vezes o livro consta no caderno como disponível, mas não está na estante. Também perdemos o histórico de quem ficou com o livro por muito tempo."  
- **Carlos:** "No balcão eu preciso folhear anotações para saber se posso emprestar. Isso demora e forma fila."  
- **Joana:** "Já vim buscar um livro reservado informalmente e ele estava emprestado. Ninguém sabia quando ia devolver."

**P2. Quais informações precisam ser registradas em um empréstimo?**  
- **Marina:** "Precisamos saber qual livro, qual leitor, data de retirada, prazo de devolução e a situação: emprestado, devolvido ou atrasado."  
- **Carlos:** "Também ajuda ter um contato do leitor para avisar sobre devolução."  
- **Joana:** "Quero saber a data que devo devolver e se posso renovar, se não houver fila."

**P3. Como funciona o cadastro de leitores e do acervo hoje?**  
- **Marina:** "Leitor é anotado com nome e telefone; às vezes documento. Os livros têm título, autor e um código interno, mas nem todos estão etiquetados corretamente."  
- **Carlos:** "Seria bom buscar por título ou código rapidamente."

**P4. Quais regras/prazos vocês seguem?**  
- **Marina:** "Prazo padrão de 14 dias. Um leitor pode ter no máximo 3 livros ao mesmo tempo. Não emprestamos se houver atraso pendente."  
- **Carlos:** "Na prática, às vezes abrimos exceção, mas o ideal é o sistema alertar."

**P5. Quem vai usar o sistema e em que situação?**  
- **Marina:** "Eu cadastro e corrijo o acervo e acompanho relatórios simples de atrasos."  
- **Carlos:** "Eu faço o atendimento: registrar empréstimo e devolução."  
- **Joana:** "Como leitora, eu gostaria pelo menos de consultar disponibilidade; mas o uso principal é interno."

**P6. O que não pode faltar em termos de qualidade/segurança?**  
- **Marina:** "Os dados não podem se perder e não pode qualquer pessoa apagar registros sem controle."  
- **Carlos:** "O sistema tem que ser simples, para voluntários aprenderem rápido."  
- **Joana:** "Meus dados de contato devem ser usados só para a biblioteca."

**P7. Como saberemos que o sistema resolveu o problema?**  
- **Marina:** "Se conseguirmos registrar empréstimos e devoluções sem caderno e localizar a situação de um livro em segundos."  
- **Carlos:** "Se o atendimento ficar mais rápido e com menos erro."  
- **Joana:** "Se eu tiver clareza do prazo e da disponibilidade."

#### Principais achados
- Necessidade de **cadastro de acervo** (livros/itens) e **cadastro de leitores**.
- **Registro de empréstimo e devolução** com datas, prazo e status.
- **Consulta de disponibilidade** e identificação de **atrasos**.
- **Regras de negócio:** prazo padrão (14 dias), limite de itens por leitor (3), bloqueio em caso de atraso pendente (com possibilidade de alerta/exceção).
- **Qualidade:** simplicidade de uso, confiabilidade dos dados, acesso controlado e proteção de dados pessoais (LGPD).

### 3. Personas

#### Persona 1 — Marina Souza (Bibliotecária/Coordenadora)
- **Idade:** 42 anos  
- **Papel:** Coordenadora da biblioteca comunitária; responsável pelo acervo e pelas regras de empréstimo.  
- **Contexto de uso:** Usa o sistema diariamente para cadastrar/atualizar livros, acompanhar empréstimos, identificar atrasos e organizar o acervo.  
- **Objetivos:** Manter o cadastro do acervo confiável e atualizado; ter visibilidade de empréstimos ativos, devoluções e itens atrasados; garantir que as regras da biblioteca (prazos, limites) sejam seguidas.  
- **Dores/frustrações:** Registros manuais inconsistentes e perda de histórico; dificuldade para localizar rapidamente a situação de um exemplar; retrabalho para cobrar devoluções sem uma lista clara de atrasos.  
- **Necessidades no sistema:** Cadastro e consulta de livros/leitores com busca simples; visão consolidada de empréstimos por status (ativo, devolvido, atrasado); alertas/indicadores de atraso e aplicação das regras de empréstimo.  
- **Critério de sucesso:** Conseguir administrar acervo e empréstimos sem depender de caderno/planilhas, com informação confiável.

#### Persona 2 — Carlos Lima (Voluntário de Atendimento)
- **Idade:** 28 anos  
- **Papel:** Voluntário no balcão; realiza atendimentos de retirada e devolução.  
- **Contexto de uso:** Usa o sistema em horários de pico, com pouco tempo por atendimento e necessidade de respostas rápidas.  
- **Objetivos:** Registrar empréstimos e devoluções de forma rápida e sem erros; consultar disponibilidade de um livro em poucos segundos; confirmar se o leitor pode realizar novo empréstimo.  
- **Dores/frustrações:** Folhear anotações para encontrar informações durante o atendimento; filas e demora para operações simples; insegurança ao não saber se há pendências/atrasos do leitor.  
- **Necessidades no sistema:** Interface simples e fluxos diretos para empréstimo/devolução; busca rápida por título/código do livro e por leitor; feedback claro de regras (limite atingido, atraso pendente, item indisponível).  
- **Critério de sucesso:** Reduzir o tempo de atendimento e evitar empréstimos indevidos por falta de informação.

#### Persona 3 — Joana Ribeiro (Leitora/Moradora)
- **Idade:** 35 anos  
- **Papel:** Usuária da biblioteca comunitária; pega livros emprestados regularmente.  
- **Contexto de uso:** Interage no balcão (e, potencialmente, em consulta de disponibilidade) para retirar e devolver livros.  
- **Objetivos:** Saber se um livro está disponível antes ou durante a visita; ter clareza sobre prazos de devolução e situação dos próprios empréstimos; ser avisada/lembrada em caso de atraso (quando aplicável).  
- **Dores/frustrações:** Ir à biblioteca e descobrir que o livro desejado não está disponível; falta de informação sobre quando um item será devolvido; preocupação com o uso indevido de seus dados de contato.  
- **Necessidades no sistema:** Informação confiável de disponibilidade e previsão/prazo de devolução; registro correto de seus empréstimos e dados de contato mínimos; tratamento dos dados pessoais apenas para finalidades da biblioteca.  
- **Critério de sucesso:** Ter transparência sobre disponibilidade e prazos, com confiança no controle da biblioteca.

### 4. Requisitos Funcionais (RF)

| ID | Requisito Funcional | Persona(s) relacionada(s) | Descrição / critério resumido |
|---|---|---|---|
| RF01 | Cadastrar livro no acervo | Marina | O sistema deve permitir cadastrar livros com, no mínimo, título, autor e código/identificador, registrando-os como disponíveis. |
| RF02 | Consultar e buscar acervo | Marina, Carlos, Joana | O sistema deve permitir consultar livros e buscar por título ou código, exibindo a situação do exemplar (disponível, emprestado, atrasado). |
| RF03 | Cadastrar leitor | Marina, Carlos | O sistema deve permitir cadastrar leitores com, no mínimo, nome e telefone, para vinculação aos empréstimos. |
| RF04 | Registrar empréstimo | Carlos, Marina | O sistema deve permitir registrar empréstimo vinculando leitor e livro, com data de retirada, prazo de devolução (padrão 14 dias) e status inicial "emprestado". |
| RF05 | Registrar devolução | Carlos, Marina | O sistema deve permitir registrar a devolução de um empréstimo, atualizando o status para "devolvido" e tornando o exemplar disponível. |
| RF06 | Controlar regras e status de empréstimos | Marina, Carlos, Joana | O sistema deve indicar empréstimos atrasados (prazo vencido e não devolvido) e bloquear/alertar novo empréstimo quando o leitor tiver atraso pendente ou atingir o limite de 3 empréstimos ativos. |

### 5. Requisitos Não Funcionais (RNF)

| ID | Requisito Não Funcional | Categoria | Critério mensurável / verificável |
|---|---|---|---|
| RNF01 | Usabilidade | Usabilidade | Um voluntário treinado deve conseguir concluir as tarefas principais (buscar livro, registrar empréstimo e registrar devolução) em até **3 minutos** cada, com no máximo **3 cliques/ações principais** após localizar o registro, em interface em português. |
| RNF02 | Desempenho | Desempenho | Consultas de acervo e de situação de empréstimos devem retornar resultado em até **2 segundos** para uma base de até **5.000 registros** em ambiente local (rede local/localhost). |
| RNF03 | Segurança e controle de acesso | Segurança | O acesso às operações de cadastro e alteração deve ser restrito a usuários autorizados (ex.: perfil atendente/coordenador); ações de exclusão/alteração crítica devem exigir confirmação e ser rastreáveis (registro de responsável/data ou trilha equivalente). |
| RNF04 | Proteção de dados e confiabilidade | LGPD / Confiabilidade | Dados pessoais dos leitores (nome, telefone/contato) devem ser armazenados apenas para finalidade de gestão de empréstimos, com acesso restrito a usuários autorizados; o sistema deve utilizar banco de dados persistente com rotina/possibilidade de backup, visando disponibilidade mínima de **99%** no horário de funcionamento e prevenção de perda de registros. |

### 6. Histórias de Usuário

#### História 1 — Registrar empréstimo com prazo
**Como** voluntário de atendimento (Carlos),  
**quero** registrar o empréstimo de um livro para um leitor informando a data de retirada,  
**para** formalizar a saída do exemplar e definir automaticamente o prazo de devolução.

**Critérios de aceitação:**
- Dado um livro com status **disponível** e um leitor cadastrado sem pendências impeditivas, quando eu registrar o empréstimo, então o sistema deve criar o registro com data de retirada, prazo padrão de **14 dias** e status **emprestado**.
- Dado que o empréstimo foi registrado, quando eu consultar o acervo, então o livro deve aparecer como **emprestado** (indisponível).
- Dado um leitor com **3 empréstimos ativos** ou com **atraso pendente**, quando eu tentar registrar novo empréstimo, então o sistema deve bloquear ou alertar claramente a impossibilidade, conforme regra definida.

#### História 2 — Registrar devolução e liberar exemplar
**Como** bibliotecária/coordenadora (Marina),  
**quero** registrar a devolução de um livro emprestado,  
**para** atualizar o controle do acervo e liberar o exemplar para novos empréstimos.

**Critérios de aceitação:**
- Dado um empréstimo com status **emprestado** ou **atrasado**, quando eu registrar a devolução, então o sistema deve atualizar o status do empréstimo para **devolvido** e registrar a data de devolução.
- Dado que a devolução foi registrada, quando eu consultar o livro, então ele deve constar como **disponível**.
- Dado uma tentativa de devolução de um empréstimo inexistente ou já devolvido, quando a operação for submetida, então o sistema deve informar o erro sem alterar outros registros.

#### História 3 — Consultar disponibilidade e atrasos
**Como** leitora (Joana), com apoio do atendimento (Carlos/Marina),  
**quero** consultar a disponibilidade de um livro e a situação dos empréstimos,  
**para** saber se posso retirar o item e qual o prazo de devolução.

**Critérios de aceitação:**
- Dado um termo de busca (título ou código), quando eu consultar o acervo, então o sistema deve listar os resultados com a situação do exemplar (**disponível**, **emprestado** ou **atrasado**) e, quando aplicável, o prazo/data prevista de devolução.
- Dado um empréstimo cuja data atual é posterior ao prazo de devolução e sem devolução registrada, quando o sistema avaliar o status, então o empréstimo deve ser indicado como **atrasado**.
- Dado que não existam resultados para a busca, quando a consulta for realizada, então o sistema deve exibir mensagem clara de "não encontrado" sem falha.

### 7. Validação humana (checklist da Aula 01)

- [x] **Cruzamento:** cada RF possui persona(s) associada(s); cada RNF é mensurável/verificável.
- [x] **Viés:** requisitos e histórias descritos em nível de negócio/domínio, sem assumir APIs, bibliotecas ou padrões inexistentes.
- [x] **Clareza:** termos e fluxos descritos de forma direta (cadastro, empréstimo, devolução, consulta), compreensíveis para leitura rápida.
- [x] **Segurança/LGPD:** contemplados em RNF03 (controle de acesso/rastreabilidade) e RNF04 (finalidade, restrição de acesso, persistência/backup e disponibilidade).

**Rastreabilidade:** personas (Marina, Carlos, Joana) vinculadas aos RFs/RNFs e às histórias; ajustes registrados nesta consolidação para manter coerência entre descoberta, personas, requisitos e critérios de aceitação.

---

## Artefatos por aula

- **Aula 01:** [aulas/aula-01-conteudo.md](aulas/aula-01-conteudo.md), [aulas/aula-01/01-problema-e-entrevista.md](aulas/aula-01/01-problema-e-entrevista.md), [aulas/aula-01/02-personas.md](aulas/aula-01/02-personas.md), [aulas/aula-01/03-requisitos-e-historias.md](aulas/aula-01/03-requisitos-e-historias.md)
- **Aula 02:** [aulas/aula-02-conteudo.md](aulas/aula-02-conteudo.md), [aulas/aula-02/01-mapa-de-telas.md](aulas/aula-02/01-mapa-de-telas.md), [aulas/aula-02/02-tokens-visuais.md](aulas/aula-02/02-tokens-visuais.md), [aulas/aula-02/03-hi-fi-com-ia.md](aulas/aula-02/03-hi-fi-com-ia.md), [aulas/aula-02/04-teste-heuristico.md](aulas/aula-02/04-teste-heuristico.md), [aulas/aula-02/05-respostas-perguntas-finais.md](aulas/aula-02/05-respostas-perguntas-finais.md), [aulas/aula-02/hi-fi-telas.html](aulas/aula-02/hi-fi-telas.html)
- **Aula 03:** [aulas/aula-03-conteudo.md](aulas/aula-03-conteudo.md), [aulas/aula-03/README.md](aulas/aula-03/README.md)
- **Aula 04:** [aulas/aula-04-conteudo.md](aulas/aula-04-conteudo.md), [aulas/aula-04/README.md](aulas/aula-04/README.md), [frontend React + Tailwind](aulas/aula-04/frontend/)
- **Aula 05:** [aulas/aula-05-conteudo.md](aulas/aula-05-conteudo.md), [plano de testes](aulas/aula-05/01-plano-de-testes.md), [roteiro de demonstração](aulas/aula-05/05-roteiro-demonstracao.md)

## Execução técnica (Node.js + MySQL)

Consulte [SETUP.md](SETUP.md) para configuração do banco (`schema.mysql.sql`), variáveis de ambiente (`.env.example`), instalação (`npm install`) e execução (`npm start`). O backend/API está em [server.js](server.js) e [db.js](db.js); o frontend em [index.html](index.html).
