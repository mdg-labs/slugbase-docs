---
id: api-reference-password-reset
title: Password Reset
sidebar_position: 103
---

# Password Reset

All paths are under `{BASE_URL}/api/password-reset`.

---

## POST /api/password-reset/request

Request a password reset email. If an account exists with the given email and has a password, a reset link is sent. Response is identical either way (no email enumeration).

**Authentication:** None (public). Rate-limited.

**Request body (JSON):** `email` (string, required). Must be valid email format.

**Response (200):** `{ "message": "If an account with this email exists, a password reset link has been sent." }`

**Errors:** 400 — missing or invalid email. 429 — rate limit.

---

## GET /api/password-reset/verify

Verify that a password reset token is valid and not expired.

**Query:** `token` (string, required).

**Response (200):** `{ "valid": true }`

**Errors:** 400 — `{ "valid": false, "error": "Invalid or expired token" }`

---

## POST /api/password-reset/reset

Set a new password using the reset token. Invalidates the token on success.

**Request body (JSON):** `token` (string, required), `password` (string, required, must pass validation).

**Response (200):** `{ "message": "Password reset successfully" }`

**Errors:** 400 — missing token/password, invalid/expired token, invalid password, or user not found. 500 — `{ "error": "Failed to reset password" }`. 429 — rate limit.
