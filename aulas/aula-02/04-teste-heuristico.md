# Aula 02 — Teste Heurístico (5 heurísticas por tela)

Sistema: **Gestão de Empréstimos da Biblioteca Comunitária**  
Método: avaliação heurística aplicada às 4 telas hi-fi (`hi-fi-telas.html`), com base nas heurísticas de Nielsen (seleção das 5 principais para o contexto). Severidade: 0 (não é problema) a 4 (catastrófico).

## Heurísticas utilizadas
1. **Visibilidade do status do sistema** — feedback claro sobre estado, ações e resultados.
2. **Correspondência com o mundo real / consistência e padrões** — linguagem do domínio, padrões visuais e de interação consistentes.
3. **Prevenção de erros** — evitar ações incorretas, validar entradas e alertar regras antes da confirmação.
4. **Reconhecimento em vez de memorização / flexibilidade** — informações visíveis, busca e filtros para reduzir carga cognitiva.
5. **Controle e liberdade do usuário / recuperação de erros** — cancelar/voltar, mensagens acionáveis e saídas claras (sem dead-ends).

---

## Tela 1 — Acervo e Disponibilidade

| Heurística | Avaliação | Severidade | Ação/correção |
|---|---|---:|---|
| 1. Visibilidade do status | Status do exemplar exibido por badge (disponível/emprestado/atrasado) e prazo quando aplicável. | 1 | Manter legenda de status e indicador de resultados da busca ("X resultados"). |
| 2. Consistência e padrões | Terminologia do domínio (acervo, exemplar, empréstimo) e layout consistente com menu global. | 1 | Padronizar rótulos de colunas e ações em todas as telas. |
| 3. Prevenção de erros | Ações contextuais (ex.: emprestar apenas quando disponível) sinalizadas. | 2 | Desabilitar/ocultar CTA de empréstimo para itens indisponíveis e exibir motivo. |
| 4. Reconhecimento | Busca por título/código em destaque; informações-chave na listagem. | 1 | Incluir placeholder e filtro por status para reduzir memorização. |
| 5. Controle e liberdade | Navegação persistente e acesso a outras telas sem bloqueio. | 0 | Sem correção crítica. |

**Críticos:** nenhum (sev. ≥3). **Ajustes aplicados no hi-fi:** CTA contextual, filtro de status e destaque do campo de busca.

## Tela 2 — Cadastro (Livro/Leitor)

| Heurística | Avaliação | Severidade | Ação/correção |
|---|---|---:|---|
| 1. Visibilidade do status | Mensagens de sucesso/erro previstas após salvar; campos obrigatórios sinalizados. | 2 | Exibir confirmação persistente breve e resumo do registro salvo. |
| 2. Consistência e padrões | Formulários com rótulos, placeholders e botões primário/secundário consistentes. | 1 | Manter ordem e nomenclatura dos campos conforme RF01/RF03. |
| 3. Prevenção de erros | Validação de campos mínimos (título/autor/código; nome/telefone) e formatos. | 2 | Validar antes de enviar, marcar campos inválidos e preservar dados preenchidos. |
| 4. Reconhecimento | Abas/seções Livro e Leitor reduzem carga cognitiva. | 1 | Indicar aba ativa e campos obrigatórios com legenda. |
| 5. Controle e liberdade | Botões "Cancelar/Voltar" e navegação global disponíveis. | 1 | Confirmar descarte quando houver alterações não salvas (recomendado). |

**Críticos:** nenhum. **Ajustes aplicados:** estados de erro/obrigatoriedade, ações secundárias claras e separação Livro/Leitor.

## Tela 3 — Registrar Empréstimo

| Heurística | Avaliação | Severidade | Ação/correção |
|---|---|---:|---|
| 1. Visibilidade do status | Resumo mostra leitor, livro, retirada e prazo (14 dias); feedback de sucesso/bloqueio. | 1 | Exibir resultado da confirmação com prazo e status "emprestado". |
| 2. Consistência e padrões | Uso consistente de badges, botões e terminologia de regras (limite, atraso). | 1 | Alinhar textos de status com as demais telas. |
| 3. Prevenção de erros | Regras RF06 (limite 3, atraso pendente, indisponível) verificadas com bloqueio/alerta. | 2 | Bloquear confirmação quando regra impedir e apresentar motivo + ação (ex.: ver atrasos). |
| 4. Reconhecimento | Seleção/busca de leitor e exemplar evita digitação de IDs. | 2 | Mostrar dados de confirmação (nome, código, prazo) antes do CTA final. |
| 5. Controle e liberdade | Possibilidade de voltar/corrigir seleção; sem dead-end em caso de bloqueio. | 1 | Oferecer caminhos: escolher outro livro/leitor ou ir à tela de devoluções/atrasos. |

**Críticos:** nenhum. **Ajustes aplicados:** painel de regras/bloqueio, resumo pré-confirmação e CTAs de recuperação.

## Tela 4 — Empréstimos e Devoluções

| Heurística | Avaliação | Severidade | Ação/correção |
|---|---|---:|---|
| 1. Visibilidade do status | Filtros por status e destaque visual de atrasos; confirmação de devolução. | 1 | Atualizar lista/badge imediatamente após devolução e exibir mensagem de sucesso. |
| 2. Consistência e padrões | Cores de status alinhadas aos tokens; ações posicionadas de forma previsível. | 1 | Manter padrão de badges e botões de ação. |
| 3. Prevenção de erros | Ação de devolução contextual; impedir devolução duplicada/registro inexistente com mensagem. | 2 | Solicitar confirmação para devolução e tratar estados inválidos com erro claro. |
| 4. Reconhecimento | Lista com leitor, livro, datas e prazo visíveis; filtros evitam busca manual extensa. | 1 | Permitir busca por leitor/livro dentro da lista. |
| 5. Controle e liberdade | Usuário pode cancelar ação e navegar para outras telas; retorno garantido. | 1 | Manter navegação global e opção de desfazer não aplicável, mas com confirmação prévia. |

**Críticos:** nenhum. **Ajustes aplicados:** destaque de linhas atrasadas, confirmação de devolução e mensagens acionáveis.

---

## Conclusão
- **Problemas críticos (sev. 3-4):** não identificados nas telas hi-fi propostas.
- **Principais melhorias aplicadas:** reforço de feedback de status, prevenção/bloqueio claro por regras (RF06), foco visível e consistência de tokens, e caminhos de recuperação sem dead-ends.
- **Recomendação futura (implementação):** validar comportamento real com dados e teclado (Tab/Enter/Esc), e revisar contraste com ferramenta automatizada no código final.
