# Portfolio — Executive Tech

A minimal, high-end professional portfolio built with Next.js, Tailwind CSS, and Lucide React. Executive Tech aesthetic: generous whitespace, Geist typography, subtle dark mode.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (dark mode via `class`)
- **Lucide React** (icons)
- **Geist** (typography)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — Pages (home, about, resume, projects)
- `src/components/` — Header, Footer, ThemeProvider
- Resume page is print-friendly (`@media print` in `globals.css`)

## Customize

- **Name:** Update "Varun Sridhar" in `src/components/Header.tsx` and `Footer.tsx`.
- **Home headline:** Edit `src/app/page.tsx`.
- **About / Resume:** Edit content in `src/app/about/page.tsx` and `src/app/resume/page.tsx`.
