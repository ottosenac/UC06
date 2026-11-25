# Aula 05 - Testes, Validação e Pitch

## Entrega

Esta etapa submete o MVP **Biblioteca Comunitária** a quatro provas: testes funcionais, integração ponta a ponta, usabilidade e correção orientada por evidências. O material do PDF usa o salão como exemplo; os testes foram adaptados aos fluxos de acervo, leitores, empréstimos e devoluções.

## Artefatos

- [Conteúdo consolidado](../aula-05-conteudo.md)
- [Plano de testes e matriz de rastreabilidade](01-plano-de-testes.md)
- [Relatório e roteiro de usabilidade](02-relatorio-usabilidade.md)
- [Bugs, diagnóstico com IA e correções](03-bugs-e-correcoes.md)
- [MoSCoW e limitações da IA](04-moscow-e-limitacoes.md)
- [Roteiro da demonstração](05-roteiro-demonstracao.md)
- [Teste Playwright executável](../aula-04/frontend/tests/emprestimo-flow.spec.js)
- [Pitch em PDF](Pitch_Entrelinhas.pdf)

## Como repetir as evidências técnicas

```powershell
cd C:\Users\otto_\Documents\UC06\aulas\aula-04\frontend
npm install
npm run test:e2e
npm run build
```

O teste E2E usa registros com prefixo `E2E-` no Supabase para tornar a evidência identificável.

## Checklist da Aula 05

- [x] Matriz de rastreabilidade RF -> caso de teste.
- [x] Nove casos funcionais para a US-01, com cenários positivos e negativos.
- [x] Teste E2E Playwright executável e aprovado em 25/11/2026.
- [x] Três bugs documentados, diagnosticados e corrigidos.
- [x] MoSCoW atualizado e seção de limitações da IA registrada.
- [x] Pitch em PDF e roteiro de demonstração produzidos.
