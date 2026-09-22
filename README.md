# acostajonathan.github.io
# Portfolio Template

A simple 3-page portfolio site (Home / Resume / Projects) built with plain HTML, CSS and a touch of JS — no build tools, no frameworks. Ready to host on GitHub Pages.

**Structure** (tabs, centered title, LinkedIn link top right) is based on [davisryan.tech](https://www.davisryan.tech/).
**Style** (hero intro line + About Me section on the home page, and a dedicated Resume tab with an experience/education/skills layout) is based on [jamesbryant.engineer](https://jamesbryant.engineer/).

## Files

```
index.html         Home — hero intro + About Me
resume.html         Resume — experience, education, skills
projects.html        Projects — grid of project cards
css/style.css        All styling (colors/fonts are CSS variables at the top)
js/script.js         Mobile nav toggle
images/            Placeholder images — swap these for your own
files/             Put your resume.pdf here
```

## How to customize

1. **Search each HTML file for `<!-- EDIT: ... -->` comments** — these mark every spot with placeholder text (your name, role, city, bio, jobs, schools, skills, projects, links).
2. **Replace the images** in `images/` with your own photos and project screenshots, keeping the same file names (or update the `src` attributes if you rename them).
3. **Add your resume PDF** to `files/resume.pdf` (used by the "Download PDF" button on the Resume page).
4. **Update every LinkedIn URL** (`https://www.linkedin.com/in/your-handle/`) — it appears in the nav, the hero, and the footer of each page.
5. **Add more projects** by duplicating a `<article class="project-card">` block in `projects.html`.
6. **Add more jobs/degrees** by duplicating an `<div class="entry">` block in `resume.html`.
7. Optional: add more icons (GitHub, email, X/Twitter, etc.) next to LinkedIn by duplicating the `<a>` block inside `.nav-social` in each page's nav.

### Colors & fonts

Everything is controlled from the `:root` block at the top of `css/style.css` — change `--accent`, `--navy-900`, etc. to restyle the whole site at once. Fonts are loaded from Google Fonts (Space Grotesk for headings, IBM Plex Sans for body text) via a `<link>` tag in each page's `<head>`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `your-username.github.io` for a root domain, or any name for a project site).
2. Push these files to the repository's default branch:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch," pick the `main` branch and the `/ (root)` folder, then **Save**.
5. Your site will publish at `https://your-username.github.io/` (or `https://your-username.github.io/your-repo/` for a project repo) within a minute or two.

If you used a custom domain (like the two example sites), add a `CNAME` file to the repo root containing just your domain name, and point your domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
