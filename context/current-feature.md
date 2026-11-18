# Migrate portfolio content from data.json to Sanity

## Context
All site content lives in `src/content/data.json`, and seven components import it directly. Changing copy currently means a commit and a redeploy. The goal is to edit content in Sanity with an embedded Studio at `/studio` and have it go live on publish through webhook revalidation. Project images move to the Sanity CDN with Sanity's built-in LQIP, which replaces `plaiceholder`/sharp.

Decisions made: embedded Studio, images uploaded to Sanity, on-demand webhook revalidation.

Out of scope: hardcoded About paragraphs, `me.jpeg`, the resume PDF (it stays LaTeX-in-git).

## 1. Dependencies and environment
- Add `next-sanity`, `sanity`, `@sanity/image-url`, `@sanity/vision`, `styled-components`.
- Remove `plaiceholder` and delete `src/lib/getImagePlaceholder.ts`. Remove `plaiceholder` from `serverExternalPackages` in `next.config.ts`.
- In `next.config.ts`, add `images.remotePatterns` for `cdn.sanity.io`.
- Add `.env.example` with `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_WRITE_TOKEN` (used only by the seed script) and `SANITY_REVALIDATE_SECRET`. Set the same vars in Vercel.
- The user creates the Sanity project with `npx sanity init` or on sanity.io/manage, and adds CORS origins for localhost:3000 and the production domain.

## 2. Studio and schemas (`src/sanity/`)
- `sanity.config.ts` at the repo root uses `structureTool` with singletons pinned (`siteSettings`) and `visionTool`.
- `src/app/studio/[[...tool]]/page.tsx` renders `NextStudio` with `dynamic = "force-static"` and re-exports `metadata`/`viewport` from `next-sanity/studio`.
- Schemas in `src/sanity/schemaTypes/`:
  - `siteSettings` (singleton):
    - `hero { name, title, description }`
    - `skills: string[]`
    - `links { linkedin, github, email }`
  - `experience`:
    - `company`, `title`, `companyUrl?`, `startDate`, `endDate`, `description: string[]`
    - `order: number`, used for sorting
  - `project`:
    - `title`, `description`, `skills: string[]`, `liveUrl?`
    - `image` (with `hotspot: true`, `alt`)
    - `order`
  - `review`: `name`, `title`, `review` (text), `link?`, `order`
- The ordered arrays from `Object.entries` become documents sorted by `order`. This drops the "object key is the display title" convention.

## 3. Data layer (`src/lib/sanity/`)
- `client.ts`: `createClient` with `useCdn: true` and `apiVersion` pinned to a date.
- `queries.ts`: GROQ queries.
  - Use one `homePageQuery` that returns `{ settings, experiences, projects, reviews }`.
  - Project images should project `image.asset->{ url, metadata { lqip, dimensions } }`.
- `fetch.ts`: `import "server-only"`, then `getHomePage = cache(() => client.fetch(homePageQuery, {}, { next: { tags: ["sanity"] } }))`. This follows the existing `server-only` + `cache()` pattern from `getImagePlaceholder`.
- `types.ts`: hand-written `type`s for the query result (no Sanity TypeGen, to keep it simple).
- `image.ts`: an `urlFor` helper based on `@sanity/image-url`.

## 4. Component changes
- `src/app/page.tsx`:
  - Make it `async`.
  - Call `getHomePage()` once.
  - Pass slices as props to each section, plus `links` to `SideLinks`/`Footer`. Client components can't call the server fetch.
- Sections get a `type Props` and stop importing `data.json`:
  - `Hero.tsx` (client): `hero` prop.
  - `About.tsx`: `skills` prop.
  - `Experience.tsx` / `TabContent.tsx`: `experiences: Experience[]` (array instead of `Object.entries`).
  - `Projects.tsx`: `projects` prop.
  - `Reviews.tsx` (client): `reviews` prop. Remove the `as Review[]` cast.
  - `Contact.tsx`: whatever slice it reads (likely the email link).
- `SocialMedia.tsx`: takes a `links` prop and builds `SocialLinks` inside the component. `SideLinks` (client) and `Footer` pass it through.
- `MainProject.tsx`:
  - Becomes non-async and drops the placeholder call.
  - Uses `src={urlFor(image).width(1200).url()}`, `width`/`height` from `metadata.dimensions`, `blurDataURL={metadata.lqip}`, and `alt` from the image.
  - Renders the Live link from `liveUrl` instead of iterating `links`.

## 5. Revalidation
- `src/app/api/revalidate/route.ts`:
  - Use `parseBody` from `next-sanity/webhook` with `SANITY_REVALIDATE_SECRET`.
  - On a valid signature, call `revalidateTag("sanity")`. Return 401 on a bad signature.
- The user adds a GROQ webhook in Sanity manage that fires on create/update/delete and POSTs to `https://<domain>/api/revalidate` with the secret.

## 6. Seed migration
- Write a one-off script `scripts/seed-sanity.ts`, run with `npx tsx` and env from `.env.local`. It:
  - Reads `data.json`.
  - Uploads each `public/images/*.webp` with `client.assets.upload`.
  - Creates documents with `createOrReplace` and deterministic `_id`s so it can be re-run, assigning `order` from the JSON order.
- After seeding and verifying, delete `src/content/data.json`. Delete the project webps from `public/images/` too (keep `me.jpeg` and any others still referenced).

## 7. Docs
- Update `CLAUDE.md` (content source, Studio, revalidation, removal of the image-placeholder section).
- Update `context/coding-standard.md` ("Content and data", the Images row, project layout) to describe the Sanity pattern: fetch in `page.tsx`, pass props down.

## Verification
1. `npm run build` passes (this is the type-check).
2. `npm run lint` passes.
3. `npm run dev`:
   - `/` renders identically to before: all sections, the projects show blur-up images, the review carousel works.
   - `/studio` loads and lists the seeded documents.
4. Edit a review in Studio and publish. Against the production deploy, confirm the webhook returns 200 and the change appears without redeploying. Locally, test with `curl` and a signed payload, or just reload, since dev doesn't cache.
5. POST to `/api/revalidate` with a bad signature and confirm it returns 401.
