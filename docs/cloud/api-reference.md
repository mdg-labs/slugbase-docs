---
id: api-reference
title: API Reference
sidebar_position: 100
---

# API Reference (Cloud)

This section documents the HTTP API for SlugBase Cloud. The base URL is your cloud app URL (e.g. `https://app.slugbase.app`).

**Authentication:** Cloud uses **session-based auth** (cookie). The tenant/organization is determined by the current session (`organizationId`). Most endpoints are the same as self-hosted; the following differ or are cloud-only.

**Behavioral differences from self-hosted:**

- **GET /api/auth/setup/status** — In Cloud this is overridden and always returns `{ "initialized": true }` (no Setup page).
- **POST /api/auth/register** — Available in Cloud for signup; email verification is required. In self-hosted the route may 404.
- **Admin OIDC and SMTP** — The API may still exist; in Cloud the UI often hides these because OIDC and system email (Postmark) are configured at the platform level.
- **AI settings** — In Cloud, provider/model/API key are typically set via environment variables; Admin AI may only expose a per-org enable/disable toggle.

## Table of contents

- [Cloud-only endpoints](api-reference-cloud-only) — Contact, session, organizations, invitations, billing
- [CSRF & Health](api-reference-csrf-health)
- [Auth](api-reference-auth)
- [Password Reset](api-reference-password-reset)
- [Email Verification](api-reference-email-verification)
- [Bookmarks](api-reference-bookmarks)
- [Folders](api-reference-folders)
- [Tags](api-reference-tags)
- [Users](api-reference-users)
- [Teams](api-reference-teams)
- [Tokens](api-reference-tokens)
- [Config](api-reference-config)
- [OIDC Providers](api-reference-oidc-providers)
- [Admin Users](api-reference-admin-users)
- [Admin Teams](api-reference-admin-teams)
- [Admin Settings](api-reference-admin-settings)
- [Admin Stats](api-reference-admin-stats)
- [Dashboard](api-reference-dashboard)
- [Go](api-reference-go)
