# Portfolio-Website

A modern personal portfolio built with React + Vite. This repository contains the source for Muhammad Suffian Tafoor's portfolio site.

Live demo
- Visit the deployed site at: https://muhammadsuffian.github.io/Portfolio-Website/

Quick start (development)
1. Install dependencies:

```powershell
Set-Location 'c:\Users\HP\Documents\GitHub\Portfolio-Website'
npm ci
```

2. Run the dev server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

4. Preview the production build locally:

```powershell
npm run preview
```

Deployment
- This repository contains a GitHub Actions workflow at `.github/workflows/gh-pages.yml` which builds the site and deploys the `dist` artifact to GitHub Pages on pushes to `main`.
- Vite's `base` has been set to `/Portfolio-Website/` in `vite.config.ts` so asset paths resolve correctly on GitHub Pages. If you change the Pages target (e.g., to a user/org site like `username.github.io`), update `base` to `'/'`.

What you'll find here
- `src` / top-level TSX files: React components for Hero, Navbar, Experience, Projects, Skills, Awards & Hackathons, Contact, etc.
- `constants.ts` contains the content used by the components (profile, education, certifications, projects).
- `vite.config.ts` contains Vite configuration (dev server, aliases, environment defines).

Notes
- The GitHub Actions Pages workflow uses the official `actions/configure-pages`, `upload-pages-artifact`, and `deploy-pages` steps — no repository secrets required.
- Certificate share links were added for Coursera certificates and are surfaced in the Certifications section.

Contributing
- Open an issue or create a PR for improvements. Keep changes small and focused.

Contact
- Email: muhammad.suffian.5959@gmail.com
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/17OeqpW7cgWyK9H0ODTpytWRKKw72r-oQ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
