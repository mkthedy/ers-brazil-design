# ERS Brazil — Landing UI Kit

A high-fidelity recreation of the **ERS Brazil marketing landing page**, rebuilt as modular
React components from the supplied landing-page comp (`assets/reference-landingpage.png`),
the *Apresentação Comercial 2026* deck, and the brand manual.

> ⚠️ No source code or Figma was provided — this is a faithful **visual** reconstruction, not
> a port of production code. Spacing/sizes are interpreted from the comp.

## Run
Open `index.html`. It loads React 18 + Babel (in-browser) + Lucide icons from CDN, imports
`kit.css` (which `@import`s the root `colors_and_type.css`), and mounts the assembled page.

## Files
- `index.html` — assembles the full page and wires interactivity (sticky header, form submit).
- `kit.css` — all component styles, built on the design-system tokens.
- `primitives.jsx` — `Button`, `EyebrowPill`, `Eyebrow`, `Seal`, `useScrolled`, `useLucide`.
- `sections.jsx` — page sections:
  - `Header` — sticky nav, transparent → petrol on scroll, white logo + green CTA.
  - `Hero` — petrol hero, e-waste imagery, green headline, orange CTA, floating data chips.
  - `RiskSection` — "exposed to" heading + orange-check risk list.
  - `PromiseSection` — dark two-column promise (*O que entregamos* ↔ *O que sua empresa ganha*).
  - `CertBand` — full-width orange band with ISO / R2v3 seals.
  - `ProofSection` — heading + 3×2 image-tile grid with scrim labels.
  - `Clients` — "trusted by" row (neutral text placeholders, not third-party logos).
  - `LeadForm` — petrol panel with `DO WHAT'S RIGHT` watermark + asset-valuation form.
  - `Footer` — full-color logo, address, Bebas tagline.

## Component conventions
- Styling is class-based (`kit.css`), so components stay tiny and the cascade is editable in one place.
- Buttons: `<Button variant="green|orange|outline-light" icon="lucide-name">`.
- Eyebrow pills are uppercase Montserrat Semi Bold on orange/green/petrol.
- All imagery uses real assets from `../../assets/`.

## Known substitutions
- Hero/proof imagery reuses the provided facility + conceptual e-waste shots (the comp's exact
  macro circuit-board photo was not supplied). Swap in real photography when available.
- Client logos are rendered as plain text (we don't embed Dell/Google/etc. marks).
- Icons are **Lucide** (brand ships no icon set).
