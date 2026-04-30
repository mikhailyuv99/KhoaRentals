# Khoa Rentals — Design System (MASTER)

## Product
- **Type**: Real estate rentals website (monthly-first)
- **Primary CTA**: View listings
- **Secondary CTA**: WhatsApp inquiry (+84 79 387 5777)
- **Tone**: Minimal, confident, modern

## Non‑Negotiables (UI/UX Pro Max)
- **Accessibility**: visible focus, semantic headings, alt text, color contrast ≥ 4.5:1
- **Touch**: targets ≥ 44×44px, no hover-only interactions
- **Performance**: reserve image space, lazy load below fold, avoid CLS
- **Consistency**: token-driven colors/spacing/type; no ad-hoc hex in components

## Style Direction
- **Realest template clone**: light background, soft neutral surfaces, accent blue, rounded cards (18px) and pill CTAs.
- **Minimal + clean**: lots of whitespace, simple grid, subtle hover.
- **One elevation language**: thin borders + minimal shadow on hover.

## Layout
- **Grid**: 12-col on desktop, 2-col on tablet, 1-col on mobile.
- **Container**: max width 1200px (hero text max 700px). Listings section max 1300px.
- **Breakpoints**: 375 / 768 / 1024 / 1440.
- **Sections**: use consistent vertical spacing tokens.

## Typography
- **Display**: Inter / Inter Display feel (clean geometric sans)
- **Body**: Inter
- **Type scale** (web):
  - Tag 14, Body 17–18, H4 22, H3 32, H2 48, H1 72
- **Body line-height**: 1.4–1.6
- **Numbers**: tabular figures for prices

## Color Tokens (semantic)
Use CSS variables only:
- `--bg`, `--ui2`, `--ui3`
- `--text`, `--text2`
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

