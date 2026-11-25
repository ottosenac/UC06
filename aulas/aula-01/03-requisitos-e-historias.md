# Aula 01 — Requisitos e Histórias de Usuário

Sistema: **Gestão de Empréstimos da Biblioteca Comunitária** (contexto definido na entrevista e personas).

---

## 1. Requisitos Funcionais (RF)

| ID | Requisito Funcional | Persona(s) relacionada(s) | Descrição / critério resumido |
|---|---|---|---|
| RF01 | Cadastrar livro no acervo | Marina | O sistema deve permitir cadastrar livros com, no mínimo, título, autor e código/identificador, registrando-os como disponíveis. |
| RF02 | Consultar e buscar acervo | Marina, Carlos, Joana | O sistema deve permitir consultar livros e buscar por título ou código, exibindo a situação do exemplar (disponível, emprestado, atrasado). |
| RF03 | Cadastrar leitor | Marina, Carlos | O sistema deve permitir cadastrar leitores com, no mínimo, nome e telefone, para vinculação aos empréstimos. |
| RF04 | Registrar empréstimo | Carlos, Marina | O sistema deve permitir registrar empréstimo vinculando leitor e livro, com data de retirada, prazo de devolução (padrão 14 dias) e status inicial "emprestado". |
| RF05 | Registrar devolução | Carlos, Marina | O sistema deve permitir registrar a devolução de um empréstimo, atualizando o status para "devolvido" e tornando o exemplar disponível. |
| RF06 | Controlar regras e status de empréstimos | Marina, Carlos, Joana | O sistema deve indicar empréstimos atrasados (prazo vencido e não devolvido) e bloquear/alertar novo empréstimo quando o leitor tiver atraso pendente ou atingir o limite de 3 empréstimos ativos. |

---

## 2. Requisitos Não Funcionais (RNF)

| ID | Requisito Não Funcional | Categoria | Critério mensurável / verificável |
|---|---|---|---|
| RNF01 | Usabilidade | Usabilidade | Um voluntário treinado deve conseguir concluir as tarefas principais (buscar livro, registrar empréstimo e registrar devolução) em até **3 minutos** cada, com no máximo **3 cliques/ações principais** após localizar o registro, em interface em português. |
| RNF02 | Desempenho | Desempenho | Consultas de acervo e de situação de empréstimos devem retornar resultado em até **2 segundos** para uma base de até **5.000 registros** em ambiente local (rede local/localhost). |
| RNF03 | Segurança e controle de acesso | Segurança | O acesso às operações de cadastro e alteração deve ser restrito a usuários autorizados (ex.: perfil atendente/coordenador); ações de exclusão/alteração crítica devem exigir confirmação e ser rastreáveis (registro de responsável/data ou trilha equivalente). |
| RNF04 | Proteção de dados e confiabilidade | LGPD / Confiabilidade | Dados pessoais dos leitores (nome, telefone/contato) devem ser armazenados apenas para finalidade de gestão de empréstimos, com acesso restrito a usuários autorizados; o sistema deve utilizar banco de dados persistente com rotina/possibilidade de backup, visando disponibilidade mínima de **99%** no horário de funcionamento e prevenção de perda de registros. |

---

## 3. Histórias de Usuário

### História 1 — Registrar empréstimo com prazo
**Como** voluntário de atendimento (Carlos),  
**quero** registrar o empréstimo de um livro para um leitor informando a data de retirada,  
**para** formalizar a saída do exemplar e definir automaticamente o prazo de devolução.

**Critérios de aceitação:**
- Dado um livro com status **disponível** e um leitor cadastrado sem pendências impeditivas, quando eu registrar o empréstimo, então o sistema deve criar o registro com data de retirada, prazo padrão de **14 dias** e status **emprestado**.
- Dado que o empréstimo foi registrado, quando eu consultar o acervo, então o livro deve aparecer como **emprestado** (indisponível).
- Dado um leitor com **3 empréstimos ativos** ou com **atraso pendente**, quando eu tentar registrar novo empréstimo, então o sistema deve bloquear ou alertar claramente a impossibilidade, conforme regra definida.

### História 2 — Registrar devolução e liberar exemplar
**Como** bibliotecária/coordenadora (Marina),  
**quero** registrar a devolução de um livro emprestado,  
**para** atualizar o controle do acervo e liberar o exemplar para novos empréstimos.

**Critérios de aceitação:**
- Dado um empréstimo com status **emprestado** ou **atrasado**, quando eu registrar a devolução, então o sistema deve atualizar o status do empréstimo para **devolvido** e registrar a data de devolução.
- Dado que a devolução foi registrada, quando eu consultar o livro, então ele deve constar como **disponível**.
- Dado uma tentativa de devolução de um empréstimo inexistente ou já devolvido, quando a operação for submetida, então o sistema deve informar o erro sem alterar outros registros.

### História 3 — Consultar disponibilidade e atrasos
**Como** leitora (Joana), com apoio do atendimento (Carlos/Marina),  
**quero** consultar a disponibilidade de um livro e a situação dos empréstimos,  
**para** saber se posso retirar o item e qual o prazo de devolução.

**Critérios de aceitação:**
- Dado um termo de busca (título ou código), quando eu consultar o acervo, então o sistema deve listar os resultados com a situação do exemplar (**disponível**, **emprestado** ou **atrasado**) e, quando aplicável, o prazo/data prevista de devolução.
- Dado um empréstimo cuja data atual é posterior ao prazo de devolução e sem devolução registrada, quando o sistema avaliar o status, então o empréstimo deve ser indicado como **atrasado**.
- Dado que não existam resultados para a busca, quando a consulta for realizada, então o sistema deve exibir mensagem clara de "não encontrado" sem falha.

---

## 4. Validação humana (apoio ao checklist da Aula 01)
- **Cruzamento:** RF01/RF06 associados às personas Marina, Carlos e Joana conforme responsabilidades; RNFs possuem critérios verificáveis/mensuráveis.
- **Viés:** requisitos e histórias descritos em nível de negócio/domínio, sem assumir APIs, bibliotecas ou padrões inexistentes.
- **Clareza:** termos e fluxos descritos de forma direta (cadastro, empréstimo, devolução, consulta).
- **Segurança/LGPD:** contemplados em RNF03 (controle de acesso/rastreabilidade) e RNF04 (finalidade, restrição de acesso, persistência/backup).
