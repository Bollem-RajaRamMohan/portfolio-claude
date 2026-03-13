# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start dev server (Turbopack, http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint with Next.js core-web-vitals + TypeScript rules

## Architecture

**Next.js 16 App Router** portfolio with React 19, TypeScript (strict), and Tailwind CSS v4.

### Key Patterns

- **Path alias:** `@/*` maps to `src/*`
- **Dark theme only:** Enforced via `className="dark"` on `<html>` in root layout. Background is pure black (#000).
- **Root layout** (`src/app/layout.tsx`) wraps all pages with: Navbar → SmoothScroll (Lenis) → children → Footer
- **Pages with fixed navbar** must add `pt-20` to their top-level container to clear the fixed header.

### Animation System

Two animation libraries coexist:
- **Framer Motion** — Primary. Used for scroll-triggered reveals, hover effects, and layout animations. All animation components use `"use client"`.
- **GSAP + @gsap/react** — Available for complex timeline animations (not yet used).
- **Lenis** — Smooth scroll provider wrapping the entire app via `SmoothScroll` component.

Reusable animation components in `src/components/animations/`:
- `FadeIn` — Directional fade on scroll (up/down/left/right), uses `whileInView` with `viewport={{ once: true }}`
- `TextReveal` — Word-by-word staggered reveal
- `MagneticButton` — Cursor-tracking spring physics button
- Custom easing: `[0.21, 0.47, 0.32, 0.98]` is the standard cubic bezier used across animations.

### Data Layer

Static data lives in `src/data/` — projects and navigation are defined there, typed via interfaces in `src/types/index.ts`. Pages import data directly (no API/CMS).

### Styling Conventions

- Tailwind CSS v4 via `@tailwindcss/postcss` plugin (no tailwind.config — uses CSS-based config in `globals.css`)
- Utility: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes
- Color palette: black/neutral backgrounds, white text, purple-to-cyan gradients for accents
- All components use Tailwind utility classes; no CSS modules or styled-components
