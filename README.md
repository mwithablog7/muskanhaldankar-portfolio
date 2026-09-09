<div align="center">

# Muskan Haldankar

### Marketing Analytics · Digital Marketing · Creative Strategy

<br>

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Live-brightgreen?style=for-the-badge)](https://mwithablog7.github.io/muskanhaldankar-portfolio/)
[![Resume](https://img.shields.io/badge/📄_Resume-Download-blue?style=for-the-badge&logo=github)](https://mwithablog7.github.io/muskanhaldankar-portfolio/#/resume)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/muskan-haldankar)
[![GitHub](https://img.shields.io/badge/🐙_GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/mwithablog)
[![Instagram](https://img.shields.io/badge/📸_Instagram-Follow-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/mwithablog/)

<br>

*A personal portfolio — elegant, self-contained, zero dependencies.*

*Florence, Italy · Available worldwide*

</div>

---

## About

A luxury-editorial portfolio built as a **single, self-contained HTML file** — no build tools, no frameworks, no dependencies.

The site communicates my positioning as a marketing professional with strengths in **analytics**, **digital strategy**, and **creative thinking**, with a developing interest in **luxury marketing** and **motorsport marketing**.

### Design Philosophy

| Principle | Implementation |
|-----------|---------------|
| **Typography** | Playfair Display (editorial serif) · DM Sans (body) · IBM Plex Mono (labels) |
| **Palette** | Warm ivory · soft taupe · champagne · deep espresso · muted burgundy accent |
| **Feel** | Luxury editorial · modern marketing portfolio · subtle motorsport precision |
| **Philosophy** | Premium through typography, whitespace and composition — not decoration |

### Pages

| Page | Route | Purpose |
|------|-------|---------|
| 🏠 **Home** | `#/` | Hero, key areas, featured project, exploring section |
| 👤 **About** | `#/about` | Bio, career direction, education, skills, languages |
| 💼 **Experience** | `#/experience` | Professional timeline with motorsport emphasis |
| 📁 **Projects** | `#/projects` | 6 project slots with case study structure |
| 📊 **Analytics** | `#/analytics` | Marketing analytics focus |
| 🎨 **Creative** | `#/creative` | Creative work and photography |
| 💡 **Brand Strategy** | `#/brand` | Brand strategy interests |
| 🏎️ **Motorsport** | `#/motorsport` | Motorsport marketing experience |
| 🐙 **GitHub** | `#/github` | Analytics & Experiments |
| 📸 **Social** | `#/social` | Two Instagram accounts, separate treatments |
| ✉️ **Contact** | `#/contact` | Professional contact links |
| 📄 **CV / Resume** | `#/resume` | Downloadable, print-optimized resume |

---

## Quick Start

### Option 1: Open Locally
```bash
# Double-click index.html — works from file:// protocol
open index.html
```

### Option 2: Deploy Anywhere
Upload the `muskan-portfolio/` folder to any static host:
- **[GitHub Pages](https://pages.github.com/)** — Free, instant
- **[Netlify Drop](https://app.netlify.com/drop)** — Drag and drop
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — Fast, free, custom domain
- **[Vercel](https://vercel.com)** — Zero-config

No build step. No `npm install`. No configuration.

---

## Customisation

### Adding Images

1. Drop images into the `images/` folder next to `index.html`
2. Open `index.html` and find the `IMAGES` object near the top of the `<script>` block
3. Set the paths:

```javascript
const IMAGES = {
  hero: 'images/hero.jpg',        // Hero section visual
  about: 'images/about.jpg',      // About page photo
  projects: {
    'ecodolomitesgt': 'images/ecodolomitesgt.jpg',
    'mwithablog': null,           // null = shows default visual
  }
};
```

**Recommended sizes:**
| Image | Dimensions | Ratio |
|-------|-----------|-------|
| Hero | 800 × 1000px | 4:5 |
| About | 600 × 800px | 3:4 |
| Projects | 800 × 500px | 16:10 |

### Editing Content

All content lives in **one place**: the `DATA LAYER` block near the top of the `<script>` in `index.html`.

| Data | Variable | What to edit |
|------|----------|-------------|
| Identity & contact | `SITE` | Name, headline, email, LinkedIn, GitHub, Instagram |
| Images | `IMAGES` | Hero, about, project thumbnails |
| Projects | `PROJECTS` | Titles, descriptions, tools, case studies |
| Experience | `EXPERIENCE` | Roles, duties, dates, highlights |
| Skills | `SKILL_GROUPS` | Category groups and items |
| Education | `EDUCATION` | Degrees, courses, dates |
| Certifications | `CERTIFICATIONS` | Cert names and years |
| Languages | `LANGUAGES` | Languages and proficiency levels |

---

## Architecture

```
muskan-portfolio/
├── index.html          ← The entire site (one file)
├── images/             ← Add your photos here
├── README.md           ← This file
└── .gitignore
```

### Inside `index.html`

```
<style>   — tokens → base → components → pages → resume → print
<script>  — 1. DATA LAYER (edit here)
            2. CORE (helpers, motion, router)
            3. COMPONENTS (Button, SectionHeader, Tags)
            4. PAGES (Home, About, Experience, Projects, Contact, GitHub, Social, Resume)
            5. BOOT
```

---

## Key Features

| Feature | Details |
|---------|---------|
| **Zero dependencies** | Vanilla JavaScript, no frameworks, no build step |
| **Self-contained** | Single HTML file — inline CSS, JS, SVG |
| **Fast loading** | One HTTP request, lazy page renders |
| **Dark / Light theme** | Auto-detects system preference with manual toggle |
| **Responsive** | Mobile-first, adapts from 320px to ultrawide |
| **Accessible** | Skip link, semantic landmarks, keyboard nav, focus states, reduced motion |
| **Print-optimised** | Resume page is designed for PDF export via browser print |
| **SEO-ready** | Meta tags, Open Graph, semantic HTML |
| **Image system** | Drop in photos, set paths in `IMAGES` — placeholder visuals when empty |

---

## Positioning Rules

This portfolio follows strict positioning guidelines:

- ✅ **Marketing Analytics · Digital Marketing · Creative Strategy** — primary positioning
- ✅ **ECOdolomitesGT** — real motorsport marketing experience
- ✅ **Brand Strategy · Luxury Marketing · Motorsport Marketing · F1** — areas of interest and development
- ❌ Never claims professional experience in luxury marketing or Formula 1
- ❌ Never invents clients, results, statistics, or job titles
- ❌ Independent projects clearly labelled as independent

---

## Tech Stack

```
HTML5      — Semantic markup, accessibility
CSS3       — Custom properties, grid, clamp(), container queries
JavaScript — ES6+, SPA router, Intersection Observer, no dependencies
Fonts      — Google Fonts (Playfair Display, DM Sans, IBM Plex Mono)
```

---

## Print / PDF Export

1. Navigate to `#/resume` (or click **CV / Resume** in the nav)
2. Click **"Save as PDF"** or press `Ctrl/Cmd + P`
3. Select **"Save as PDF"** as the destination
4. The resume is designed to print cleanly on A4/Letter

---

<div align="center">

**Built by Muskan Haldankar** · Florence, Italy

*Marketing Analytics · Digital Marketing · Creative Strategy*

</div>
