## Ora Browser Website

Website for the Ora Browser, built with Next.js App Router, Tailwind v4, and Turbopack. Includes waitlist signup with email confirmation, SEO metadata/JSON‑LD, and analytics.

### Tech stack
- Framework: Next.js 15 (App Router, React 19)
- Styling: Tailwind CSS v4 (inline theme tokens)
- Animations: motion/react
- Email: Resend + react-email
- Data: Upstash Redis (waitlist set + rate limiting)
- Theme: next-themes (class strategy, default dark)
- Analytics: @vercel/analytics

## Quick start

```bash
# install deps
pnpm install

# run dev server (Turbopack)
pnpm dev

# typecheck/lint/format
pnpm lint
pnpm format
```

Visit `http://localhost:3000`.

## Environment variables
Create a `.env.local` in the project root (do not commit). Required keys:

```env
follow the env.example
```

Notes:
- Email sending only occurs when a user is newly added to the waitlist.
- If any of the above are missing in development, features depending on them may fail.

## Scripts

```bash
pnpm dev     # next dev --turbopack
pnpm build   # next build --turbopack
pnpm start   # next start
pnpm lint    # biome check
pnpm format  # biome format --write
```

## Project structure

```
src/
  app/                # App Router entrypoints
    layout.tsx        # global layout, theme provider, analytics
    page.tsx          # home page (Header, Hero, Footer)
  components/         # UI + feature components
    emails/           # react-email templates
    ui/               # primitives (button, input, shiny-button, etc.)
  actions/            # server actions (waitlist, github)
  lib/                # integrations (redis, resend, seo helpers)
  data/               # static content (presentation, social links)
```


## Deployment (Vercel)
1. Push to GitHub.
2. Import the repo in Vercel.
3. Add environment variables from the “Environment variables” section for each environment.
4. Build and deploy. Ensure the domain used in `RESEND_FROM` is verified in Resend.

## Contributing
- Keep PRs small and focused.
- Follow the existing patterns and avoid introducing duplicate logic.
- Run `pnpm lint` and `pnpm format` before committing.
