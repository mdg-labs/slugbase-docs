---
id: api-reference-admin-users
title: Admin Users
sidebar_position: 116
---

# Admin Users

Paths under /api/admin/users. Admin only.

## GET /api/admin/users

List all users. Response 200: array of user objects.

## GET /api/admin/users/:id

Get one user. 404 if not found.

## POST /api/admin/users

Create user. Body: email, name required; password, is_admin, send_invite optional. Cannot set both password and send_invite. 201 on success.

## PUT /api/admin/users/:id

Update user. Body: email, name, password, is_admin optional.

## DELETE /api/admin/users/:id

Delete user.

## GET /api/admin/users/:id/teams

List teams for user. Response 200: array of teams.
