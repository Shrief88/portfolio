# Coding Standard

The stack and the conventions this codebase already follows. Match them when adding or changing code.

## Stack

| Area | Tool |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript 5, `strict` mode |
| Styling | Tailwind CSS v4 (CSS-first config, via `@tailwindcss/postcss`), `tailwindcss-animate` |
| UI primitives | shadcn/ui (new-york style, neutral base color) on Radix UI (`dialog`, `slot`, `tabs`) |
| Class utilities | `clsx` + `tailwind-merge` (through `cn()`), `class-variance-authority` for variants |
| Animation | Framer Motion |
| Icons | `lucide-react` |
| Carousel | Swiper |
| CMS | Sanity (`next-sanity` v11, embedded Studio at `/studio`) |
| Images | `next/image` with Sanity CDN images and Sanity LQIP blur placeholders |
| Fonts | `next/font/google`: Inter (`--font-inter`) and Fira Code (`--font-fira-code`) |
| Linting | ESLint 9 flat config, extending `next/core-web-vitals` and `next/typescript` |
| Hosting | Vercel |

There is no test framework and no Prettier config.

## Project layout

- `src/app/`: App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components/sections/`: one component per page section.
- `src/components/`: shared, non-section components (wrappers, nav, project cards).
- `src/components/ui/`: shadcn-generated primitives. Add new ones with the shadcn CLI, which uses the aliases in `components.json`.
- `src/hooks/`: custom hooks, named `useXxx.ts`.
- `src/lib/`: utilities (`utils.ts` has `cn()`) and server helpers.
- `src/lib/sanity/`: Sanity client, GROQ queries, fetch helper, hand-written types, `urlFor`.
- `src/sanity/`: Studio schemas (`schemaTypes/`), env config, and the Studio client component.
- `public/`: static assets (`me.jpeg`, resume PDF). Project images live in Sanity, not here.

## Components

- Components are arrow functions with a default export at the bottom of the file:
  ```tsx
  const Experience = () => { ... };

  export default Experience;
  ```
  The exception is `src/components/ui/`, which keeps shadcn's style (`function` declarations, named exports, no semicolons). Don't restyle those files.
- File names are PascalCase and match the component name (`MainProject.tsx`). Hook files are camelCase (`useScroll.ts`).
- Props are a local `type Props = { ... }` declared above the component and destructured in the signature. Use `type`, not `interface`.
- Server Components are the default. Add `"use client"` as the first line only when the component needs state, effects, browser APIs, Framer Motion, or Swiper.
- Server-only data work goes in `src/lib/` behind `import "server-only"`, wrapped in React `cache()`, and is called from an async Server Component (see `getHomePage` in `src/lib/sanity/fetch.ts`).
- Hooks that read browser state must return a stable SSR-safe value until hydration (see `useBreakPoint`).

## Content and data

- Copy, links, skills, experiences, projects, and reviews are stored in Sanity, not hardcoded in JSX.
- Fetch once in `src/app/page.tsx` with `getHomePage()` and pass slices down as props. Client components can't call the server fetch, so they only receive props.
- Query result types are hand-written in `src/lib/sanity/types.ts`. Update them together with `src/lib/sanity/queries.ts` and the schemas.
- Ordered lists (experiences, projects, reviews) are separate documents sorted by their `order` field in the GROQ query.

## Imports

- Order: third-party packages first, then a blank line, then local imports.
- Use the `@/` alias (`@/lib/utils`, `@/hooks/useScroll`, `@/lib/sanity/types`) for anything outside the current folder tree. Relative imports are used for sibling and parent components (`../MaxWidthWrapper`, `./ui/button`).

## Formatting

- Double quotes, semicolons, 2-space indentation, trailing commas in multi-line literals (outside `ui/`).
- Use typographic characters in copy (`’`, `&ldquo;`/`&rdquo;`) rather than straight quotes.

## Styling

- Use Tailwind utility classes inline, mobile-first, with `md:` and `lg:` breakpoints.
- Combine conditional classes with `cn()` from `@/lib/utils`, never string concatenation.
- Use theme tokens (`bg-background`, `text-foreground`, `text-primary-foreground`, `text-muted-foreground`, `bg-secondary`, `bg-separator`) rather than raw colors. Tokens are defined as CSS variables in `globals.css` and exposed through `@theme inline`.
- There is no `tailwind.config`. Theme, custom animations (`animate-move-up`, `animate-move-down`, `animate-move-diagonal-up`, `animate-move-diagonal-down`), and keyframes live in the `@theme` blocks in `globals.css`.
- Reusable multi-element styles go in `@layer components` in `globals.css` (`.section-heading`, `.underline-animation`, `.reviews-swiper`). Base element styles go in `@layer base`.
- Fonts: `font-inter` for body text and headings, `font-fira` for monospace accents (nav items, dates, labels).
- Variants on shared primitives use `cva` (see `ui/badge.tsx`, `ui/button.tsx`).

## Sections and animation

- Each section is wrapped as `<MaxWidthWrapper><AnimatedSectionWrapper id="...">`. The `id` is the lowercase anchor used by nav links (`#experience`).
- Section titles use `<h1 className="section-heading" data-section-number="0N.">`. Numbers are hardcoded, so renumber when sections are reordered.
- Entrance animations use Framer Motion with `initial`/`animate`/`transition` props, typically fading in with a small `x` or `y` offset over 0.3–0.5s.

## Links and accessibility

- External links use `target="_blank" rel="noopener noreferrer"`.
- `next/image` always gets `alt`, explicit `width`/`height` (from the asset metadata), and the asset `lqip` as `blurDataURL` for project images.
