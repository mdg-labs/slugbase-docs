---
id: api-reference-tags
title: Tags
sidebar_position: 110
---

# Tags

All paths are under `{BASE_URL}/api/tags`. Tags are per-user.

**Authentication:** Required for all endpoints.

---

## GET /api/tags

List the current user's tags. Optional pagination and sort.

**Query:** `limit`, `offset` (optional). `sort_by` (optional): `alphabetical` | `recently_added`.

**Response (200):** Array of tag objects, or with pagination `{ items: [], total }`.

**Errors:** 500 — server error.

---

## GET /api/tags/:id

Get a single tag by ID.

**Response (200):** Tag object.

**Errors:** 404 — `{ "error": "Tag not found" }`. 500 — server error.

---

## POST /api/tags

Create a tag. Name must be unique per user.

**Request body (JSON):** `name` (required, 1–max length).

**Response (201):** Created tag object.

**Errors:** 400 — Name required; validation; tag with this name already exists. 500 — server error.

---

## PUT /api/tags/:id

Update a tag (name only).

**Request body (JSON):** `name` (required).

**Response (200):** Updated tag object.

**Errors:** 400 — Name required; validation; name conflict. 404 — Tag not found. 500 — server error.

---

## DELETE /api/tags/:id

Delete a tag.

**Response (200):** `{ "message": "Tag deleted" }`

**Errors:** 404 — Tag not found. 500 — server error.
