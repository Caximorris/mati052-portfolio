# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server (Vite HMR)
pnpm build      # type-check then bundle (tsc -b && vite build)
pnpm lint       # run ESLint on all TS/TSX files
pnpm preview    # serve the production build locally
```

No test suite is configured.

## Architecture

Single-page portfolio built with React 19 + TypeScript + Vite. No routing — the page is a vertical stack of sections.

**Data layer** — `src/constants/data.ts` is the single source of truth for all portfolio content (personal info, roles, skills, experience, projects). Update content here only; components consume it via named imports.

**Component structure** — `src/App.tsx` owns the dark-mode toggle (`dark` boolean state, persisted to `localStorage`, applied as `data-theme` attribute on `<html>`). It passes `dark` as a prop to every section component. Components are flat under `src/components/` with no subdirectories.

**Styling** — CSS custom properties defined in `src/index.css` for both light (`:root`) and dark (`[data-theme='dark']`) themes. Tailwind v4 is available but the project primarily uses inline styles referencing those CSS variables (`var(--teal)`, `var(--bg)`, etc.). The two brand accent colors are `--teal` (#118DA0) and `--red` (#CE524B).

**Animations** — Framer Motion is used throughout. Sections use `whileInView` + `viewport={{ once: true }}` for scroll-triggered entrance animations. `SectionHeader` is a shared component that renders a numbered section title with the teal outline numeral + red underline bar pattern.

**Fonts** — `Space Grotesk` (headings, `--font-heading`) and `Inter` (body, `--font-body`) loaded from Google Fonts; `Courier New` for monospace (`--font-mono`).

**Deployment** — Deployed to AWS Amplify at mati052.com.

# mati052-portfolio

Portfolio personal de Matias Tamagni — CV web estático.

## Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (@tailwindcss/vite)
- Framer Motion
- pnpm como gestor de paquetes

## Comandos esenciales
- `pnpm dev` — servidor de desarrollo en localhost:5173
- `pnpm build` — build de producción en /dist
- `pnpm preview` — previsualiza el build local

## Estructura
- `src/components/` — un archivo por sección (Hero, About, Skills, Experience, Projects, Contact, Footer, Navbar, SectionHeader)
- `src/constants/data.ts` — fuente de verdad de todo el contenido del CV
- `src/index.css` — variables CSS globales (paleta, tipografía, dark mode con [data-theme])

## Paleta de colores
- Primario: #118DA0 (--teal)
- Acento: #CE524B (--red) — usar con moderación
- Fondo claro: #F5F9FA (--bg en light mode)
- Fondo oscuro: #0F1923 (--bg en dark mode)

## Convenciones
- Estilos inline con CSS variables, no clases Tailwind hardcodeadas
- Dark mode gestionado con [data-theme='dark'] en el root div y variables CSS
- Animaciones con Framer Motion (whileInView con viewport once:true)
- Sin backend — todo estático
- Sin useState innecesarios — lógica simple en constantes

## Deploy
- AWS Amplify (plan gratuito)
- Dominio: mati052.com
- CI/CD automático desde rama main de GitHub
- Build command: `pnpm build` / Output dir: `dist`

## Lo que NO hacer
- No usar target="_blank" en links mailto:
- No hardcodear colores hex fuera de index.css
- No usar Tailwind para estilos de color/spacing críticos, usar CSS variables
- No añadir dependencias pesadas sin justificación