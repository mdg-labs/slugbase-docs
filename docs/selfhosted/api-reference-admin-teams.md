---
id: api-reference-admin-teams
title: Admin Teams
sidebar_position: 117
---

# Admin Teams

All paths under `{BASE_URL}/api/admin/teams`. Admin only.

**Authentication:** Required, admin.

---

## GET /api/admin/teams

List all teams for the tenant.

**Response (200):** Array of team objects.

**Errors:** 500 server error.

---

## GET /api/admin/teams/:id

Get team by id with members.

**Response (200):** Team object with members array (id, email, name, is_admin).

**Errors:** 404 Team not found. 500 server error.

---

## POST /api/admin/teams

Create team. Required: name. Optional: description.

**Request body (JSON):** name (required), description (optional).

**Response (201):** Created team.

**Errors:** 400 Name required; team with this name already exists. 500 server error.

---

## PUT /api/admin/teams/:id

Update team (name, description).

**Response (200):** Updated team.

**Errors:** 400 Name conflict. 404 Team not found. 500 server error.

---

## DELETE /api/admin/teams/:id

Delete team.

**Response (200):** Success.

**Errors:** 404 Team not found. 500 server error.

---

## POST /api/admin/teams/:id/members

Add members to team. Body: user_ids array.

**Request body (JSON):** user_ids (array of user ids).

**Response (200/201):** Success or member list.

**Errors:** 400 Validation. 404 Team or user not found. 500 server error.

---

## DELETE /api/admin/teams/:id/members/:userId

Remove member from team.

**Response (200):** Success.

**Errors:** 404 Team or member not found. 500 server error.
