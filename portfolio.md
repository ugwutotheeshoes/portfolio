# Portfolio

Emmanuel Ugwu's personal portfolio: a single page with an intro, projects, articles, skills, experience and contact links.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- `motion` (formerly Framer Motion) for animations, `react-intersection-observer` for section tracking
- `react-vertical-timeline-component` for the experience timeline, `react-hot-toast`, `react-icons`
- Node 24 (`engines` in `package.json`)

## Commands

- `npm run dev`: dev server
- `npm run build`: production build
- `npm start`: serve the production build
- `npm run lint`: ESLint (`eslint-config-next`)

## Layout

- `app/`: `layout.tsx` (metadata, header, theme and active-section providers), `page.tsx` (the sections in order), `globals.css`
- `components/`: one file per section (`intro`, `projects` + `ProjectCard`, `Article` + `ArticleCard`, `skills`, `experience`, `contact`) plus `header`, `section-heading`, `section-divider`, `theme-switch`
- `context/`: `active-section-context.tsx` (which section the header highlights), `theme-context.tsx` (light/dark, saved in localStorage as `theme`)
- `utils/data.ts`: all the content (nav links, experience, projects, articles, skills); `utils/assets/` holds the project and article images
- `utils/hooks.ts`: `useSectionInView`, which marks a section active as it scrolls into view
- `public/Resume.pdf`: the downloadable resume

## Page sections

Intro → Projects → Articles → Skills → Experience → Contact (`app/page.tsx`).

## Editing content

- Everything shown on the page comes from `utils/data.ts`; components only lay it out.
- A project is `{ title, description, tags, url?, imageUrl? }`. Import its image from `utils/assets/` at the top of `data.ts` and pass the import as `imageUrl`.
- Articles use the same shape, in `articlesData`.
- Remote images are only allowed from `images.unsplash.com` (`next.config.js`), which also allows image quality 75 and 95.
