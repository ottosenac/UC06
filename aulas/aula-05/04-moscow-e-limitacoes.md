# Priorização MoSCoW e Limitações da IA

## MoSCoW atualizado

| Classe | Itens |
|---|---|
| **Must** | Cadastro de livro e leitor; consulta de acervo; empréstimo e devolução; persistência Supabase; RLS/GRANT; validações de formulário; estados loading/empty/error; responsividade. |
| **Should** | Bloqueio automático para 3 empréstimos ativos e atrasos; busca avançada; confirmação de exclusão; testes de acessibilidade. |
| **Could** | Login com perfil atendente/coordenador; lembrete de devolução; dashboard; exportação CSV; tema escuro. |
| **Won't nesta versão** | App nativo; integração com calendário; pagamentos; multiunidade; sincronização offline complexa. |

## Limitações da IA encontradas

1. **Falsa confiança em configuração:** a IA pode sugerir que policy RLS basta. O caso real exigiu validar também os `GRANT`s SQL.
2. **Contexto incompleto:** a IA não executa teste de usabilidade com pessoas; tempos, hesitações e opinião de colegas não podem ser inventados.
3. **Seletores de automação frágeis:** a IA gerou uma asserção genérica para “Em dia”; o navegador revelou a ambiguidade e o teste foi refinado.
4. **Dados e segurança:** URL e chave publicável são suficientes para o frontend; `service_role`, senhas e dados pessoais não foram incluídos em prompts, testes ou documentação.
5. **Decisão humana:** a regra de limite/atraso continua pendente porque exige confirmação do comportamento de negócio esperado pela biblioteca.
