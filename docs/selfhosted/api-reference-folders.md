---
id: api-reference-folders
title: Folders
sidebar_position: 109
---

# Folders

All paths are under `{BASE_URL}/api/folders`. Folders can be shared with teams or users.

**Authentication:** Required for all endpoints.

---

## GET /api/folders

List folders (own and shared). Supports scope filter and pagination.

**Query:** `scope` (optional): `all` | `mine` | `shared_with_me` | `shared_by_me`. `limit`, `offset` (optional, for pagination). `sort_by` (optional): `alphabetical` | `recently_added`.

**Response (200):** Array of folder objects, or with pagination `{ items: [], total }`. Each folder may include `folder_type` (`own`|`shared`), `shared_teams`, `shared_users`, `user_name`, `user_email` for shared.

**Errors:** 404 — folder not found (when filtering by folder). 500 — server error.

---

## GET /api/folders/:id

Get a single folder by ID (own or shared). Returns shared_teams and shared_users.

**Response (200):** Folder object with `shared_teams`, `shared_users`.

**Errors:** 404 — `{ "error": "Folder not found" }`. 500 — server error.

---

## POST /api/folders

Create a folder. Name required; optional icon, team_ids, user_ids, share_all_teams.

**Request body (JSON):** `name` (required, 1–max length). Optional: `icon`, `team_ids` (array), `user_ids` (array), `share_all_teams` (boolean).

**Response (201):** Created folder object.

**Errors:** 400 — Name required; name validation; folder with this name already exists; icon length. 403 — Not a member of team. 404 — User not found for share. 500 — server error.

---

## PUT /api/folders/:id

Update folder (name, icon, team shares, user shares). Must own or have modify access.

**Request body (JSON):** `name` (required). Optional: `icon`, `team_ids`, `user_ids`, `share_all_teams`.

**Response (200):** Updated folder object.

**Errors:** 400 — Name required; validation; name conflict. 403 — Not a member of team. 404 — Folder not found; user not found. 500 — server error.

---

## DELETE /api/folders/:id

Delete a folder. Must own or have modify access.

**Response (200):** `{ "message": "Folder deleted" }`

**Errors:** 404 — Folder not found. 500 — server error.
