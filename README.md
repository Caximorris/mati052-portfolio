# mati052-portfolio

Personal portfolio of Matias Tamagni — live at [mati052.com](https://mati052.com)

## Stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server and build
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **Framer Motion** — scroll-triggered animations and transitions
- **pnpm** — package manager

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with HMR |
| `pnpm build` | Type-check and bundle for production |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | Run ESLint |

## Project structure

```
src/
├── components/       # One file per section
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeader.tsx
├── constants/
│   └── data.ts       # All portfolio content (single source of truth)
└── index.css         # CSS variables, dark mode, global styles
```

## Theming

Dark/light mode is toggled via a `data-theme` attribute on `<html>`. All colors are CSS custom properties defined in `index.css` — no hardcoded hex values in components.

## Deployment

Deployed on **AWS Amplify** with automatic CI/CD from the `main` branch.

- Build command: `pnpm build`
- Output directory: `dist`
