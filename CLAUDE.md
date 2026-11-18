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

**Content is data-driven.** Nearly all copy (hero text, skills, experiences, projects, reviews, social links) lives in `src/content/data.json`. To update portfolio content, edit that JSON instead of the components. The resume PDF is served from `public/Sherif_Essam_Resume.pdf` (linked from `Navbar` and `MobileNav`).

**Page composition.** `src/app/page.tsx` stacks the sections from `src/components/sections/` (Hero, About, Experience, Projects, Reviews, Contact) between `Navbar`/`SideLinks` and `Footer`. `AnimatedSectionWrapper` fades sections in on scroll via `useInView`; its `id` is the anchor target for nav links. `useScroll` drives the hide-on-scroll-down navbar.

**Project images.** `MainProject` is an async Server Component that calls `getImagePlaceholder` (`src/lib/getImagePlaceholder.ts`) to read the image from `public/` and generate a blur placeholder with `plaiceholder`/sharp. That's why `plaiceholder` is listed in `serverExternalPackages` in `next.config.ts`, and why project image paths in `data.json` must exist under `public/`.

`SecondaryProject.tsx` is currently unused.
