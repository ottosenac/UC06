# Aula 02 — Tokens Visuais

Sistema: **Gestão de Empréstimos da Biblioteca Comunitária**  
Formato: definição de tokens (cores, tipografia, espaçamento) para garantir consistência entre as 4 telas hi-fi. Referência técnica: `tokens.json` nesta pasta. Paleta inspirada em tons institucionais (referência possível: Senac Tech), com ajustes para contraste e legibilidade.

## 1. Cores

### Marca
| Token | Valor | Uso |
|---|---:|---|
| `color.brand.primary` | `#004A8D` | Ações principais (CTA), cabeçalho, links ativos |
| `color.brand.primaryHover` | `#003A70` | Hover/foco de CTA primário |
| `color.brand.secondary` | `#F7941D` | Destaques, badges de atenção, ações secundárias de realce |
| `color.brand.secondaryHover` | `#DD7F0F` | Hover secundário |

### Neutros
| Token | Valor | Uso |
|---|---:|---|
| `color.neutral.bg` | `#F4F7FB` | Fundo da aplicação |
| `color.neutral.surface` | `#FFFFFF` | Cards, tabelas, formulários |
| `color.neutral.border` | `#D9E1EA` | Bordas e divisores |
| `color.neutral.text` | `#1F2937` | Texto principal |
| `color.neutral.textMuted` | `#5B6470` | Texto secundário/apoio |

### Feedback e status de domínio
| Token | Valor | Uso |
|---|---:|---|
| `color.feedback.success` / `successBg` | `#1F8B4C` / `#E8F6EE` | Sucesso, devolução concluída |
| `color.feedback.warning` / `warningBg` | `#B45309` / `#FFF4E5` | Alertas, regras (limite/prazo próximo) |
| `color.feedback.error` / `errorBg` | `#C62828` / `#FDECEC` | Erros, bloqueios, atrasos críticos |
| `color.feedback.info` / `infoBg` | `#1565C0` / `#E8F1FC` | Informações, empréstimo ativo |
| `color.status.disponivel` | `#1F8B4C` | Exemplar disponível |
| `color.status.emprestado` | `#1565C0` | Exemplar emprestado |
| `color.status.atrasado` | `#C62828` | Empréstimo atrasado |
| `color.focus` | `#0B5FFF` | Indicador de foco visível (acessibilidade) |

## 2. Tipografia

- **Família base:** `'Segoe UI', Roboto, Helvetica, Arial, sans-serif` (legível em ambiente web/Windows).
- **Pesos:** 400 (corpo), 500 (rótulos/subtítulos), 600 (destaque), 800 (títulos principais).
- **Escala:** xs 0.75rem, sm 0.875rem, md 1rem, lg 1.125rem, xl 1.5rem, xxl 2rem.
- **Hierarquia sugerida:** H1 (xxl/800) elemento mais importante da tela; H2 (xl/600); rótulos (sm-md/500-600); corpo (md/400, line-height 1.5).

## 3. Espaçamento, raio e elevação

- **Escala de espaçamento:** 4px (0.25rem) base — tokens `1`=4px, `2`=8px, `3`=12px, `4`=16px, `5`=24px, `6`=32px, `8`=48px.
- **Raios:** sm 4px (inputs), md 8px (botões/cards), lg 12px (containers), pill para badges de status.
- **Sombras:** sm para campos/cards sutis; md para cards principais/modais.
- **Borda de foco:** `3px solid rgba(11,95,255,0.35)` para visibilidade no teclado (Tab).

## 4. Aplicação por tipo de elemento

- **Botão primário:** fundo `primary`, texto branco, raio md, padding `2 4`, foco visível.
- **Botão secundário:** contorno `primary`, fundo transparente/surface.
- **Campos de formulário:** borda `neutral.border`, raio sm, foco com `focus` ring, rótulos claros.
- **Badges de status:** cores de `status.*` com fundo suave e texto contrastante.
- **Alertas de regra (RF06):** warning/error com mensagem explícita e ação de correção/retorno.

## 5. Acessibilidade (intenção)
- Contraste texto/fundo adequado em CTAs e mensagens de status.
- Indicador de foco sempre visível (não remover outline sem substituto).
- Hierarquia consistente: um único elemento de maior destaque por tela.
