# Aula 01 — Problema e Entrevista Simulada

## 1. Problema escolhido

**Sistema:** Gestão de Empréstimos da Biblioteca Comunitária

**Contexto:** Uma biblioteca comunitária de bairro realiza o controle de acervo e empréstimos de livros de forma manual (caderno/planilhas). O atendimento é feito por bibliotecários e voluntários, e os leitores são moradores da comunidade.

**Principais dores:**
- Dificuldade para saber rapidamente se um livro está disponível, emprestado ou atrasado.
- Registros manuais geram inconsistências (empréstimos sem baixa, perda de histórico, dados duplicados).
- Falta de controle de prazos de devolução, gerando atrasos e conflitos na reserva/retirada.
- Tempo de atendimento alto para consultas simples (disponibilidade, situação do leitor, itens emprestados).

**Objetivo do sistema (visão inicial):** Centralizar o cadastro do acervo e dos leitores, registrar empréstimos e devoluções, e permitir consulta rápida da disponibilidade e da situação dos empréstimos.

> **Nota:** Este problema substitui o contexto de salão utilizado apenas como exemplo no material da aula.

---

## 2. Entrevista simulada (descoberta)

**Data:** 2026-11-24  
**Entrevistador:** Analista de requisitos (equipe do projeto)  
**Entrevistados:**  
- **Marina** — Bibliotecária/coordenadora da biblioteca (gestão do acervo e regras)  
- **Carlos** — Voluntário no balcão de atendimento  
- **Joana** — Moradora e leitora frequente

### Roteiro e respostas

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

### Principais achados da entrevista
- Necessidade de **cadastro de acervo** (livros/itens) e **cadastro de leitores**.
- **Registro de empréstimo e devolução** com datas, prazo e status.
- **Consulta de disponibilidade** e identificação de **atrasos**.
- **Regras de negócio:** prazo padrão (14 dias), limite de itens por leitor (3), bloqueio em caso de atraso pendente (com possibilidade de alerta/exceção).
- **Qualidade:** simplicidade de uso, confiabilidade dos dados, acesso/controlado e proteção de dados pessoais (LGPD).
