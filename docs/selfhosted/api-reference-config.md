---
id: api-reference-config
title: Config
sidebar_position: 108
---

# Config

Public config endpoints for frontend feature detection. No sensitive data (e.g. API keys) is exposed.

**Authentication:** Required for endpoints below.

---

## GET /api/config/ai-suggestions

Returns whether AI suggestions are enabled for the current user and whether the AI feature is available (e.g. API key configured at tenant level).

**Authentication:** Required.

**Request:** None.

**Response (200):**

```json
{
  "enabled": true,
  "available": true
}
```

- `enabled`: Whether the user/tenant has AI suggestions turned on.
- `available`: Whether the feature is available (e.g. tenant has API key or env is set).

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 500 | `{ "error": "Failed to load config" }` | Server error |

---

[Admin Stats](api-reference-admin-stats) — Stats endpoint uses secret header auth.
