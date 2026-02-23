---
id: api-reference-go
title: Go (Short Links)
sidebar_position: 112
---

# Go (Short Links)

Short link preferences are under `{BASE_URL}/api/go`. The actual redirect is at `{BASE_URL}/go/:slug` (no /api). All API routes require authentication.

---

## GET /api/go/preferences

List the current user's slug preferences (personal short links). Each preference maps a slug to a bookmark.

**Authentication:** Required.

**Response (200):** Array of `{ slug, bookmark_id, title, url, workspace, created_at, updated_at }`. `workspace` is "Personal" for own bookmarks or owner name for shared.

**Errors:** 500 — `{ "error": "Internal server error" }`.

---

## POST /api/go/preferences

Add or update a slug preference: map a slug to a bookmark. The bookmark must have that slug and forwarding enabled.

**Authentication:** Required.

**Request body (JSON):** `slug` (string, required), `bookmark_id` (string, required).

**Response (201):** `{ slug, bookmark_id }`

**Errors:** 400 — slug and bookmark_id required; slug validation. 403 — `{ "error": "Forbidden" }` (no access to bookmark). 404 — `{ "error": "Bookmark not found or slug mismatch" }`. 500 — server error.

---

## DELETE /api/go/preferences/:slug

Remove a slug preference for the current user.

**Authentication:** Required.

**Response (200):** Success.

**Errors:** 400 — Invalid slug format. 404 — `{ "error": "Preference not found" }`. 500 — server error.

---

## GET /go/:slug

**Redirect endpoint (not under /api).** Resolve the user's short link and redirect to the bookmark URL. If the user has a preference for this slug, that bookmark is used; otherwise the first matching bookmark with that slug and forwarding enabled is used. Optional auth (cookie); if not logged in, behavior may fall back to default or 404.

**Response:** 302 redirect to bookmark URL, or 404 if not found.

---

## GET /go/:slug/remember/:bookmarkId

**Redirect endpoint (not under /api).** Same as GET /go/:slug but also records that the given bookmark was used (for analytics). Optional auth.

**Response:** 302 redirect, or 404.
