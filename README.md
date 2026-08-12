# rahuldaga.github.io — Next.js Portfolio

Static-export Next.js rebuild of the original HTML portfolio, with a dark/light theme toggle and a Markdown-backed blog.

## Local development

```
npm install
npm run dev
```

## Production build (static export)

```
npm run build
```

Output goes to `out/`. This is a fully static site — no Node server required at runtime.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages automatically on every push to `main`.

One-time setup on GitHub:

1. Push this project to `rahul02-dat/rahuldaga.github.io`, replacing the old `index.html`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` — the workflow builds and deploys automatically. The site will be live at `https://rahul02-dat.github.io/`.

## Adding a blog post

Add a new Markdown file to `src/content/`, following the frontmatter format used in the existing posts (`title`, `date`, `excerpt`, `tags`). It'll be picked up automatically on the next build — no code changes needed.

## Editing content

All portfolio content (bio, skills, projects, experience, publications, certifications) lives in `src/data/portfolio.ts`. Edit that file rather than the components to update text.

## Notes

- `next.config.ts` uses `output: "export"`, which is required for GitHub Pages (no SSR/server functions are available there). Any feature requiring a live server (API routes, ISR, server actions) will not work under this setup.
- Theme preference is stored in `localStorage` and defaults to dark on first visit.
