# Chuijia Wang — Personal Academic Website

A zero-dependency, multi-page static website built with plain HTML and CSS.
No build tools, no frameworks, no JavaScript runtime required.

## Structure

```
├── index.html            # About
├── research.html         # Publications
├── teaching.html         # Teaching experience
├── miscellaneous.html    # Talks and photos
├── .nojekyll             # Tells GitHub Pages to serve files as-is
├── assets/
│   ├── css/style.css     # All styles (single stylesheet)
│   └── images/
│       ├── photocj.jpg           # Profile photo
│       └── buildings-smooth.png  # Gallery image
└── README.md
```

## Deployment on GitHub Pages

1. Upload all files into the repository `chuijiawang.github.io`
   (keep the folder structure intact).
2. On GitHub: **Settings → Pages → Source: Deploy from branch,
   branch `main`, folder `/ (root)` → Save**.
3. The site is live at `https://chuijiawang.github.io`
   (updates take 1–2 minutes; hard-refresh with `Ctrl+F5`).

## Common edits

- **Text**: edit the corresponding `.html` file directly.
- **Width**: change `--max` in `assets/css/style.css` (e.g. `920px`).
- **Colours**: edit the variables under `:root` in `style.css`.
- **Profile photo**: replace `assets/images/photocj.jpg` and update the
  `src` in `index.html`.
- **CV**: place your PDF at `assets/cv.pdf` (the About page already links there).

## Adding a new page

1. Copy any existing `.html` file and rename it (e.g. `talks.html`).
2. Replace the content inside `<main>`.
3. Add a navigation entry inside `<nav>` on every page:
   `<li><a href="talks.html">Talks</a></li>`.
4. Commit and wait for Pages to rebuild.
