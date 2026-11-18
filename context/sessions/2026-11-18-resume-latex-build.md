# Build the resume PDF from LaTeX

**Date:** 2026-11-18

## Goal
Make `latex/Sherif-Essam-Resume.tex` the source of the resume PDF the site serves, so editing the LaTeX updates what's live.

## What changed
- [package.json](../../package.json): added `npm run resume`, which builds the `.tex` with `latexmk -xelatex` and copies the PDF to `public/Sherif_Essam_Resume.pdf`.
- [latex/.gitignore](../../latex/.gitignore): new; ignores LaTeX build output (aux, log, xdv, local PDF, etc.).
- [public/Sherif_Essam_Resume.pdf](../../public/Sherif_Essam_Resume.pdf): rebuilt from the current `.tex`.
- [CLAUDE.md](../../CLAUDE.md): documented the edit → `npm run resume` → commit both files workflow.
- `.github/workflows/resume.yml`: created, then deleted (see Decisions).

## Decisions
- Build locally instead of in a GitHub Action. The Action needed Arial and a current TeX Live on the runner and a bot commit back to `main`. That meant two Vercel deploys per edit and a `git pull` before each new edit. A local TeX Live already builds the file in seconds and lets you check the PDF before it goes live.
- Keep serving the PDF from `public/`, so the `Navbar`/`MobileNav` links stay the same.

## Follow-ups
- Nothing is committed yet: `package.json`, `CLAUDE.md`, the rebuilt PDF and `latex/` are uncommitted.
- Open the rebuilt PDF once to confirm it's the version you want live.
