# Muskan Haldankar — Marketing Portfolio

The personal portfolio of **Muskan Haldankar** — digital marketing, content,
analytics and growth. Modern, editorial, fast, and **fully editable without
touching the UI code**.

- **Live site:** https://mwithablog7.github.io/muskanhaldankar-portfolio/

- **Stack:** React + Vite + TypeScript
- **Content lives in two files:** `src/data/site.ts` and `src/data/projects.ts`
- **No fake data:** empty fields are hidden, missing images show a clean
  placeholder, and unfinished projects carry a visible warning badge

---

## Quick start

```bash
npm install
npm run dev      # local preview at http://localhost:5173/muskanhaldankar-portfolio/
npm run build    # production build in dist/
```

---

## Editing guide

Everything you will ever need to change is in these files:

| What you want to change | File |
|---|---|
| Name, positioning, intro | `src/data/site.ts` |
| Bio, interests, education | `src/data/site.ts` |
| Skills | `src/data/site.ts` |
| CV link | `src/data/site.ts` |
| Contact details (email, LinkedIn, other) | `src/data/site.ts` |
| Page title & meta description | `src/data/site.ts` (`seo`) |
| **Projects (add / edit / remove)** | `src/data/projects.ts` |
| Project images | `public/images/projects/` |
| CV PDF | `public/cv/resume.pdf` |

### 1. Add a project

Open `src/data/projects.ts`, copy the example block, and paste it as a new
entry in the `PROJECTS` array:

```ts
{
  slug: 'summer-campaign',            // unique, url-friendly, no spaces
  title: 'Summer Campaign',
  category: 'Marketing',              // must match a CATEGORIES entry
  shortDescription: 'One or two sentences for the card.',
  detailedDescription: 'Longer case-study text ("Overview").',
  context: 'Why the project existed (optional).',
  objective: 'What you were trying to accomplish (optional).',
  role: 'What I personally did',
  process: 'How you approached the work (optional).',
  tools: ['Google Analytics', 'Meta Business Suite'],
  date: 'March 2026',
  images: ['images/projects/summer-1.png'],
  imageCaptions: ['Campaign dashboard after week 2'],
  links: [{ label: 'Live campaign', url: 'https://example.com' }],
  results: [],                        // REAL metrics only — leave [] if none
  outcome: 'What happened / what shipped',
  lessons: 'What I learned or would improve.',
  tags: ['Social', 'Content'],
  placeholder: true,                  // delete this line when finished
},
```

Then `CATEGORIES` at the top of the same file controls the filter buttons.
Add or remove categories freely — empty categories never appear.

### 2. Remove a project

Delete its block from `PROJECTS`. Or set `hidden: true` to hide it without
deleting.

### 3. Edit a project

Change any field in its block. Fields you empty out simply stop rendering —
sections never show as broken or half-filled.

### 4. Add images

1. Drop files into `public/images/projects/`
2. Reference them relatively:

```ts
images: ['images/projects/dashboard.png', 'images/projects/post.png'],
imageCaptions: ['KPI dashboard', 'Top-performing post'],
```

The **first** image becomes the card cover. Captions map to images by order.

### 5. Replace images

Overwrite the file with the same name, or point `images:` at a new filename.

### 6. Change homepage text

In `src/data/site.ts`: `name`, `positioning`, `intro`. The homepage hero
updates automatically.

### 7. Change skills

In `src/data/site.ts`, edit the `skills` array — rename categories, add or
remove items. No percentages or levels are ever displayed.

### 8. Change contact details

In `src/data/site.ts` → `contact`. Leave a field `''` and its link is
hidden. Never add links you don't own.

### 9. Add a CV

1. Put your PDF at `public/cv/resume.pdf`
2. In `src/data/site.ts`, set `cvUrl: 'cv/resume.pdf'`

Leave `cvUrl: ''` and the CV buttons disappear entirely.

### 10. Redeploy after changes

The repository has two branches:

- **`main`** — your source code (what you edit)
- **`gh-pages`** — the built site (`dist/`), which is what GitHub Pages serves

Editing content on `main` alone does **not** change the live site. Publish a
new build with one command:

```bash
npm run deploy
```

This runs the production build and force-pushes `dist/` to `gh-pages`.
GitHub Pages updates the live URL within about a minute.

Optionally, also save the source change to `main` for version history:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

> If git ever asks "who you are", run these once:
> ```bash
> git config --global user.name "mwithablog7"
> git config --global user.email "mwithablog7@users.noreply.github.com"
> ```

---

## Content rules (by design)

- **No invented data.** The site never fabricates clients, metrics, job
  titles, testimonials or results. You provide content; the site renders it.
- **Results are optional.** Fill `results` only with real numbers. If you
  have none, use `outcome` instead — the page then shows an
  **Outcome / Learning** section instead of **Results**.
- **Placeholders are visible.** Entries with `placeholder: true` show a
  warning badge so unfinished work can't be mistaken for finished work.
  Remove the line when the project is complete.
- **Missing images** render a clean "Add project image" box, never a
  broken image.

---

## Project structure

```
muskanhaldankar-portfolio/
├── index.html                 # SEO meta tags + title
├── public/
│   ├── 404.html               # GitHub Pages deep-link fallback
│   ├── favicon.svg
│   ├── cv/                    # ← put resume.pdf here
│   └── images/projects/       # ← put project images here
├── scripts/
│   └── deploy.mjs           # npm run deploy → publishes dist/ to gh-pages
└── src/
    ├── data/
    │   ├── site.ts            # ← personal info, skills, contact, CV
    │   └── projects.ts        # ← all projects + categories
    ├── components/            # Layout, ProjectCard, SmartImage
    ├── pages/                 # Home, Work, CaseStudy, About, Contact, 404
    ├── App.tsx                # routes
    └── styles.css             # design system
```

---

## Tech notes

- Routing uses `BrowserRouter` with `base: '/muskanhaldankar-portfolio/'`;
  `public/404.html` makes direct links and refreshes work on GitHub Pages.
- Images are lazy-loaded; animations respect `prefers-reduced-motion`.
- Build output: ~57 KB gzipped JS, ~3 KB gzipped CSS.
