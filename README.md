# Youssef Ali — Portfolio (HTML / CSS / Vanilla JavaScript)

A plain-code recreation of the original React + TanStack Start + Tailwind portfolio.
No frameworks, no build step, no `npm install`.

## Folder structure

```
youssef-portfolio/
├── index.html                 ← Homepage (all sections)
├── projects/
│   └── prognosai.html         ← PrognosAI case study page
├── css/
│   └── style.css              ← All styling (colors, layout, responsive rules)
├── js/
│   └── main.js                ← Theme toggle, mobile menu, footer year, missing-image notice
├── assets/
│   ├── favicon.ico            ← included
│   ├── youssef-profile.jpg    ← ⚠ YOU MUST ADD (see below)
│   └── certs/                 ← ⚠ YOU MUST ADD the certificate files (see below)
└── README.md
```

## ⚠ Files you need to add

Your uploaded ZIP only contained *pointer files* (`.asset.json`) for the images, not the images
themselves, so they could not be copied. Until you add them, the page shows a dashed
"Image not found — add file: …" box where each one belongs. Nothing was invented in their place.

Put these files in the exact locations below (names are case-sensitive):

| Put this file here | Used for |
|---|---|
| `assets/youssef-profile.jpg` | Hero profile photo |
| `assets/certs/nti_machine_learning.png` | NTI × ITIDA training certificate |
| `assets/certs/Coursera_VQ2HPJZB22TR_page-0001.jpg` | Advanced Learning Algorithms |
| `assets/certs/machine_learning_coursera.png` | Machine Learning (preview image) |
| `assets/certs/Coursera_TJOFWH07F0JB.pdf` | Machine Learning (PDF opened when you click the image) |
| `assets/certs/google_ai.png` | Google AI Professional Certificate |
| `assets/certs/ibm_fundamentals.jpg` | IBM AI Fundamentals |
| `assets/certs/cisco_modern_ai.jpg` | Cisco Introduction to Modern AI |
| `assets/certs/datacamp_intermediate_python.png` | DataCamp Intermediate Python |
| `assets/certs/tiec_frontend.jpg` | TIEC / CREATIVA Frontend Workshop |

These are the original files from your Lovable project (its Files / Assets panel, or the
downloads you originally uploaded). If a file has a different name or format, either rename it
or change the `src="…"` in `index.html`.

## Run it locally

**Easiest:** double-click `index.html` — it opens in your browser.

**Recommended (works exactly like a real website):** open a terminal in the project folder and run

```
python3 -m http.server 8000
```

then visit <http://localhost:8000>. (Or use the "Live Server" extension in VS Code.)

An internet connection is needed for the Google Fonts (Inter, Space Grotesk). Offline, the
site falls back to your system font and still works.

## How to edit the content

Everything is plain HTML. Open `index.html` and search for the section comment, e.g.
`===== ABOUT =====`, `===== SKILLS =====`, `===== CERTIFICATIONS =====`.

- **Change text:** edit the words between the tags.
- **Add a skill:** copy a line like `<span class="chip">Python</span>` and change the text.
- **Add a certificate:** copy one whole `<article class="cert"> … </article>` block in the
  Certifications section, then change the title, date, image path and links.
- **Change contact details:** edit the three `<li>` items inside `===== CONTACT =====`.
- **Add another project:** copy the `<article class="other-project">` block in Projects.
- **Case study page:** edit `projects/prognosai.html` the same way. Its Live Demo and GitHub
  links are the `href` values near the top and bottom of the page.
- **Update "8 Certifications" / graduation year in the hero:** edit the `<dl class="stats">` block.

## How to customize the design

Open `css/style.css`. The top of the file (section 1) holds all the colors as variables:

```css
html.dark {            /* dark theme (default) */
  --background: …;     /* page background */
  --primary: …;        /* crimson buttons / accents */
  --rose: …;           /* copper highlight color */
}
:root { … }            /* light theme */
```

Change a variable once and it updates everywhere. Other useful spots:

- Fonts: `--font-display` and `--font-sans` (and the Google Fonts `<link>` in each HTML `<head>`).
- Tag/pill look: the `.chip` rule.
- Buttons: `.btn`, `.btn-primary`, `.btn-outline`.
- Layout breakpoints: the two `@media` blocks at the bottom (640px tablet, 1024px desktop).
- Make the site start in light mode: remove `class="dark"` from the `<html>` tag and change the
  default in `js/main.js` (`applyTheme(… : true)` → `false`).

## What the JavaScript does (js/main.js — about 80 lines)

1. Dark/light toggle, remembered in `localStorage` (same key as the original: `portfolio-theme`).
2. Opens/closes the mobile menu.
3. Writes the current year in the footer.
4. Shows an "image not found" box if an image file is missing.

## Notes on differences from the original

- Built from your project's source code. The live Lovable site was not reachable, so it was not
  compared pixel-by-pixel; layout, spacing, colors and breakpoints were translated from the
  Tailwind classes.
- Removed `canonical` / `og:url` tags that pointed to `youssefalianwer.lovable.app`. Add them
  back with your new domain once you host the site.
- The React "404 / error" screens were not recreated (static hosts provide their own 404).
- PrognosAI itself (FastAPI on PythonAnywhere) is untouched; this site only links to it.
