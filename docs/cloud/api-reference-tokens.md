---
id: api-reference-tokens
title: Tokens
sidebar_position: 107
---

# Tokens

All paths are under `{BASE_URL}/api/tokens`. Manage API tokens for the current user (used for `Authorization: Bearer <token>`). Creation is rate-limited.

**Authentication:** Required for all endpoints. Use session cookie or existing Bearer token.

---

## GET /api/tokens

List all API tokens for the current user. The actual token value is only returned once at creation; list responses typically include `id`, `name`, `created_at`, and possibly `last_used_at` (if implemented).

**Authentication:** Required.

**Request:** None.

**Response (200):** Array of token objects (e.g. `id`, `name`, `created_at`). Token secret is not returned.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 500 | `{ "error": "<message>" }` | Server error |

---

## POST /api/tokens

Create a new API token. The full token value is returned only in this response; store it securely.

**Authentication:** Required. Rate-limited.

**Request body (JSON):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Descriptive name for the token |

**Response (201):** Token object including the secret/token value (e.g. `id`, `name`, `token` or `secret`, `created_at`). Exact shape depends on implementation.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Token name is required" }` | Missing or invalid name |
| 400 | `{ "error": "<message>" }` | Validation or create failure |
| 429 | — | Rate limit exceeded |
| 500 | `{ "error": "<message>" }` | Server error |

---

## DELETE /api/tokens/:id

Revoke an API token by ID. The token will no longer authenticate.

**Authentication:** Required.

**Path parameters:** `id` — token ID (UUID).

**Request:** None.

**Response (200):**

```json
{
  "message": "Token revoked"
}
```

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Token ID is required" }` | Missing id |
| 400 | `{ "error": "<message>" }` | Token not found or not owned by user |
| 500 | `{ "error": "<message>" }` | Server error |
