# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Read [context/coding-standard.md](context/coding-standard.md) before writing code.** It documents the stack and the coding, styling, and project-layout conventions this repo follows.

## Session logs

Only once the whole task the user asked for is finished, ask once whether they want a session log saved. Do not ask after intermediate steps or on every message. If they agree, follow the `/log` command in `.claude/commands/log.md` (the user can also run `/log [topic]` themselves). Don't read past logs unless the user asks.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build (also the main type-check, since there are no tests)
- `npm run lint` — ESLint via `next lint`

There is no test suite.

## Architecture

Single-page personal portfolio built with Next.js and deployed on Vercel.

**Content lives in Sanity.** Nearly all copy (hero text, skills, experiences, projects, reviews, social links) is stored in a Sanity dataset and edited in the embedded Studio at `/studio` (config in `sanity.config.ts`, schemas in `src/sanity/schemaTypes/`). Don't hardcode that copy in components. `src/app/page.tsx` calls `getHomePage()` (`src/lib/sanity/fetch.ts`, one GROQ query tagged `sanity`) and passes slices down as props. Publishing in Studio fires a Sanity webhook to `/api/revalidate`, which verifies the signature with `SANITY_REVALIDATE_SECRET` and calls `revalidateTag("sanity")`. Required env vars are listed in `.env.example`. `scripts/seed-sanity.ts` was the one-off migration from the old `data.json`. The resume PDF is served from `public/Sherif_Essam_Resume.pdf` (linked from `Navbar` and `MobileNav`). It is generated from `latex/Sherif-Essam-Resume.tex`: edit the `.tex`, run `npm run resume` (needs a local TeX Live with XeLaTeX), then commit both files. Don't edit the PDF directly.

**Page composition.** `src/app/page.tsx` stacks the sections from `src/components/sections/` (Hero, About, Experience, Projects, Reviews, Contact) between `Navbar`/`SideLinks` and `Footer`. `AnimatedSectionWrapper` fades sections in on scroll via `useInView`; its `id` is the anchor target for nav links. `useScroll` drives the hide-on-scroll-down navbar.

**Project images.** Project images are uploaded to Sanity and served from `cdn.sanity.io` (allowed in `next.config.ts` `images.remotePatterns`). `MainProject` builds the URL with `urlFor` (`src/lib/sanity/image.ts`) and uses the asset's built-in `lqip` as the blur placeholder.

**Version note.** `next-sanity` is pinned to v11 because v12+ requires Next 16.

`SecondaryProject.tsx` is currently unused.
