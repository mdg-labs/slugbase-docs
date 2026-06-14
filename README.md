# SlugBase Documentation

Customer and operator documentation for [Documentation.AI](https://documentation.ai). **This repository is the source of truth** for publishable docs at [docs.slugbase.app](https://docs.slugbase.app).

The SlugBase application monorepo ([`mdg-labs/slugbase`](https://github.com/mdg-labs/slugbase)) holds engineering docs under `docs/internal/` only. Customer MDX is authored here.

## Authoring

- **Documentation.AI web editor** — screenshots upload to `blob-cdn.documentation.ai` automatically; commits land on this repo.
- **Code editor / Cursor** — edit `.mdx` files locally; push to `main` to publish.
- Open both repos via `slugbase.code-workspace` in the monorepo.

## Structure

```text
documentation.json    # Site nav, branding, scripts
selfhosted/           # Self-hosted guides + api-reference/
cloud/                # Cloud guides + api-reference/
assets/               # Optional local copies; live images use DA CDN URLs
scripts/              # Site scripts (e.g. umami-analytics.js)
```

Published URLs mirror paths: `selfhosted/quick-start.mdx` → `/selfhosted/quick-start`.

## MDX pages

Every page must start with YAML frontmatter:

```yaml
---
title: "Page title"
description: "SEO / preview description"
---
```

- Body headings start at `##` (H1 comes from frontmatter).
- Internal links: root-absolute — `[Quick start](/selfhosted/quick-start)`.
- Images: use Documentation.AI `<Image>` with **absolute CDN URLs** (web editor upload). Repo paths like `/assets/…` are **not** served on the live site.

## Product vocabulary (spec §3)

Use **workspace**, **folder**, **pinned**, **slug**, **forwarding** / **go** — not organization, collection, favorites, redirect.

## Engineering references

Spec, roadmap, and agent rules: `mdg-labs/slugbase` → `docs/internal/`.
