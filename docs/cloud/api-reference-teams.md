---
id: api-reference-teams
title: Teams
sidebar_position: 106
---

# Teams

All paths are under `{BASE_URL}/api/teams`. Returns the list of teams the current user is a member of (tenant-scoped).

**Authentication:** Required for all endpoints.

---

## GET /api/teams

Returns all teams the current user is a member of, ordered by name.

**Authentication:** Required.

**Request:** No body or query parameters.

**Response (200):** Array of team objects. Each team includes fields such as: `id`, `name`, `description`, `tenant_id`, `created_at`, etc.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 500 | `{ "error": "<message>" }` | Server error |
