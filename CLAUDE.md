# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`; the script has no path argument, so pass one if needed: `npm run lint -- src/`)
- No test framework is set up.

## What this is

A French-language marketing/e-commerce site for "Mon Ami Intime", a luxury paper planner. Next.js 16 App Router (`src/app/`), TypeScript, Tailwind CSS v4 (configured via `@tailwindcss/postcss` and `@theme` in `src/app/globals.css` — there is no `tailwind.config` file).

Routes are static presentational pages, one `page.tsx` per folder: `/` (landing), `/collection` (product), `/methode`, `/temoignages`, `/paiement` (checkout with client-side payment-method tabs, no real payment backend), `/confirmation`. A shared fixed `Header` and `Footer` (in `src/components/`) are rendered by the root layout; pages offset the fixed header with `pt-24`/`pt-32`.

The design system ("Noir & Or": dark `#121414`, gold `#e9c176`, Playfair Display + Manrope) lives in `src/app/globals.css` as Tailwind v4 `@theme` tokens (Material-style color roles like `surface-container-*`, named spacing `margin-mobile`/`gutter`, composite type scale `display-lg`/`headline-*`/`body-*`/`label-caps`) plus plain-CSS decorative classes (`bento-card`, `luxury-gradient`, `gold-border-glow`, …). It was extracted from the Stitch project "Personal Growth Life Planner" (`projects/16994435193765332631`, via the stitch MCP), whose "(Final)" desktop screens are the source of the page markup. Fonts are wired through `next/font` variables (`--font-playfair`, `--font-manrope`); Material Symbols icons load via a `<link>` in the root layout and the `.material-symbols-outlined` base class.

## Critical gotchas

- **This Next.js version (16.x) post-dates training data.** Per AGENTS.md, read the relevant guide in `node_modules/next/dist/docs/` (App Router docs under `01-app/`) before writing framework-touching code.
- Images are hotlinked from the Stitch CDN (`lh3.googleusercontent.com`) as plain `<img>` tags — hence the eslint `no-img-element` warnings. Migrating to `next/image` requires adding `remotePatterns` in `next.config.ts`.
- `react/no-unescaped-entities` is disabled in `eslint.config.mjs` because the French copy uses raw apostrophes/quotes in JSX.
