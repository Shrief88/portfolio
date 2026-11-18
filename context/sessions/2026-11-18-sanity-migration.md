# Migrate portfolio content to Sanity

**Date:** 2026-11-18

## Goal
Implement the plan in `context/current-feature.md`: move all site content from `src/content/data.json` to Sanity, with an embedded Studio at `/studio` and webhook revalidation.

## What changed
- [package.json](../../package.json) / [package-lock.json](../../package-lock.json): added `next-sanity@11`, `sanity@4`, `@sanity/client`, `@sanity/image-url`, `@sanity/vision`, `styled-components`, `tsx`; removed `plaiceholder`.
- [next.config.ts](../../next.config.ts): added `cdn.sanity.io` remote pattern, removed `serverExternalPackages`.
- [.env.example](../../.env.example) and [.gitignore](../../.gitignore): env template, with an exception so it isn't ignored.
- [sanity.config.ts](../../sanity.config.ts), [src/sanity/](../../src/sanity/): config, env, schemas (`siteSettings`, `experience`, `project`, `review`) and the `Studio.tsx` client wrapper.
- [src/app/studio/[[...tool]]/page.tsx](../../src/app/studio/[[...tool]]/page.tsx): embedded Studio route.
- [src/lib/sanity/](../../src/lib/sanity/): client, GROQ query, `getHomePage`, types, `urlFor`.
- [src/app/api/revalidate/route.ts](../../src/app/api/revalidate/route.ts): signed webhook that calls `revalidateTag("sanity")`, 401 on a bad signature.
- [scripts/seed-sanity.ts](../../scripts/seed-sanity.ts): re-runnable seed from `data.json` and `public/images`.
- Components (`page.tsx`, Hero, About, Experience, TabContent, Projects, MainProject, Reviews, Contact, SocialMedia, SideLinks, Footer): now take props instead of importing `data.json`.
- Deleted `src/lib/getImagePlaceholder.ts`.
- [CLAUDE.md](../../CLAUDE.md), [context/coding-standard.md](../../context/coding-standard.md): updated for the Sanity pattern.

## Decisions
- Pinned `next-sanity` to v11 (and `sanity` v4) because the latest requires Next 16 and the repo is on 15.2.
- Wrapped `NextStudio` in a `"use client"` component, because importing the config in a server page broke the build (`createContext is not a function`).
- Kept `data.json` and the project webps for now, since the seed script needs them and the plan says to delete them only after verification.

## Follow-ups
- Create the Sanity project, set CORS origins, fill `.env.local`, and set the env vars in Vercel.
- Run the seed script, then verify `npm run build`, `/`, and `/studio` (build was only checked with a fake project ID, so `/` failed as expected).
- Add the Sanity webhook for `/api/revalidate` and test the 200 and 401 cases.
- After verifying, delete `src/content/data.json` and the project webps (keep `me.jpeg`), and optionally the seed script.
