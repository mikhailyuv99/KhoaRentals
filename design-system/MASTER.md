# Khoa Rentals — Design System (MASTER)

## Product
- **Type**: Real estate rentals website (monthly-first)
- **Primary CTA**: Browse properties
- **Secondary CTA**: WhatsApp inquiry (+84 79 387 5777)
- **Tone**: High-end editorial (minimal words, strong hierarchy)

## Non‑Negotiables (UI/UX Pro Max)
- **Accessibility**: visible focus, semantic headings, alt text, color contrast ≥ 4.5:1
- **Touch**: targets ≥ 44×44px, no hover-only interactions
- **Performance**: reserve image space, lazy load below fold, avoid CLS
- **Consistency**: token-driven colors/spacing/type; no ad-hoc hex in components

## Style Direction
- **Editorial dark luxury**: high contrast, sharp edges, restrained motion, subtle texture.
- **No rounded “app” pills**: keep corners sharp (0–2px at most).
- **One elevation language**: borders + faint surface tint, not heavy shadows.

## Layout
- **Grid**: 12-col on desktop, 2-col on tablet, 1-col on mobile.
- **Container**: max width 1120–1200px; generous vertical rhythm.
- **Breakpoints**: 375 / 768 / 1024 / 1440.
- **Sections**: use consistent vertical spacing tokens.

## Typography
- **Display**: elegant serif for headings (editorial)
- **Body**: readable serif for long-form
- **Type scale** (web):
  - XS 12, SM 14, Base 16, LG 18, XL 24, 2XL 32, 3XL 40–52 (hero)
- **Body line-height**: 1.5–1.7
- **Numbers**: tabular figures for prices

## Color Tokens (semantic)
Use CSS variables only:
- `--bg`, `--fg`
- `--muted`, `--muted2`
- `--border`, `--border2`
- `--surface`, `--surface2`
- `--accent`

## Interaction States
- **Hover**: subtle surface shift
- **Press**: slight opacity shift (no layout change)
- **Focus**: 3px ring using accent (never removed)
- **Motion**: 150–300ms; respect reduced motion

## Components
- **Button**: primary/secondary/ghost, sharp edges, strong typography
- **Card**: border + image gradient, consistent padding
- **Filters**: visible labels/placeholders, keyboard friendly
- **Gallery**: direct horizontal scroll (no modal required)
- **Map**: interactive iframe, “Open in Google Maps” link

## Content Rules
- Headlines: short (3–8 words)
- Supporting: one paragraph max; prefer bullets
- Avoid jargon; emphasize neighborhoods + commute-to-beach/city

