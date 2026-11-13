# Serena Agenda --- Documento de Requisitos do MVP

> **Projeto:** Serena Agenda\
> **Organização:** Serena Salon Studio --- Lages/SC\
> **Tipo de produto:** Aplicação web responsiva para gestão de serviços
> e agendamentos\
> **Versão:** 1.0 --- Documento inicial da Aula 01\
> **Status:** Versão inicial dos requisitos do MVP.

------------------------------------------------------------------------

## 1. CONTEXT --- Contexto

A Serena Salon Studio é um salão de beleza localizado em Lages/SC que
atualmente organiza seus serviços e horários por meio de conversas no
WhatsApp e anotações em caderno. Esse processo pode gerar conflitos de
horário, perda de informações, retrabalho quando uma cliente altera o
agendamento e dificuldade para consultar rapidamente os horários
disponíveis. O objetivo do MVP Serena Agenda é oferecer uma aplicação
web simples, responsiva e mobile-first, acessível pelo navegador do
celular sem instalação, para cadastrar serviços, consultar a agenda por
data e registrar, editar e cancelar agendamentos. O sistema deverá
manter os dados persistidos em banco remoto. O escopo inicial é voltado
à organização interna do salão; não contempla pagamento on-line nem uma
plataforma completa de relacionamento com clientes.

### 1.1 Objetivo do MVP

Reduzir erros na organização da agenda e facilitar o controle dos
serviços e compromissos do salão, permitindo que a proprietária realize
as operações essenciais em poucos passos pelo celular.

### 1.2 Problema identificado

-   Agendamentos registrados em canais diferentes (WhatsApp e caderno).
-   Possibilidade de dois atendimentos serem marcados para o mesmo
    horário.
-   Dificuldade para localizar, alterar ou cancelar um compromisso.
-   Retrabalho para conferir manualmente os horários do dia.
-   Ausência de uma visão centralizada dos serviços e da agenda.

### 1.3 Solução proposta

Um sistema web com operações CRUD (criar, consultar/listar, atualizar e
excluir/cancelar) para serviços e agendamentos, com validação de dados,
consulta por data e persistência em banco remoto.

### 1.4 Restrições e premissas

-   Interface responsiva, priorizando telas de celular.
-   Acesso pelo navegador, sem instalação de aplicativo.
-   Idioma e moeda: português do Brasil e Real (R\$).
-   O MVP será utilizado inicialmente pela equipe do salão.
-   A existência de conexão com a internet é necessária para consultar e
    gravar dados no MVP.
-   A autenticação e as permissões de acesso deverão ser definidas antes
    de disponibilizar o sistema publicamente. A ausência de login
    mencionada no exemplo visual dos slides não deve ser interpretada
    como autorização para expor dados em produção.

------------------------------------------------------------------------

## 2. DISCOVERY --- Entrevista simulada

### 2.1 Objetivo

Simular uma conversa exploratória com uma profissional de salão para
compreender como os agendamentos são realizados, quais dificuldades
aparecem na rotina e quais resultados seriam considerados úteis. As
respostas abaixo são fictícias e representam uma simulação.

### 2.2 Perfil simulado

**Mariana**, 32 anos, cabeleireira e proprietária de um pequeno salão em
Lages/SC. Utiliza o celular durante os atendimentos e possui
familiaridade intermediária com tecnologia.

### 2.3 Roteiro e registro da simulação

**Entrevistador:** Como você organiza os agendamentos atualmente?\
**Mariana:** Normalmente anoto os horários no caderno e também recebo
pedidos pelo WhatsApp. Depois preciso conferir se já existe alguém
marcado naquele horário.

**Entrevistador:** Conte sobre a última vez em que houve algum problema
com um agendamento.\
**Mariana:** Já aconteceu de eu combinar um horário pelo WhatsApp e
esquecer de atualizar o caderno. Quando fui conferir, havia outra
cliente marcada no mesmo período.

**Entrevistador:** O que você costuma fazer quando uma cliente precisa
alterar ou cancelar o horário?\
**Mariana:** Procuro a anotação, vejo os outros horários e tento
reorganizar. Às vezes preciso voltar na conversa para confirmar o que
foi combinado.

**Entrevistador:** Qual parte desse processo toma mais tempo ou causa
mais preocupação?\
**Mariana:** Conferir tudo para não marcar duas pessoas juntas. Também
preciso lembrar quanto tempo cada serviço demora.

**Entrevistador:** Como seria sua rotina se tivesse uma agenda no
celular?\
**Mariana:** Eu gostaria de abrir a agenda do dia, ver os horários
ocupados e livres e cadastrar um novo atendimento sem preencher muita
coisa.

**Entrevistador:** Que informações seriam necessárias para registrar um
agendamento?\
**Mariana:** Nome da cliente, serviço, data e horário. Seria bom também
ter o telefone para contato.

**Entrevistador:** O que deveria acontecer se alguém tentasse marcar um
horário já ocupado?\
**Mariana:** O sistema deveria avisar antes de salvar e mostrar que
aquele horário não está disponível.

**Entrevistador:** Como você saberia que o sistema realmente melhorou
seu trabalho?\
**Mariana:** Se eu deixasse de ter conflitos de horário e conseguisse
consultar a agenda rapidamente pelo celular.

### 2.4 Principais dores identificadas na simulação

1.  Conflitos de horário causados por registros em canais diferentes.
2.  Dificuldade para alterar e localizar agendamentos.
3.  Falta de visão centralizada dos horários livres e ocupados.
4.  Necessidade de consultar a duração dos serviços.
5.  Retrabalho para confirmar informações com as clientes.

### 2.5 Premissas consideradas no MVP

-   A proprietária utiliza o celular como principal dispositivo durante
    o expediente.
-   A consulta da agenda por dia é mais importante no MVP do que
    relatórios avançados.
-   O bloqueio de conflitos de horário é uma necessidade prioritária.
-   Nome, serviço, data, horário e telefone são informações suficientes
    para o primeiro registro.

------------------------------------------------------------------------

## 3. PERSON --- Personas

> Personas fictícias criadas para orientar a descoberta com base no
> contexto do projeto.

### 3.1 Persona 1 --- Mariana Souza (persona primária)

-   **Idade:** 32 anos
-   **Profissão:** Cabeleireira e proprietária de salão
-   **Cidade:** Lages/SC
-   **Familiaridade tecnológica:** Intermediária
-   **Dor principal:** Conflitos de horário e dificuldade para manter as
    informações atualizadas entre WhatsApp e caderno.
-   **Cenário de uso:** Durante um atendimento, utiliza o celular para
    consultar a agenda e registrar um novo horário rapidamente.
-   **Necessidade:** Visualizar a agenda do dia, cadastrar compromissos
    e receber alertas quando houver conflito.
-   **Métrica de sucesso:** Zero conflitos de horário por semana.
-   **Justificativa da escolha:** Representa a pessoa responsável pela
    organização diária do salão e que utiliza diretamente as funções
    centrais do MVP.

### 3.2 Persona 2 --- Camila Oliveira

-   **Idade:** 24 anos
-   **Profissão:** Manicure autônoma
-   **Cidade:** Lages/SC
-   **Familiaridade tecnológica:** Alta
-   **Dor principal:** Perder tempo respondendo repetidamente perguntas
    sobre horários disponíveis.
-   **Cenário de uso:** Entre atendimentos, consulta a agenda pelo
    celular para verificar seus compromissos e reorganizar horários.
-   **Necessidade:** Encontrar rapidamente os horários ocupados e livres
    e localizar os dados básicos dos agendamentos.
-   **Métrica de sucesso:** Reduzir o tempo gasto diariamente conferindo
    e reorganizando horários.

### 3.3 Persona 3 --- Helena Martins

-   **Idade:** 49 anos
-   **Profissão:** Proprietária de pequeno salão
-   **Cidade:** Correia Pinto/SC
-   **Familiaridade tecnológica:** Básica
-   **Dor principal:** Dificuldade para utilizar sistemas complexos e
    receio de perder informações ao mexer em ferramentas digitais.
-   **Cenário de uso:** Abre a agenda no celular ou computador para
    conferir os compromissos do dia e fazer alterações simples.
-   **Necessidade:** Interface clara, textos objetivos, poucos campos e
    mensagens de confirmação compreensíveis.
-   **Métrica de sucesso:** Conseguir cadastrar ou alterar um
    agendamento sem ajuda de outra pessoa.

### 3.4 Comparação das personas

  ------------------------------------------------------------------------
  Persona           Dor principal      Familiaridade     Métrica de
                                       tecnológica       sucesso
  ----------------- ------------------ ----------------- -----------------
  Mariana           Conflitos de       Intermediária     Zero conflitos
                    horário e                            por semana
                    informações                          
                    descentralizadas                     

  Camila            Tempo gasto        Alta              Menos tempo na
                    respondendo e                        organização da
                    conferindo                           agenda
                    horários                             

  Helena            Complexidade e     Básica            Realizar
                    insegurança ao                       operações sem
                    usar sistemas                        ajuda
  ------------------------------------------------------------------------

------------------------------------------------------------------------

## 4. RF --- Requisitos funcionais

Os requisitos funcionais descrevem **o que o sistema deve fazer**. Cada
requisito deverá ser verificável por meio de testes funcionais.

  -----------------------------------------------------------------------
  ID                      Requisito funcional     Critério de verificação
  ----------------------- ----------------------- -----------------------
  RF01                    O sistema deve permitir Um serviço válido é
                          cadastrar um serviço    salvo e aparece na
                          com nome, duração em    listagem.
                          minutos e preço em      
                          reais.                  

  RF02                    O sistema deve listar   A listagem apresenta os
                          os serviços             registros persistidos.
                          cadastrados, exibindo   
                          nome, duração e preço.  

  RF03                    O sistema deve permitir Alterações são salvas;
                          editar e excluir um     exclusões com vínculos
                          serviço existente,      são impedidas ou
                          respeitando vínculos    tratadas conforme regra
                          com agendamentos.       definida.

  RF04                    O sistema deve permitir Um agendamento válido é
                          cadastrar um            registrado e associado
                          agendamento com nome da a um serviço existente.
                          cliente, telefone,      
                          serviço, data e         
                          horário.                

  RF05                    O sistema deve          Ao selecionar uma data,
                          consultar e exibir os   são exibidos os
                          agendamentos de uma     agendamentos
                          data selecionada,       correspondentes.
                          identificando horários  
                          ocupados.               

  RF06                    O sistema deve validar  Dados inválidos são
                          os campos obrigatórios  rejeitados e conflitos
                          e impedir agendamentos  são informados antes da
                          com conflito de horário gravação.
                          para o mesmo período de 
                          atendimento.            
  -----------------------------------------------------------------------

### 4.1 Regras de negócio associadas

-   **RN01:** Todo serviço deve possuir nome, duração positiva e preço
    maior que zero.
-   **RN02:** Todo agendamento deve estar associado a um serviço
    cadastrado.
-   **RN03:** A duração do serviço determina o intervalo ocupado na
    agenda.
-   **RN04:** Não deve ser permitido registrar dois agendamentos que se
    sobreponham para o mesmo profissional/recurso de atendimento.
-   **RN05:** Um serviço que já esteja associado a agendamentos não deve
    ser excluído sem uma regra de tratamento dos registros relacionados.
-   **RN06:** O horário final do agendamento é calculado a partir do
    horário inicial e da duração do serviço.

> A regra de conflito pressupõe que os atendimentos compartilham a mesma
> agenda. Caso existam profissionais ou cadeiras independentes, será
> necessário identificar o recurso responsável pelo atendimento.

------------------------------------------------------------------------

## 5. RNF --- Requisitos não funcionais

Os requisitos não funcionais descrevem **como o sistema deve funcionar**
e quais atributos de qualidade deve atender.

  -----------------------------------------------------------------------
  ID                      Requisito não funcional Métrica / condição de
                                                  aceite
  ----------------------- ----------------------- -----------------------
  RNF01                   A interface deve ser    As telas principais
                          responsiva e            devem funcionar sem
                          mobile-first.           rolagem horizontal em
                                                  larguras a partir de
                                                  320 px.

  RNF02                   As páginas principais   Em condições de teste
                          devem apresentar        definidas, o conteúdo
                          desempenho adequado em  principal deve carregar
                          conexão móvel.          em menos de 2 segundos
                                                  em uma conexão 4G
                                                  estável.

  RNF03                   Os dados cadastrados    Após salvar e
                          devem permanecer        recarregar a aplicação,
                          disponíveis após sair e os registros continuam
                          retornar ao sistema.    presentes no banco de
                                                  dados.

  RNF04                   O sistema deve proteger Credenciais e segredos
                          os dados e restringir   não podem ser expostos
                          operações a usuários    no código cliente;
                          autorizados.            operações de escrita
                                                  devem respeitar
                                                  autenticação e
                                                  autorização antes da
                                                  publicação.
  -----------------------------------------------------------------------

### 5.1 Observações de segurança e privacidade

-   Coletar somente os dados pessoais necessários para a operação do
    salão.
-   Definir quem pode consultar, criar, editar e excluir registros.
-   Proteger dados em trânsito e em repouso conforme os recursos da
    infraestrutura escolhida.
-   Não publicar telefone ou outras informações de clientes em páginas
    abertas.
-   Definir política de retenção e exclusão de dados e observar os
    princípios aplicáveis da LGPD.
-   Validar as regras de acesso no servidor/banco de dados; esconder
    botões na interface não é controle de segurança suficiente.

------------------------------------------------------------------------

## 6. US --- Histórias de usuário

As histórias seguem o formato canônico: **Como \[papel\], quero
\[ação\], para \[valor\].**

### US01 --- Cadastrar serviço

-   **ID:** US01
-   **Título:** Cadastrar novo serviço
-   **História:** Como proprietária do salão, quero cadastrar um serviço
    com nome, duração e preço, para manter o catálogo atualizado e
    utilizá-lo nos agendamentos.
-   **Prioridade MoSCoW:** MUST
-   **Estimativa inicial:** 2 pontos
-   **Dependências:** Nenhuma.

**Critérios de aceitação**

-   [ ] **AC01.1:** O formulário deve apresentar os campos nome, duração
    em minutos e preço em reais.
-   [ ] **AC01.2:** O sistema deve impedir o salvamento quando o nome
    estiver vazio ou possuir menos de 3 caracteres.
-   [ ] **AC01.3:** A duração deve aceitar somente números inteiros
    positivos, dentro do intervalo definido de 10 a 480 minutos.
-   [ ] **AC01.4:** O preço deve ser maior que zero e apresentado no
    padrão monetário brasileiro.
-   [ ] **AC01.5:** Após salvar com sucesso, o serviço deve aparecer na
    listagem sem exigir novo cadastro.
-   [ ] **AC01.6:** Se ocorrer falha de gravação, o sistema deve
    informar o erro e preservar os dados preenchidos sempre que
    possível.

### US02 --- Cadastrar agendamento

-   **ID:** US02
-   **Título:** Registrar agendamento de cliente
-   **História:** Como proprietária do salão, quero registrar um
    agendamento vinculado a um serviço, para organizar os atendimentos e
    evitar conflitos de horário.
-   **Prioridade MoSCoW:** MUST
-   **Estimativa inicial:** 5 pontos
-   **Dependências:** US01 --- deve existir ao menos um serviço
    cadastrado.

**Critérios de aceitação**

-   [ ] **AC02.1:** O formulário deve solicitar nome da cliente,
    telefone, serviço, data e horário.
-   [ ] **AC02.2:** O sistema deve impedir o salvamento quando algum
    campo obrigatório estiver vazio ou inválido.
-   [ ] **AC02.3:** O sistema deve calcular o horário final com base na
    duração do serviço selecionado.
-   [ ] **AC02.4:** O sistema deve verificar se o intervalo solicitado
    se sobrepõe a outro agendamento da mesma agenda.
-   [ ] **AC02.5:** Quando houver conflito, o sistema deve impedir a
    gravação e apresentar uma mensagem clara.
-   [ ] **AC02.6:** Quando não houver conflito, o sistema deve salvar o
    agendamento e confirmar o sucesso da operação.

### US03 --- Consultar agenda por data

-   **ID:** US03
-   **Título:** Consultar agendamentos do dia
-   **História:** Como proprietária do salão, quero visualizar os
    agendamentos de uma data específica, para identificar rapidamente os
    horários ocupados e organizar os próximos atendimentos.
-   **Prioridade MoSCoW:** MUST
-   **Estimativa inicial:** 3 pontos
-   **Dependências:** US02 --- devem existir agendamentos para exibição.

**Critérios de aceitação**

-   [ ] **AC03.1:** A tela deve permitir selecionar uma data para
    consulta.
-   [ ] **AC03.2:** O sistema deve listar os agendamentos
    correspondentes à data selecionada, exibindo horário, nome da
    cliente e serviço.
-   [ ] **AC03.3:** Os horários devem aparecer em ordem cronológica.
-   [ ] **AC03.4:** A interface deve diferenciar visualmente horários
    ocupados e livres, conforme o intervalo de funcionamento
    configurado.
-   [ ] **AC03.5:** Quando não houver agendamentos na data, o sistema
    deve apresentar uma mensagem informativa.
-   [ ] **AC03.6:** A consulta deve refletir os dados persistidos,
    inclusive após atualizar a página.

------------------------------------------------------------------------

## 7. AC --- Critérios gerais de aceite do MVP

O MVP será considerado apto para demonstração quando:

-   [ ] For possível cadastrar, listar, editar e excluir serviços,
    respeitando as regras de vínculo.
-   [ ] For possível cadastrar agendamentos associados a serviços
    existentes.
-   [ ] O sistema impedir sobreposição de horários na mesma agenda.
-   [ ] For possível consultar a agenda por data.
-   [ ] Campos obrigatórios e formatos inválidos forem tratados com
    mensagens claras.
-   [ ] Os dados permanecerem salvos após atualizar ou reabrir a
    aplicação.
-   [ ] As telas principais funcionarem em dispositivos com largura
    mínima de 320 px.
-   [ ] Não houver credenciais ou dados sensíveis expostos no código
    cliente.
-   [ ] As permissões de acesso estiverem definidas e verificadas antes
    de qualquer uso com dados reais.

------------------------------------------------------------------------

## 8. MOSCOW --- Priorização

  -----------------------------------------------------------------------
  Prioridade                          Funcionalidades / itens
  ----------------------------------- -----------------------------------
  **MUST** --- Obrigatório            Cadastro e listagem de serviços;
                                      cadastro de agendamentos; consulta
                                      da agenda por data; validação de
                                      campos; prevenção de conflitos;
                                      persistência dos dados.

  **SHOULD** --- Importante           Edição e cancelamento de
                                      agendamentos; busca por nome ou
                                      telefone; filtros por serviço.

  **COULD** --- Desejável             Lembretes automáticos; confirmação
                                      de agendamento por WhatsApp;
                                      indicadores simples de quantidade
                                      de atendimentos.

  **WON'T (neste MVP)** --- Fora do   Pagamento on-line; aplicativo
  escopo atual                        nativo; programa de fidelidade;
                                      gestão financeira completa;
                                      múltiplas unidades; integração
                                      automática com calendários
                                      externos.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 9. OUT --- Fora de escopo do MVP

Para manter o escopo do MVP, não serão desenvolvidos nesta versão:

1.  Pagamento on-line, cobrança ou emissão de nota fiscal.
2.  Aplicativo nativo para Android ou iOS.
3.  Envio automático de mensagens pelo WhatsApp.
4.  Cadastro público para clientes realizarem seus próprios
    agendamentos.
5.  Gestão de estoque e produtos.
6.  Controle financeiro, fluxo de caixa e comissões.
7.  Relatórios gerenciais avançados.
8.  Gestão de múltiplas unidades ou franquias.
9.  Integração com Google Calendar ou outros calendários.
10. Programa de pontos, cupons ou fidelidade.

------------------------------------------------------------------------

## 10. AULA 02 --- UX, UI e prototipação

Esta seção registra a documentação complementar da atividade de
prototipação. O protótipo navegável está em
[index.html](./index.html); o mapa, os tokens e a avaliação heurística
ficam neste README para manter o HTML focado na interface.

### 10.1 Mapa de telas e navegação

O exercício propõe quatro telas: lista de serviços, cadastro de serviço,
novo agendamento e agenda do dia. No protótipo, a agenda é a tela inicial
e a navegação global permanece disponível em todas as telas.

```text
Serena Agenda
├── Agenda do dia (início)
│   ├── Selecionar data e consultar atendimentos
│   ├── Acessar Novo agendamento
│   └── Acessar Serviços
├── Serviços (lista)
│   ├── Editar serviço
│   ├── Excluir serviço sem agendamento vinculado
│   └── Acessar Novo serviço
├── Novo agendamento
│   └── Validar dados, duração e conflito de horário
└── Novo serviço (cadastro e edição)
    └── Informar nome, duração e preço
```

Edição e cancelamento de agendamentos são ações contextuais. O mapa tem
profundidade máxima de dois níveis, sem contar a navegação global.

### 10.2 Tokens visuais

| Token | Valor |
|---|---|
| Malva principal | `#8F6B78` |
| Malva escuro | `#765260` |
| Rosa suave | `#F2E8EC` |
| Fundo | `#F8F6F4` |
| Superfície | `#FFFFFF` |
| Texto principal | `#302B2A` |
| Texto secundário | `#817875` |
| Verde suave | `#E8EEE8` |
| Tipografia | Georgia para títulos; system-ui para interface |
| Bordas e espaçamento | 12–18 px; escala baseada em 8 px |

### 10.3 Avaliação heurística inicial

Avaliação preliminar pelas cinco heurísticas trabalhadas na aula. Não
substitui testes de usabilidade com pessoas.

| Heurística | Agenda do dia | Lista de serviços | Novo agendamento | Cadastro de serviço |
|---|---|---|---|---|
| Visibilidade do status | Indicadores, lista e estado vazio informam a situação. | Contagem, catálogo e estado vazio visíveis. | Resumo do serviço e mensagens de validação, conflito e sucesso. | Validação e mensagem de sucesso ao salvar. |
| Correspondência com o mundo real | Data, horários e atendimentos do salão. | Nome, duração e preço dos serviços. | Campos correspondem à marcação de um atendimento. | Campos correspondem ao cadastro do catálogo. |
| Controle e liberdade | Navegação global e acesso ao agendamento. | Editar ou excluir no próprio serviço; exclusão com confirmação e bloqueio se houver vínculo. | Ação para cancelar e retornar à agenda; cancelamento contextual com confirmação. | Cancelar retorna à lista de serviços. |
| Consistência e padrões | Cores, cartões e ações seguem os padrões visuais. | Ações e cartões seguem os mesmos padrões. | Formulário e botões seguem os padrões. | Formulário e botões seguem os padrões. |
| Prevenção de erros | Seleção de data e orientação para estado vazio. | Impede excluir serviço associado a agendamento. | Exige os campos e bloqueia sobreposição de horários. | Valida nome, duração e preço. |

### 10.4 Acessibilidade e próximas iterações

-   O protótipo apresenta foco de teclado visível; ainda é necessário
    percorrer todas as ações com Tab, Enter e Esc.
-   Contraste WCAG, leitura com tecnologia assistiva e tamanho mínimo de
    alvos de toque devem ser verificados antes de afirmar conformidade.
-   Considerar edição de agendamentos, expediente e intervalos,
    validação de telefone e múltiplos profissionais.
-   Antes de uso real, implementar autenticação, autorização,
    persistência remota e validação de conflitos no servidor.

### 10.5 Escopo e limitações do protótipo

-   Navegação funcional entre agenda, serviços, novo agendamento e
    cadastro/edição de serviço, em layout responsivo.
-   Permite cadastrar, editar e excluir serviços; criar e cancelar
    agendamentos; calcular horário final e verificar sobreposição.
-   Os dados demonstrativos são armazenados localmente no navegador.
    Não há backend, login, sincronização entre dispositivos ou integração
    com WhatsApp.
-   Não utilizar dados reais de clientes nesta versão de demonstração.
-   Os wireframes lo-fi foram removidos do HTML a pedido; esse item do
    exercício não está incluído nesta entrega.

------------------------------------------------------------------------

## 11. Histórico do documento

  -----------------------------------------------------------------------
  Versão                  Descrição
  ----------------------- -----------------------------------------------
  1.0                     Primeira versão elaborada a partir do material
                          da Aula 01 e de entrevista/personas simuladas.

  1.1                     Documentação complementar da prototipação da
                          Aula 02 adicionada neste README.

  -----------------------------------------------------------------------
