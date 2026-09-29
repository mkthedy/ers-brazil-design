---
name: ers-brazil-design
description: Identidade visual ERS Brazil (Environmental Recovery Solutions Brazil) — use ao criar qualquer interface, documento, certificado, proposta, relatório, deck ou peça da ERS. Tokens de cor/tipo, logos vetoriais, selos, padrão S, fotos reais e modelos A4 prontos.
license: Proprietary — ERS Brazil brand assets. Internal / authorized use only.
user-invocable: true
---

# ERS Brazil Design System

Leia só o necessário, nesta ordem:
1. `colors_and_type.css` — tokens (cores, tipo, espaço, raio, sombra). Importe-o; nunca copie hex soltos.
2. As regras essenciais abaixo. Abra `README.md` só para contexto de marca, voz ou manifesto de arquivos.
3. Um modelo pronto só quando a tarefa pedir aquele tipo de peça (não leia todos).

## Regras essenciais
- **Petrol `#043035`** domina (heros, rodapés, laterais). **Verde `#65CE21`**: logo, CTA com texto petrol, display sobre petrol — nunca texto pequeno verde sobre branco. **Laranja `#F4762F`**: pílulas de eyebrow, faixa de certificações, marcadores.
- **Montserrat** para todo texto (Semi Bold = assinatura; rótulos CAIXA-ALTA tracking .12em). **Bebas Neue** só na tagline "DO WHAT'S RIGHT" e em números grandes.
- **Logo:** ERS BRAZIL empilhado sem descritor, grande (`assets/logos/stacked-*.svg`; `onpetrol` sobre petrol). Nunca recompor "ERS" em fonte. Descritor (`full-*`) só em contexto formal.
- **Documentos:** rodapé petrol com endereço canônico (Alameda Plutão, 555 · American Park Empresarial NR · Indaiatuba — SP · CEP 13347-656), chips R2v3 · ISO 9001/14001/45001/27001 e bandeiras **Brasil → Canadá** 21×14px (`assets/flags/`). Selo e-waste só em certificados. Margens 16–18mm.
- **Padrão S** (`assets/pattern/`) a 10–30% de opacidade; fotos reais de `assets/photos/` (enquadramento aprovado no fim do README).
- PT-BR, tom técnico e baseado em provas. **Sem emoji.** Ícones Lucide 2px.

## Novo documento (fast-path, menor custo de tokens)
Copie `documents/_MODELO-BASE.html` (papel timbrado em branco, cabeçalho + rodapé institucional prontos), troque só os `[[PLACEHOLDERS]]`. Se já existir o tipo, use o modelo específico. Não leia o `README.md` para editar documento.

## Mapa de arquivos
- `documents/` — `_MODELO-BASE.html` (base em branco) + modelos A4: `papel-timbrado`, `certificado-reciclagem`, `certificado-sanitizacao`, `relatorio-sustentabilidade`, `proposta-comercial` (+ `doc.css`).
- `slides/index.html` — deck 16:9 · `brandbook/` — manual completo · `ui_kits/landing/` — landing page.
- `tokens.json` — os mesmos tokens em JSON · `fonts/` — TTFs da marca.
