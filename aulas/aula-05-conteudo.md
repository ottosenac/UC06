# Aula 05 - Testes, Validação e Pitch (conteúdo extraído e execução)

> **Fonte:** `Aula 05 Testes Validacao.pdf` (UC06 - Prototipação Rápida de Aplicações com IA).  
> **Domínio adaptado:** Biblioteca Comunitária. Onde o material cita serviços/agendamentos, esta entrega usa livros/leitores/empréstimos.

## Síntese do material

- Testes não provam que o software está perfeito; revelam falhas e produzem evidências.
- Cada critério de aceitação deve gerar ao menos um caso de teste, incluindo cenário positivo e negativo.
- Integração E2E valida o caminho inteiro: interface, SDK/API, banco e retorno na tela.
- Teste de usabilidade requer observação humana: tarefa concreta, pessoa narrando o que pensa, sem interferência e registro de tempo, cliques, erros e hesitações.
- Depuração assistida por IA exige cinco passos: reproduzir, fornecer contexto, pedir hipóteses, validar a hipótese e retestar. IA não substitui validação humana.
- A decisão de prioridade deve usar critérios como MoSCoW e impacto versus esforço.
- Um pitch efetivo apresenta gancho, problema, solução, valor, validação, próximo passo e uma demonstração curta de um cenário real.

## Execução desta etapa

1. Criada matriz RF -> teste e plano funcional com nove casos para a história de empréstimo.
2. Criado e executado teste E2E Playwright: livro + leitor + empréstimo + confirmação na tela de devoluções.
3. Registrados três defeitos encontrados, o raciocínio de diagnóstico e a correção aplicada.
4. Produzido roteiro de usabilidade para duas pessoas, aguardando participação humana real.
5. Atualizado MoSCoW, limitações da IA, roteiro de demonstração e pitch em PDF.

## Checklist de execução

- [x] Ler e consolidar o PDF da Aula 05.
- [x] Criar casos funcionais e rastreabilidade com os RFs da Aula 01.
- [x] Executar um fluxo E2E real contra o Supabase com Playwright.
- [x] Documentar e corrigir três bugs prioritários.
- [x] Criar o pitch em PDF e o roteiro da demo.
- [x] Registrar o autoteste e os problemas relatados pelo responsável pelo projeto.

O registro corresponde a um autoteste; não foram documentadas duas sessões independentes com colegas.
