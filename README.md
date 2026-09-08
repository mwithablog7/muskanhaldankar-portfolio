# Muskan Haldankar — Portfolio

A personal portfolio website for **Muskan Haldankar** — Marketing Analytics · Digital Strategy · Creative Thinking.

## Design Direction

- **Palette:** Rich & warm — cream, deep taupe, muted burgundy, dark chocolate
- **Typography:** Playfair Display (editorial serif) · DM Sans (body) · IBM Plex Mono (labels)
- **Feel:** Luxury editorial · modern marketing portfolio · subtle motorsport precision

## How to use it

- **Open locally:** double-click `index.html` — everything works from `file://`.
- **Deploy:** upload this folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
  There is no build step. Nothing to install.

## Adding Images

1. Drop your images into the `images/` folder next to `index.html`.
2. Open `index.html`, find the `IMAGES` object near the top of the `<script>` (search for `IMAGES`).
3. Set the paths:

```js
const IMAGES = {
  hero: 'images/hero.jpg',        /* Hero section visual */
  about: 'images/about.jpg',      /* About page photo */
  projects: {
    'ecodolomitesgt': 'images/ecodolomitesgt.jpg',
    'mwithablog': null,
    'f1-social-media': null,
    'luxury-brand': null,
    'analytics-dashboard': null,
    'photography': null
  }
};
```

Set any value to `null` to show the default abstract visual instead.

**Recommended image sizes:**
- Hero: 800×1000px (portrait, 4:5 ratio)
- About: 600×800px (portrait, 3:4 ratio)
- Projects: 800×500px (landscape, 16:10 ratio)

## Editing Content

All content lives in **one place**: the `DATA LAYER` block near the top of the `<script>` in `index.html` (search for `1. DATA LAYER`). Edit plain objects — no build, no recompile.

| Data | Variable | What you can change |
|---|---|---|
| Contact & identity | `SITE` | name, headline, email, LinkedIn, GitHub, Instagram |
| Images | `IMAGES` | hero, about, project thumbnails |
| Projects | `PROJECTS` | titles, descriptions, tools, case studies, demo URLs |
| Experience | `EXPERIENCE` | roles, duties, dates, highlights |
| Skills | `SKILL_GROUPS` | toolbox groups |
| Education / certs / languages | `EDUCATION`, `CERTIFICATIONS`, `LANGUAGES` | as labelled |

## Site Sections

1. **Home** — Hero with positioning, key areas, featured project, exploring section
2. **About** — Bio, career direction, education, skills, languages
3. **Experience** — Professional timeline with motorsport emphasis
4. **Projects** — 6 project slots with case study structure
5. **GitHub** — Analytics & Experiments with planned repos
6. **Social** — Two Instagram accounts, separate treatments
7. **Contact** — Clean contact links and email CTA

## Positioning Rules

- Primary: Marketing Analytics · Digital Strategy · Creative Thinking
- Aspirational (NOT yet professional): Luxury Marketing, F1/Motorsport
- ECOdolomitesGT: presented as real motorsport experience
- F1: presented as aspiration / area of interest
- Luxury: positioned as "developing toward"
- Never invent experience, clients, results or statistics
- Clearly label independent projects

## Structure

`index.html` is one self-contained file:

```
<style>  — tokens → base → components → pages → print
<script> — 1. DATA LAYER (edit here)
          2. CORE (helpers, motion, router)
          3. COMPONENTS (Button, SectionHeader, Tags…)
          4. PAGES (Home, About, Experience, Projects, Contact, GitHub, Social)
          5. BOOT
```

## Accessibility

Skip link, semantic landmarks, keyboard navigation, visible focus states, reduced-motion support, and a theme toggle (AUTO / LIGHT / DARK) that persists.

## Tech

- Zero dependencies, zero build — vanilla ES SPA with hash-based routing
- Fast initial load: one request, inline CSS/JS, lazy page renders
- Dark/light theme follows `prefers-color-scheme` with manual override
