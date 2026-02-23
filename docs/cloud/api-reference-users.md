---
id: api-reference-users
title: Users
sidebar_position: 105
---

# Users

All paths are under `{BASE_URL}/api/users`. Operate on the **current** authenticated user only.

**Authentication:** Required.

---

## GET /api/users/me

Returns the current user's profile (id, email, name, user_key, is_admin, language, theme, ai_suggestions_enabled, email_pending, oidc_provider, oidc_sub).

**Response (200):** User object.

**Errors:** 500 — `{ "error": "<message>" }`

---

## PUT /api/users/me

Update current user. Only provided fields are updated. If email is changed, a verification email is sent.

**Request body (JSON):** All optional; at least one required. `email`, `name`, `language`, `theme`, `ai_suggestions_enabled`.

**Response (200):** Updated user object, or when email change triggers verification: `{ "message": "Email change requested...", "emailVerificationRequired": true, "currentEmail", "pendingEmail" }`.

**Errors:** 400 — OIDC users cannot change email; validation; email already exists; no fields to update. 404 — user not found. 500 — server error.
