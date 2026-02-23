---
id: api-reference-csrf-health
title: CSRF & Health
sidebar_position: 101
---

# CSRF & Health

## GET /api/csrf-token

Returns a CSRF token for use in state-changing requests. Send it in the `X-CSRF-Token` header when CSRF protection is enabled.

**Authentication:** None (public).

**Request:** No body or query parameters.

**Response (200):**

```json
{
  "csrfToken": "string"
}
```

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 500 | `{ "error": "Failed to generate CSRF token" }` | Server error |

---

## GET /api/health

Health check endpoint. Returns a simple OK status.

**Authentication:** None (public).

**Request:** None.

**Response (200):**

```json
{
  "status": "ok"
}
```

---

## GET /api/version

Returns application version and mode. Useful for debugging and compatibility checks.

**Authentication:** None (public).

**Request:** None.

**Response (200):**

```json
{
  "version": "string",
  "commit": "string | null",
  "mode": "string"
}
```

- `version`: Semantic version or `"dev"`.
- `commit`: Git commit SHA if `COMMIT_SHA` env is set; otherwise `null`.
- `mode`: Application mode (e.g. `"selfhosted"`).
