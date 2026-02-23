---
id: api-reference
title: API Reference
sidebar_position: 100
---

# API Reference (Self-Hosted)

This section documents all HTTP API endpoints for the SlugBase self-hosted backend. Use `{BASE_URL}` as your instance base URL (e.g. `https://your-instance.example.com`).

**Authentication:** Most endpoints require authentication via session cookie (JWT in `token` cookie) or `Authorization: Bearer <token>`. Endpoints marked **Admin** require an authenticated user with `is_admin: true`. **Public** endpoints do not require auth.

**Conventions:** Request and response bodies are JSON unless noted. Error responses use `{ "error": "message" }`. Use the `X-CSRF-Token` header for state-changing requests when CSRF protection is enabled (value from `GET /api/csrf-token`).

## Table of contents

- [CSRF & Health](api-reference-csrf-health) — CSRF token, health, version
- [Auth](api-reference-auth) — Login, logout, register, setup, OIDC, email verification
- [Password Reset](api-reference-password-reset) — Request and reset password
- [Email Verification](api-reference-email-verification) — Verify and confirm email
- [Bookmarks](api-reference-bookmarks) — CRUD, search, export, import, AI suggest
- [Folders](api-reference-folders) — Folder CRUD
- [Tags](api-reference-tags) — Tag CRUD
- [Users](api-reference-users) — Current user profile
- [Teams](api-reference-teams) — User's teams
- [Tokens](api-reference-tokens) — API tokens
- [Config](api-reference-config) — AI suggestions config
- [OIDC Providers](api-reference-oidc-providers) — Admin OIDC provider CRUD
- [Admin Users](api-reference-admin-users) — Admin user management
- [Admin Teams](api-reference-admin-teams) — Admin team management
- [Admin Settings](api-reference-admin-settings) — Admin settings, SMTP, AI
- [Admin Stats](api-reference-admin-stats) — Stats (secret auth)
- [Dashboard](api-reference-dashboard) — Dashboard stats
- [Go](api-reference-go) — Short link preferences and redirects
