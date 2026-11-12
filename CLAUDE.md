# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Knowledge Lab** is a single-page, static web app for storing and reviewing technical concept notes (e.g. Slope, Linear Regression, Backpropagation). It is built with vanilla HTML/CSS/JavaScript using Vite as the bundler. There is no backend — all state is stored in the browser via `localStorage`.

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Bundler     | Vite (vanilla template) |
| Languages   | HTML, CSS, JavaScript   |
| Animation   | Canvas 2D (no Three.js) |
| Fonts       | Google Fonts — Inter, Outfit |
| Deployment  | GitHub Pages via GitHub Actions |

## Key Files

```
concepts/
├── index.html                  # App shell — sidebar, main layout
├── vite.config.js              # Sets base: '/concepts/' for GitHub Pages
├── src/
│   ├── main.js                 # App logic: concepts data, rendering, events
│   └── style.css               # All styles — dark theme, light mode, components
└── .github/workflows/main.yml  # Auto-deploy to GitHub Pages on push to main
```

## Architecture

- **`main.js`** holds a `concepts` array (the data source) and an `app` object with methods:
  - `init()` — entry point, called on `DOMContentLoaded`
  - `renderWelcome()` — renders the welcome screen
  - `renderSidebar()` — populates the nav list from `concepts`
  - `selectConcept(id)` — loads a concept card into the main content area
  - `initTheme()` — restores theme + sidebar state from `localStorage`
  - `setupEventListeners()` — all click/input handlers


## Features

- 🌙 **Dark / Light theme toggle** (top-right button) — persisted in `localStorage`
  - Dark: futuristic neon (cyan, violet, magenta)
  - Light: Hex-inspired theme (warm near-white `#fffcfc`, eggplant text, violet-topaz accents, flat page with a fine paper-grain overlay)
- 🔲 **Sidebar toggle** (`‹` button in top-bar) — collapses/expands with smooth CSS transition; persisted in `localStorage`
- 🏠 **Home navigation** — clicking "KnowledgeLab" title resets to the welcome screen
- 🔍 **Search** — filters the sidebar concept list in real-time

## Adding New Concepts

Edit the `concepts` array in `src/main.js`:

```js
{
  id: 'my-concept',       // unique kebab-case ID
  title: 'My Concept',    // display name
  category: 'Technical',  // shown as a tag
  tags: ['ml', 'stats'],  // additional tags
  description: 'Your note here...',
  interactiveType: 'custom'
}
```

## LocalStorage Keys

| Key        | Value                            |
|------------|----------------------------------|
| `theme`    | `'light'` or `'dark'`           |
| `sidebar`  | `'collapsed'` or `'open'`       |

## Dev Commands

```bash
npm install       # install dependencies
npm run dev       # start local dev server at http://localhost:5173/
npm run build     # build to dist/ for production
npm run preview   # preview the production build locally
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/main.yml`):
1. Installs deps + builds with Vite
2. Pushes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

Live URL: **https://senthilcaesar.github.io/concepts/**

GitHub Pages source must be set to the `gh-pages` branch in repo Settings → Pages.

## Design System

All colors are CSS variables defined in `:root` (dark) and `:root.light-mode` (light):

| Variable           | Dark value          | Light value        |
|--------------------|---------------------|--------------------|
| `--bg-color`       | `#050507`           | `#fffcfc`          |
| `--text-primary`   | `#f0f0f5`           | `#31263b`          |
| `--accent-primary` | `#00f2ff` (cyan)    | `#5f509d` (violet topaz) |
| `--accent-secondary` | `#7000ff` (violet) | `#a477b2` (amethyst) |

Fonts: headings use `Outfit 800`, body uses `Inter`.
