---
id: api-reference-email-verification
title: Email Verification
sidebar_position: 104
---

# Email Verification

All paths are under `{BASE_URL}/api/email-verification`. Used when a user changes their email: verify token and confirm the new email.

---

## GET /api/email-verification/verify

Check whether an email change verification token is valid. Returns the new email when valid.

**Query:** `token` (string, required).

**Response (200):** `{ "valid": true, "newEmail": "string" }`

**Errors:** 400 — `{ "valid": false, "error": "..." }` (Token is required; Invalid or expired token; Token has expired; Invalid token).

---

## POST /api/email-verification/confirm

Confirm the email change. Updates the user's email and marks the token as used.

**Request body (JSON):** `token` (string, required).

**Response (200):** `{ "message": "Email verified and updated successfully", "email": "string" }`

**Errors:** 400 — Token required, invalid/expired token, or email already in use. 500 — `{ "error": "Failed to verify email" }`. 429 — rate limit.
