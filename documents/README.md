# ERS Brazil — Sistema de Documentos

Branded, print-ready document templates built on the ERS Brazil design system. Open any
file, edit the content, and print or export to PDF (**Ctrl/Cmd + P → Save as PDF**, margins
“None”, background graphics ON).

## Files
- `index.html` — launcher/gallery with live previews + a **brand-use reference** strip.
- `doc.css` — shared document styles: A4 sheet sizing (`.sheet.landscape` / `.sheet.portrait`), print rules (`@page`, `@media print`), embed mode (clean render inside thumbnails), cert chips, signatures. Imports `../colors_and_type.css`.
- `certificado-reciclagem.html` — **Certificado de Destinação Final** (A4 landscape). Petrol sidebar with logo + e-waste seal; volume, period, destination method, certifications, certificate № and signatures. The flagship template.
- `certificado-sanitizacao.html` — **Certificado de Sanitização de Dados** (A4 landscape). Top petrol band; LGPD/Blancco/DoD 5220.22-M/NIST 800-88, fragmentation ≤ 6 mm³, ISO 27001.
- `papel-timbrado.html` — **Papel Timbrado / letterhead** (A4 portrait). Header logo + contact, green rule, body for letters/proposals, petrol footer with address + certifications.
- `relatorio-sustentabilidade.html` — **Relatório de Sustentabilidade** one-pager (A4 portrait). Photo hero, big stat row, result cards, methodology note.
- `proposta-comercial.html` — **Proposta Comercial bilíngue (EN/PT)** — A4 portrait, 10 pages. Cover + 17 sections (parties → acceptance). Running header + petrol footer per page; cover carries full address + 5 cert chips. Built from the Dell / Blancco on-site data-wipe case.

## Document standards (brand use in print)
- **Logo:** ERS Brazil mark (no descriptor) in the header — white on petrol, color on white. Never re-typeset “ERS”.
- **Type:** Montserrat for all running text (Semi Bold for labels/headings); Bebas Neue only for the tagline and big display numbers.
- **Color:** petrol `#043035` base, green `#65CE21` for emphasis/rules, orange `#F4762F` for eyebrow labels. Petrol footer band on stationery.
- **Margins:** 16–18 mm on A4. Institutional footer carries the full legal name, address and certification chips (R2v3 · ISO 9001/14001/45001/27001).
- **Address (canonical):** Alameda Plutão, 555 · American Park Empresarial NR · Indaiatuba — SP · CEP 13347-656.
- **Flags reference:** every document carries the **flag pair — Brazil first, then Canada** (`.ers-flags` in `doc.css`, assets in `assets/flags/`) signalling the Brazilian operation of the Canadian group. 21×14 px, 6 px gap, **no country names** beside them. Use the default (white hairline) on petrol and `.ers-flags.on-light` on white. Never larger than the certification chips — it is a provenance mark, not a logo.
- **Seal:** the circular e-waste badge belongs on certificates only (not on every page).
- **Voice:** Brazilian Portuguese, formal-institutional, proof-led (numbers, standards, certifications). No emoji.

## Editing
These are static HTML — replace the sample values (client name, CNPJ, volumes, dates,
certificate numbers) directly in the markup. All sample data is **illustrative**.
