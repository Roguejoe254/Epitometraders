# Epitometraders — Base44 dev environment

## What this repo is
A monorepo (`apps/main` Next.js client + `packages/core` and `packages/bot-builder`).
NOTE: the committed repo is a partial migration — only a handful of files exist.
The Next.js client's original `layout.tsx` / `page.tsx` imported many modules and
the `@deriv-com/smartcharts-champion` package that are NOT present in the repo, so
the app could not build as committed.

## What was scaffolded to get a live preview
To make the client run in dev mode, the following were added (they did not exist):
- `apps/main/package.json`, `next.config.mjs`, `tsconfig.json`,
  `tailwind.config.ts`, `postcss.config.mjs`
- `apps/main/app/layout.tsx` and `apps/main/app/page.tsx` were rewritten to be
  self-contained (no missing imports) and render a landing page describing the
  four trading modules from the README.
- `docker-compose.base44.yml` runs `node:22` with the source bind-mounted and
  `next dev` (live reload) on port 3000.

The original trading UI source (LiveRiseFall, SmartCharts, hooks, i18n, branding
helpers, etc.) needs to be committed for the real app to render.

## Running
```
docker compose -f docker-compose.base44.yml up -d --build
```
The web service installs deps then starts `next dev` on 0.0.0.0:3000.
Live reload is enabled (polling, for the bind mount).

## Verifying
- `docker compose -f docker-compose.base44.yml ps` → web is `healthy`
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/`
  returns the app (external-host check the preview relies on).

## No external secrets required
This is a frontend-only preview; no external-service credentials are needed.
