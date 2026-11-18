# jacoblehoux.com

Personal portfolio for Jacob Lehoux. Its job is to get interviews for **senior software engineer** roles.

## Stack

- Astro 5, static output, no UI framework. Plain CSS in `src/styles/global.css` plus scoped `<style>` blocks.
- Fonts are self-hosted through `@fontsource` (Fraunces for headings, Inter for body, JetBrains Mono for labels).
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`. The custom domain lives in `public/CNAME`; never delete it.

## Commands

- `npm run dev`: local dev server at http://localhost:4321
- `npm run build`: production build into `dist/`
- `npm run check:todo`: fails if a `TODO(jacob)` placeholder would be published (CI runs this before deploying)

## Where things live

- `src/data/site.ts`: name, contact links, experience, skills
- `src/content/work/*.md`: case studies (schema in `src/content.config.ts`). `order` sets the card order, and `draft: true` hides one.
- `scripts/check-todos.mjs`: the placeholder check
- `src/pages/index.astro`: home page. `src/pages/work/[...slug].astro`: case-study page.
- `public/resume.pdf`: the resume served at `/resume.pdf`

## Positioning and content rules

- Write for a senior hiring manager: ownership, system design, tradeoffs and measurable impact come before lists of technologies.
- Every case study follows: problem → what I built → key decisions and tradeoffs → results → what I'd do differently.
- **Wayfair work is confidential.** No internal product, service or team names, no code, no internal screenshots, no repo links. Round every number. Describe patterns, not proprietary implementation. Set `confidential: true` on those entries.
- Ship in small pieces. A case study that isn't finished gets `status: in-progress`: its card shows an "In progress" badge, and its page shows only the summary, facts and metrics with a "write-up in progress" note. The body, repo/demo links and any `TODO(jacob)` notes are not rendered. Switch it to published (remove the line) once the body is done.
- Everything that IS rendered must be true and finished. `TODO(jacob)` anywhere outside an in-progress case study blocks the deploy.
- Never put a phone number on the site.

## Design

- Calm and editorial: warm paper background, deep teal accent, generous whitespace, serif headings. Light and dark themes both have to look right.
- Mobile first. Recruiters often open the link on a phone.
- Keep it fast: no client-side framework, minimal JS (only the theme toggle).

## Backlog

- Public companion repos: an event-driven pipeline demo (Kafka/Redpanda, idempotency, DLQ, load test) and a scheduling and routing engine. Add them as case studies once they ship.
- Writing section, once the first post exists.
- Social preview (OG) image and privacy-friendly analytics.
