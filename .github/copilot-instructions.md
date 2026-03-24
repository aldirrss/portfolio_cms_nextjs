# Copilot Instructions — IT Portfolio

## Quick Commands

- Dev server: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Start production build: `npm start`
- Lint: `npm run lint`

## Architecture

- Next.js App Router project using top-level `app/`, `components/`, and `data/` directories.
- Route pages in `app/` are primarily server components that compose interactive leaf components from `components/sections/`.
- Global shell concerns live in `components/layout/RootShell.tsx` (layout scaffold, loading flow, command palette hotkeys).
- Data is currently static and typed via files in `data/` (no backend/API route dependency in this repo).

## Conventions

- Use `@/*` imports mapped to repository root (for example `@/components/...`, `@/data/...`).
- Keep `'use client'` at interactive leaf components; avoid making page files client components unless required.
- Use explicit TypeScript types for props and data models; avoid `any`.
- Prefer Tailwind utility classes plus existing CSS variables from `app/globals.css`; do not introduce CSS Modules unless requested.
- Use Next.js `Image` for rendered images and preserve configured remote host patterns in `next.config.mjs`.

## Build And Quality

- Type checking is enforced during `npm run build`.
- No test runner is configured yet (no `test` script). If adding tests, include setup in the same change.

## Pitfalls

- Keep the theme bootstrapping script in `app/layout.tsx` to avoid flash/jank during initial render.
- Many UI interactions depend on Framer Motion and section-level client components; preserve existing motion patterns when refactoring.
- External image/font resources require network access in development.

## References

- Setup, feature overview, and deployment details: `README.md`
- Theme tokens and global animation utilities: `app/globals.css`
- App composition baseline: `app/page.tsx`
- Shell behavior and command palette wiring: `components/layout/RootShell.tsx`
