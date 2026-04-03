# SlugBase Cloud vs self-hosted core — feature delta

Compared to single-tenant self-hosted core when `VITE_SLUGBASE_MODE === 'cloud'`.

## 1. Auth / signup / org workspace

| Delta | Self-hosted | Cloud |
|--------|-------------|--------|
| First admin | Setup wizard until initialized | Setup status forced initialized; signup creates first account |
| Legal at signup | Optional host URLs | Terms/privacy links on signup |
| Marketing | Usually same app | Landing `/`, `/pricing`, `/contact`, `/terms`, `/privacy`, `/imprint` |
| Tenant | Implicit | `organizationId` in session; `/api/session/org` |
| Workspace admin | Often `is_admin` | `is_admin` **or** `workspace_admin` |
| Profile delete | Unless guard | `profileDeleteGuard` + `/api/profile/can-delete` |

## 2. Routes outside core app

- Marketing site on root router (`main.tsx`).
- Core under `/app` with **extra** `/admin/billing` → `AdminBillingPage` (Stripe).

## 3. Plan limits & collaboration (in packaged core when cloud)

- Admin Members/Teams: **Team** plan only (gates).
- Scope tabs, team sharing, invites: **Team** + `canShareWithTeams`.
- AI admin / profile AI: `aiAvailable` on plan.
- Dashboard: free-plan AI promo, bookmark limit usage, link to `/pricing`.
- **Hidden** OIDC/SMTP in cloud wrapper; **AI admin** may be toggle-only.

## 4. Notable cloud `en.json`

- `billing.*`, `admin.*` (billing, seats), `pricing.*`, `cookieConsent.*`, `legal.*`, `contact.*`.

## 5. Other SaaS touches

- Stripe webhooks, contact + Turnstile, Umami analytics, checkout query `?checkout=…`.

## Summary checklist

1. Marketing + `/app` split; legal signup links.
2. No Setup wizard; org session + default org hydration.
3. `/admin/billing` + Stripe.
4. Plan-driven gates for members, teams, sharing, AI, invites.
5. Hidden OIDC/SMTP; optional `adminAiOnlyToggle`.
6. **No in-app org switcher found** in scan — multi-org is session/API-level.

*(Subagent-generated delta; verify in slugbase-cloud when editing docs.)*
