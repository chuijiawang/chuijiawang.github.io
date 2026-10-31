# Personal academic website (mathematics)

A clean, dependency-free static website designed for GitHub Pages. No build tools, no
frameworks — every page is plain HTML and CSS, and every part can be edited directly on
github.com or with any text editor.

## Contents

```
academic-website/
├── index.html            # About: bio, photo, MathSciNet / Genealogy / ORCID links, contact
├── research.html         # Publications, preprints, article and arXiv links
├── teaching.html         # Current and past courses, supervision
├── miscellaneous.html    # Photo gallery, talks, notes, other links
├── page-template.html    # Blank skeleton for adding a new section
├── assets/
│   ├── css/style.css     # All styles and theme variables
│   ├── js/main.js        # Mobile menu and footer year
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile.svg                 # Replace with your portrait
│   │   └── gallery/gallery-1..4.svg    # Replace with your photos
│   └── papers/           # Put your PDF files here
└── .nojekyll             # Tells GitHub Pages to serve the files as-is
```

## Deploy to GitHub Pages

### Option A — GitHub website (no command line needed)

1. Sign in at [github.com](https://github.com) and create a **new public repository**.
   For a site at `https://YOUR-USERNAME.github.io`, name the repository exactly
   `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your actual GitHub username).
2. Open the new repository, click **Add file → Upload files**, and drag in **everything
   inside** the `academic-website` folder (including the `.nojekyll` file and the
   `assets` folder). Click **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to
   *Deploy from a branch*, the branch to `main`, and the folder to `/ (root)`. Save.
4. Wait a minute or two. Your site is live at `https://YOUR-USERNAME.github.io`.

### Option B — Git on the command line

```bash
cd academic-website
git init
git add .
git commit -m "Initial academic website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

Then enable Pages as in step 3 above.

## Customizing the site

### Personal details

Open each HTML file and replace the placeholder text. Searching the whole project for
`Your Name`, `Your University`, and `your.name` covers most of it. The pages contain
HTML comments explaining each placeholder.

### MathSciNet, Genealogy, and ORCID

On `index.html`, replace the three placeholder URLs with your own profile pages:

- MathSciNet: `https://mathscinet.ams.org/mathscinet/author?authorId=YOUR_ID`
- Genealogy: `https://www.genealogy.math.ndsu.nodak.edu/id.php?id=YOUR_ID`
- ORCID: `https://orcid.org/0000-0001-2345-6789` (your real iD)

### Adding a publication

In `research.html`, copy this block inside the relevant section and edit the text:

```html
<article class="pub">
  <div class="pub-title">Title of the paper</div>
  <div class="pub-meta">with Coauthor. Journal Volume (Year), pages.</div>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/xxxx">arXiv</a>
    <a href="assets/papers/your-file.pdf">PDF</a>
    <a href="https://doi.org/xxxx">DOI</a>
  </div>
</article>
```

### Adding or replacing photos

1. Put your image file in `assets/images/` (portrait) or `assets/images/gallery/`
   (gallery). JPG, PNG, and WebP all work; keep filenames without spaces.
2. Update the `src` attribute of the corresponding `<img>` tag, and write a useful
   `alt` text.
3. To add a gallery entry, copy an existing `<figure>...</figure>` block in
   `miscellaneous.html` and point it at the new file.
4. Delete the `.svg` placeholder files once you no longer use them.

### Adding a whole new module (page)

1. Make a copy of `page-template.html` and rename it, e.g. `talks.html`.
2. Add your content inside `<main>`.
3. In **every** HTML file, add one list entry to the navigation block:

```html
<li><a href="talks.html">Talks</a></li>
```

Use `aria-current="page"` on the entry inside the new page itself.

### Changing the look

All colors and fonts are defined as variables at the top of `assets/css/style.css`.
Changing, for example, `--accent` re-themes every link on the site:

```css
--paper:  #fbf9f4;   /* page background */
--ink:    #24211b;   /* text */
--accent: #7c2d3a;   /* links */
```

### Writing mathematics

[MathJax](https://www.mathjax.org) is already loaded on About and Research. Write
inline math as `$G = SL(2,\mathbb{R})$` and display math as `$$...$$`. Remove the
MathJax `<script>` tags if you do not need them.

## Updating after deployment

The simplest workflow: open any file on github.com, click the pencil icon, edit, and
commit. GitHub Pages rebuilds automatically within a minute. Command-line users just
commit and push as usual.

## Optional: custom domain

Settings → Pages → Custom domain lets you use something like `math.example.com`.
GitHub provides HTTPS certificates automatically; see the
[GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
for the DNS records.
