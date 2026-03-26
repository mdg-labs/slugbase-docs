# SlugBase documentation

Customer-facing documentation for SlugBase, published with [Documentation.AI](https://documentation.ai/) from this Git repository.

## Layout

- [`docs/documentation.json`](docs/documentation.json) — site name, theme colors, navbar, and **navigation** (`products` → **Self-hosted** / **Cloud**, each with **Guides** and **API Reference** tabs).
- [`docs/selfhosted/`](docs/selfhosted/) — self-hosted–only guides and API pages (`.mdx`).
- [`docs/cloud/`](docs/cloud/) — cloud/SaaS guides and API pages (`.mdx`).
- [`docs/assets/`](docs/assets/) — images and static assets; reference from MDX as `/assets/…` (root-absolute from the docs site).

## Authoring

- Use **MDX** with YAML frontmatter: `title` and `description` on every page.
- Use **lowercase, hyphenated** filenames (e.g. `api-reference-auth.mdx`).
- Use **root-absolute** internal links, e.g. `[Setup](/selfhosted/setup)`, `[Overview](/cloud/overview)`.
- After adding, renaming, or removing pages, update **`documentation.json`** so `path` values match files (paths omit the `.mdx` extension).

## Publishing

1. In the Documentation.AI dashboard, connect this repo (GitHub/GitLab) and choose the deployment branch (e.g. `main`).
2. Pushes to that branch trigger builds and deploys; pull requests get preview builds.
3. Configure **custom domain** (e.g. `docs.slugbase.app`) and optional **logo** URLs in the dashboard if not set in `documentation.json` (logo fields in config expect full `https://` URIs per schema).

There is **no** local `npm` build in this repo; Documentation.AI is the publisher.

## Documentation.AI references

- [Code editor / Git workflow](https://documentation.ai/docs/write-and-publish/code-editor)
- [Site configuration & `documentation.json` schema](https://documentation.ai/docs/customize/site-configuration)
- [JSON schema (machine-readable)](https://dashboard.documentation.ai/documentation.json)
