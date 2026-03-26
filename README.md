# SlugBase documentation

Customer-facing documentation for SlugBase, published with [Documentation.AI](https://documentation.ai/) from this Git repository.

## Layout (Documentation.AI code layout)

This matches how [Documentation.AI describes](https://documentation.ai/docs/write-and-publish/code-editor) a typical project: **`documentation.json` at the repository root** next to your content folders, with each navigation **`path`** equal to the **relative path to the `.mdx` file without the extension** (see [site configuration](https://documentation.ai/docs/customize/site-configuration)).

```
slugbase-docs/
├── documentation.json    # Site name, theme, navbar, navigation (products → tabs → groups → pages)
├── selfhosted/           # Self-hosted guides and API pages (.mdx)
├── cloud/                # Cloud / SaaS guides and API pages (.mdx)
└── assets/               # Images and static files; use /assets/… in MDX links
```

Published URLs stay **`/selfhosted/...`** and **`/cloud/...`**; internal links in MDX should stay root-absolute (e.g. `[Setup](/selfhosted/setup)`, images `![…](/assets/…)`).

## Authoring

- **MDX** with YAML frontmatter: `title` and `description` on every page.
- **Lowercase, hyphenated** filenames (e.g. `api-reference-auth.mdx`).
- After add/rename/remove pages, update **`documentation.json`** so each `path` matches the file on disk (no `.mdx` suffix).

## Publishing

1. In the Documentation.AI dashboard, connect this repo and set the deploy branch (e.g. `main`). Use the **repository root** as the project root so `documentation.json` is found at the top level (or the equivalent setting in your project settings if the UI offers a subdirectory).
2. Pushes trigger builds; PRs get previews.
3. **Logo / favicon** fields in `documentation.json` must be full `https://…` URIs per the [JSON schema](https://dashboard.documentation.ai/documentation.json), or configure them in the dashboard.

## References

- [Code editor / Git workflow](https://documentation.ai/docs/write-and-publish/code-editor)
- [Site configuration](https://documentation.ai/docs/customize/site-configuration)
- [Organize / navigation model](https://documentation.ai/docs/organize/overview)
- [Schema: `documentation.json`](https://dashboard.documentation.ai/documentation.json)
