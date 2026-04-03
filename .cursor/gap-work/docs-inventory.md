# SlugBase docs inventory (hand-authored MDX)

API reference: OpenAPI via `documentation.json` → `api-reference/openapi.*.yaml` (not listed per endpoint).

## `selfhosted/**/*.mdx` (27 pages)

| Path | Topic | Tag |
|------|--------|-----|
| introduction | Product overview, vs Cloud, terminology, nav | self-hosted |
| quick-start | Dev + prod paths | self-hosted |
| installation | Monorepo install, build, start | self-hosted |
| docker | Single-container image | self-hosted |
| docker-compose | Compose example, volumes, Postgres option | self-hosted |
| configuration | Env vars | self-hosted |
| reverse-proxy | TLS, trust proxy, BASE_URL | self-hosted |
| first-run-setup | Initial Setup wizard, first admin | self-hosted |
| dashboard | Overview `/` | shared concept |
| bookmarks | Bookmarks + command palette | shared concept |
| folders | Folders | shared concept |
| tags | Tags | shared concept |
| import-export | Import/export | shared concept |
| slugs-overview | Slugs, `/go/` | shared concept |
| go-preferences | Remembered choices | shared concept |
| browser-setup | Search engine shortcut | shared concept |
| profile-and-preferences | Profile, prefs | shared concept |
| api-tokens | API tokens | shared concept |
| delete-account | Delete account | self-hosted |
| admin-overview | Admin entry, vs cloud gates | self-hosted |
| admin-members | Users | self-hosted |
| admin-teams | Teams | self-hosted |
| admin-oidc | OIDC | self-hosted |
| admin-smtp | SMTP | self-hosted |
| admin-ai | AI admin | self-hosted |
| faq | FAQ | self-hosted |
| troubleshooting | Runbook-style fixes | self-hosted |

## `cloud/**/*.mdx` (10 pages)

| Path | Topic | Tag |
|------|--------|-----|
| introduction | Cloud product + links to self-hosted guides | cloud |
| sign-up-and-login | Signup, verify, login, reset | cloud |
| organizations | Orgs, roles, invites, multi-org session | cloud |
| profile-and-cloud-settings | Cloud profile deltas | cloud |
| plans-and-limits | Plans table | cloud |
| billing | Stripe, portal, seats | cloud |
| collaboration | Team sharing | cloud |
| privacy-and-cookies | Legal links, cookies | cloud |
| support | Contact, expectations | cloud |
| faq | Cloud FAQ | cloud |

## `documentation.json`

- `navigation.products`: **Self-hosted** | **Cloud**, each **Guides** + **API** tab.
- API tab: `openapi` → `api-reference/openapi.selfhosted.yaml` / `openapi.cloud.yaml`.
