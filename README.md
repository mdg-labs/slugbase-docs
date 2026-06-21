# SlugBase Documentation

Customer and operator documentation for [Documentation.AI](https://documentation.ai). **This repository is the source of truth** for publishable docs at [docs.slugbase.app](https://docs.slugbase.app).

The SlugBase application monorepo ([`mdg-labs/slugbase`](https://github.com/mdg-labs/slugbase)) holds engineering docs under `docs/internal/` only. Customer MDX is authored here.

## Authoring

- **Documentation.AI web editor** — screenshots upload to `blob-cdn.documentation.ai` automatically; commits land on this repo.
- **Code editor / Cursor** — edit `.mdx` files locally; push to `main` to publish.
- Open both repos via **`slugbase/slugbase.code-workspace`** in the monorepo checkout (workspace folders: `slugbase/` + `slugbase-docs/`).

Engineering spec and agent skills live in the sibling **`slugbase`** monorepo (`slugbase/docs/internal/`, `slugbase/.cursor/skills/`). MDX format rules live here: **`.cursor/rules/documentation.ai.mdc`** (applies when editing `**/*.mdx` and `documentation.json`).

## Structure

```text
documentation.json    # Site nav, branding, theme colors, custom CSS
styles/               # Custom stylesheets (registered in documentation.json css)
ce/           # Community Edition guides + api-reference/
cloud/                # Cloud guides + api-reference/
assets/               # Optional local copies; live images use DA CDN URLs
scripts/              # Site scripts (e.g. umami-analytics.js)
```

Site-wide SlugBase styling lives in `styles/slugbase.css` (IBM Plex type, periwinkle accent, dark-first surfaces). Override DA layout via `dai-*` class names and `--brand` / `--sidebar-bg` CSS variables — see [Custom CSS](https://documentation.ai/docs/customize/custom-css).

Published URLs mirror paths: `ce/quick-start.mdx` → `/ce/quick-start`.

## MDX pages

Every page must start with YAML frontmatter:

```yaml
---
title: "Page title"
description: "SEO / preview description"
---
```

- Body headings start at `##` (H1 comes from frontmatter).
- Internal links: root-absolute — `[Quick start](/ce/quick-start)`.
- Images: use Documentation.AI `<Image>` with **absolute CDN URLs** (web editor upload). Repo paths like `/assets/…` are **not** served on the live site.

## Product vocabulary (spec §3)

Use **workspace**, **folder**, **pinned**, **slug**, **forwarding** / **go** — not organization, collection, favorites, redirect.

**Editions:** **SlugBase Cloud** (managed service at [cloud.slugbase.app](https://cloud.slugbase.app)) and **Community Edition (CE)** (operator-run combined image). Doc paths are `/cloud/…` and `/ce/…`. CE operators set `SLUGBASE_EDITION=ce`; Cloud customers do not configure edition env vars.

## Engineering references

Spec, roadmap, and agent skills: **`slugbase`** monorepo → `slugbase/docs/internal/`, `slugbase/.cursor/skills/`.
