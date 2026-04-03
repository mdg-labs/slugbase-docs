# SlugBase core (`slugbase`) — customer-facing surface inventory

Source: `frontend/src/App.tsx`, nested routes under `Layout` / `AdminLayout`, `frontend/src/components/AppSidebar.tsx`, `frontend/src/components/Breadcrumbs.tsx`, `frontend/src/components/TopBar.tsx`, `frontend/src/components/UserDropdown.tsx`, `frontend/src/components/GlobalSearch.tsx`, `frontend/src/contexts/PlanContext.tsx`, profile and admin pages/components, `frontend/src/locales/en.json`.

Paths are relative to React Router `basename` (often `/app` in cloud).

## 1. Routes (browser path patterns)

### Public / auth (no `Layout`)

| Pattern | Notes |
|--------|--------|
| `/login` | Logged-in users redirect to app root. |
| `/signup` | Same redirect when authenticated. |
| `/reset-password` / `/password-reset` | Password reset; token in query opens reset form. |
| `/verify-email?token=…` | Email verification. |
| `/verify-email-required` | Resend / fix email when verification required. |
| `/go/:slug` | Forwarding handler → API origin (not main shell). |

### First-time setup

- When `GET /auth/setup/status` returns `initialized: false` (and `skipSetupFlow` is false), app renders **Setup** instead of routes (no dedicated pathname in `App.tsx`).

### Authenticated app (`Layout`)

| Pattern | Screen |
|---------|--------|
| `/` | Dashboard |
| `/bookmarks` | Bookmarks |
| `/folders` | Folders |
| `/tags` | Tags |
| `/profile` | Profile / account |
| `/go-preferences` | Remembered slug choices |
| `/search-engine-guide` | Custom search engine guide |

### Admin (`AdminRoute`)

| Pattern | Notes |
|---------|--------|
| `/admin` | Redirect to first allowed admin tab. |
| `/admin/members` | Users |
| `/admin/teams` | Teams |
| `/admin/oidc` | OIDC (hidden when `hideAdminOidcAndSmtp`) |
| `/admin/settings` | SMTP (same hide) |
| `/admin/ai` | AI admin |

**Extension:** `extraAdminRoutes` / `extraAdminNavItems` (e.g. cloud **Billing**).

### Query parameters (user-visible)

- **Bookmarks:** `folder_id`, `tag_id`, `scope`, `pinned`, `q`, `view`, `limit`, `page`, `create`, `import`, `export`, `edit`.
- **Folders:** `scope`, `sort`, `limit`, `page`.
- **Tags:** `sort`, `limit`, `page`.

## 2. Major UI areas

- **Sidebar:** Overview, Bookmarks, Folders, Tags; Admin subsection (Users, Teams, OIDC, Settings, AI) + extras.
- **Top bar:** Breadcrumbs, settings shortcut, user menu (Profile, Admin, Logout).
- **Command palette (GlobalSearch):** Ctrl+K / Cmd+K; navigation + quick actions (create bookmark, import, export).
- **Dashboard:** Hero/command bar, onboarding, quick access, pinned, shared stats, plan usage (cloud), tags.

## 3. User settings / preferences

- **Profile:** Account (email, name, verification), preferences (language, theme), optional AI suggestions, API tokens, delete account.
- **Go preferences:** Remembered slug disambiguation.
- **Search engine guide:** Browser shortcut setup copy.
- **Admin:** Members, Teams, OIDC, SMTP, AI — strings under `admin.*`, `smtp.*`.

## 4. Plan / feature gating (`PlanContext.tsx`)

- **Self-hosted (`!isCloudMode`):** No `/config/plan` fetch; members/teams/sharing/scope tabs effectively **on** for admins; AI admin nav shown unless plan object says otherwise (`planInfo` null → permissive).
- **Cloud:** Fetches `GET /config/plan`; Team plan for admin Members/Teams, scope tabs, team sharing, invites; `aiAvailable` for AI admin and profile AI toggle; free dashboard promo to pricing.

## 5. Config flags reshaping UI

- `hideAdminOidcAndSmtp`, `adminAiOnlyToggle`, `skipSetupFlow`, `profileDeleteGuard`, etc.

*(Subagent-generated inventory; refine against repo when editing docs.)*
