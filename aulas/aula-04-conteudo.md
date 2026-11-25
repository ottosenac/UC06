# Aula 04 - Frontend e Integração (conteúdo extraído e execução)

> **Fonte:** `aula-04/Aula 04 - Frontend e Integracao.pdf` - UC06 Prototipação Rápida de Aplicações com IA.  
> **Adaptação do domínio:** o PDF demonstra serviços e agendamentos de um salão. Nesta UC, as quatro telas correspondem ao acervo, cadastro de livro, empréstimo e devolução da Biblioteca Comunitária definida nas Aulas 01 a 03.

## Síntese do material

- **React:** componentes são funções que retornam JSX; `props` levam dados do componente pai ao filho; `state` guarda a memória local e uma alteração nele atualiza a interface; `useEffect` é indicado para efeitos como consultas à API.
- **Componentização:** componentes pequenos e reutilizáveis devem ter responsabilidade única, variantes por props e composição em vez de herança. O material sugere Button, Input, Card, Badge e componentes para estados vazio/carregando/erro.
- **Formulários controlados:** a fonte de verdade é o estado React. Antes do envio, validar formato e informar o erro junto ao campo; durante o envio, bloquear o botão e mostrar feedback.
- **Validação em duas camadas:** o front valida formato e experiência; banco/API validam integridade, regras de negócio, chaves estrangeiras, constraints e permissões/RLS. Não confiar somente no navegador.
- **Integração:** o SDK do Supabase deixa a consulta mais concisa que `fetch`, mas ambos exigem tratamento de falhas. Toda chamada deve iniciar e encerrar o estado de loading.
- **Estados de UI:** cada consulta pode estar em loading, sucesso, vazio ou erro. O usuário não deve receber uma tela em branco, stack trace ou ausência de orientação.
- **Responsividade:** abordagem mobile-first; classes sem prefixo atendem celular e `sm:`, `md:` e `lg:` ampliam o layout em breakpoints maiores.
- **Depuração com IA:** reproduzir o erro, guardar stack trace e contexto, pedir diagnóstico da causa e validar a solução proposta antes de aceitá-la.

## Atividade do PDF adaptada ao MVP

1. Criar componentes base reutilizáveis.
2. Construir uma tela de listagem com dados reais e estados de interface.
3. Criar formulário com validação e inserção no banco.
4. Criar operação que relaciona entidades por chave estrangeira.
5. Listar os registros e atualizar seu estado em uma ação de conclusão.

### Mapeamento para a Biblioteca Comunitária

| Conceito do PDF | Aplicação nesta UC |
|---|---|
| Lista de serviços | Acervo e disponibilidade (`livros`) |
| Cadastro de serviço | Cadastro de livro |
| Novo agendamento | Registro de empréstimo (`leitores` + `livros` + `emprestimos`) |
| Agenda do dia | Empréstimos e devoluções |

## Artefatos criados

- [`aula-04/frontend`](aula-04/frontend): aplicação Vite/React/Tailwind funcional, isolada dos artefatos anteriores.
- [`aula-04/README.md`](aula-04/README.md): instruções de configuração, execução, mapeamento das telas e checklist.
- Componentes e telas ficam em `aula-04/frontend/src/components/` e a composição/navegação em `aula-04/frontend/src/App.jsx`.

## Checklist de execução

- [x] Ler o PDF da Aula 04 e consolidar o conteúdo relevante.
- [x] Adaptar as quatro telas solicitadas ao domínio definido nas aulas anteriores.
- [x] Criar componentes base reutilizáveis e acessíveis.
- [x] Construir telas React com Tailwind e navegação entre elas.
- [x] Integrar consultas, inserções e atualizações ao SDK do Supabase no código.
- [x] Implementar validação de formulário e feedback de submissão.
- [x] Implementar loading, sucesso, vazio e erro nas operações assíncronas.
- [x] Criar arquivo de exemplo de variáveis de ambiente sem segredo.
- [x] Instalar dependências e validar o build de produção.
- [x] Executar e confirmar as policies RLS e os privilégios SQL no projeto Supabase; o acervo carregou os livros de teste e as demais telas consultaram o banco sem erro de permissão.
- [ ] Executar o CRUD real no Supabase/Table Editor após corrigir as policies RLS.
- [ ] Gerar screenshots reais após conectar as credenciais locais.
- [ ] Fazer o deploy público para a submissão.
