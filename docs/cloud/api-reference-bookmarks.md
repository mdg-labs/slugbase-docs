---
id: api-reference-bookmarks
title: Bookmarks
sidebar_position: 111
---

# Bookmarks

All paths are under `{BASE_URL}/api/bookmarks`. Bookmarks can be filtered by folder, tag, scope, and search; support sharing with users and teams.

**Authentication:** Required for all endpoints.

---

## GET /api/bookmarks

List bookmarks (own and shared). Supports folder_id, tag_id, sort_by, scope, pinned, q (search), limit, offset.

**Query:** `folder_id`, `tag_id` (optional; must be accessible). `sort_by`: `recently_added` | `alphabetical` | `most_used` | `recently_accessed`. `scope`: `all` | `mine` | `shared_with_me` | `shared_by_me`. `pinned`: `true` to filter pinned. `q`: text search. `limit`, `offset` (default 50, max 500).

**Response (200):** `{ items: [], total, hasMore }`. Each item includes bookmark fields, `bookmark_type` (`own`|`shared`), `tags`, `folders`, `shared_teams`, `shared_users`, owner `user_name`/`user_email` when shared.

**Errors:** 404 — Folder or tag not found. 500 — server error.

---

## GET /api/bookmarks/search

Search bookmarks, folders, and tags by query string. Returns mixed results with `type`: `bookmark`|`folder`|`tag`.

**Query:** `q` (string, required).

**Response (200):** Array of results (bookmarks, folders, tags) with id, type, title, url, slug, etc.

**Errors:** 400 — `{ "error": "Search query is required" }`. 500 — `{ "error": "Search failed" }`.

---

## GET /api/bookmarks/export

Export all accessible bookmarks as JSON. Response is attachment with filename.

**Response (200):** JSON array of `{ title, url, slug, forwarding_enabled, pinned, created_at }`. Content-Disposition: attachment.

**Errors:** 500 — `{ "error": "Export failed" }`.

---

## GET /api/bookmarks/ids

Return only bookmark IDs matching current filters (for select-all across pages). Same query params as GET /api/bookmarks (folder_id, tag_id, scope, pinned, q, sort_by). Max 10000 IDs.

**Response (200):** `{ ids: [] }`

**Errors:** 404 — Folder/tag not found. 500 — server error.

---

## POST /api/bookmarks/ai-suggest

Get AI-suggested title, slug, and tags for a URL. Requires AI suggestions enabled and configured.

**Request body (JSON):** `url` (required). Optional: `page_title`.

**Response (200):** `{ title, slug, tags, language, confidence }`

**Errors:** 400 — URL required; invalid URL. 403 — `{ "error": "AI suggestions are not available" }`. 408 — AI request timed out. 503 — AI not configured or suggestion failed. 500 — server error.

---

## GET /api/bookmarks/:id

Get a single bookmark (own or shared).

**Response (200):** Bookmark object with tags, folders, shared_teams, shared_users. Boolean fields normalized.

**Errors:** 404 — `{ "error": "Bookmark not found" }`. 500 — server error.

---

## POST /api/bookmarks/:id/track-access

Record an access event for the bookmark (e.g. when user opens the link). Used for usage stats.

**Request:** No body required.

**Response (200):** Success (body shape may vary).

**Errors:** 404 — Bookmark not found. 500 — server error.

---

## POST /api/bookmarks

Create a bookmark. Title and URL required; slug required if forwarding_enabled.

**Request body (JSON):** `title` (required), `url` (required). Optional: `slug`, `forwarding_enabled`, `pinned`, `folder_ids`, `tag_ids`, `team_ids`, `user_ids`, `share_all_teams`, `ai_suggestion_used`.

**Response (201):** Created bookmark object.

**Errors:** 400 — Missing title/url; validation; slug required when forwarding; slug format; slug already exists; folder/tag/team access. 403 — No access to folder/tag/team. 404 — User not found for share. 500 — server error.

---

## PUT /api/bookmarks/:id

Update a bookmark. Only provided fields are updated. Slug uniqueness checked when changed.

**Request body (JSON):** Optional: `title`, `url`, `slug`, `forwarding_enabled`, `pinned`, `folder_ids`, `tag_ids`, `team_ids`, `user_ids`, `share_all_teams`.

**Response (200):** Updated bookmark object.

**Errors:** 400 — Slug required when forwarding; validation; slug conflict. 403 — No access. 404 — Bookmark not found. 500 — server error.

---

## DELETE /api/bookmarks/:id

Delete a bookmark. Must have modify access.

**Response (200):** Success (body may vary).

**Errors:** 404 — Bookmark not found. 500 — server error.

---

## POST /api/bookmarks/import

Import bookmarks from JSON. Body should be an array of bookmark-like objects (e.g. title, url). Exact format depends on implementation.

**Request body (JSON):** Array of objects with at least `title`, `url` (and optionally slug, etc.).

**Response (200/201):** Import result (e.g. count created, errors). Exact shape from implementation.

**Errors:** 400 — Invalid payload. 500 — server error.
