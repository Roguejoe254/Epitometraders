# Epitometraders — Base44 dev environment

## Architecture
Five docker compose services behind an nginx reverse proxy on port 3000:

| Service | App | Port | Stack | Route |
|---------|-----|------|-------|-------|
| nginx | Reverse proxy + landing page | 3000→80 | nginx | `/` |
| rise-fall | Rise/Fall trading | 3001 | Next.js 16 + React 19 | `/rise-fall` |
| accumulators | Accumulators trading | 3002 | Next.js 16 + React 19 | `/accumulators` |
| digits | Digits trading | 3003 | Next.js 16 + React 19 | `/digits` |
| bot-builder | Bot Builder | 4003 | rsbuild + MobX + Blockly | `/bot-builder` |

Each app service uses `node:22`, bind-mounts its source from `apps/<name>`, and runs
a live-reload dev server. The three Next.js apps have `basePath` set in their
`next.config.js` so nginx can route by URL prefix. Bot Builder uses rsbuild with
`assetPrefix: '/bot-builder/'`.

## Source repos (cloned into apps/)
- `apps/rise-fall` — from github.com/Roguejoe254/epitome-traders
- `apps/accumulators` — from github.com/Roguejoe254/accumulators
- `apps/digits` — from github.com/Roguejoe254/epitome-traders-digits
- `apps/bot-builder` — from github.com/Roguejoe254/epitome-traders-bot-builder

## Running
```
docker compose -f docker-compose.base44.yml up -d --build
```

## Verifying
- `docker compose -f docker-compose.base44.yml ps` → all services healthy
- `curl -sf http://localhost:3000/` → landing page (200)
- `curl -sL http://localhost:3000/rise-fall` → Rise/Fall app (200)
- `curl -sL http://localhost:3000/accumulators` → Accumulators app (200)
- `curl -sL http://localhost:3000/digits` → Digits app (200)
- `curl -sL http://localhost:3000/bot-builder` → Bot Builder app (200)
- External host: `curl -sf -H "Host: external.example.com" http://localhost:3000/` → 200

## Deriv credentials
Demo placeholder values are in `.env.base44-defaults` (APP_ID=1089, etc.).
Real credentials should be set via the Base44 secrets dashboard for:
- `NEXT_PUBLIC_DERIV_APP_ID` — Deriv application ID
- `NEXT_PUBLIC_DERIV_REDIRECT_URI` — OAuth redirect URI

These are delivered to `/run/base44/app.env` (last env_file entry, overrides defaults).
The apps render UI and charts with placeholder values; OAuth login needs real credentials.

## Notes
- The `apps/main` directory contains the original partial monorepo + a scaffolded
  Next.js landing page from the initial setup — no longer used (nginx serves the landing page).
- SmartCharts assets are copied via postinstall script (`scripts/copy-smartcharts-assets.js`).
- Next.js apps use `next/font/google` (IBM Plex Sans) — requires network access at compile time.
