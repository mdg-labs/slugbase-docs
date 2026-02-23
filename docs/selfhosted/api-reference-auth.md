---
id: api-reference-auth
title: Auth
sidebar_position: 102
---

# Auth

All paths are under `{BASE_URL}/api/auth`. Authentication for protected routes is via session cookie (JWT in `token` cookie) or `Authorization: Bearer <token>`.

---

## GET /api/auth/providers

Returns the list of configured OIDC providers with callback URLs. Used by the frontend to show sign-in options.

**Authentication:** None (public).

**Request:** None.

**Response (200):**

```json
[
  {
    "id": "string",
    "provider_key": "string",
    "issuer_url": "string",
    "callback_url": "string"
  }
]
```

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 500 | `{ "error": "An error occurred while loading sign-in options." }` | Server error |

---

## GET /api/auth/me

Returns the current authenticated user's profile (from JWT/session).

**Authentication:** Required.

**Request:** None.

**Response (200):** User object with `id`, `email`, `name`, `user_key`, `is_admin`, `language`, `theme`, `ai_suggestions_enabled`.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 401 | — | Not authenticated |

---

## POST /api/auth/login

Authenticate with email and password. Sets the auth cookie on success.

**Authentication:** None (public).

**Request body (JSON):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | Yes | User email (validated, normalized) |
| password | string | Yes | User password |

**Response (200):** User object: `id`, `email`, `name`, `user_key`, `is_admin`, `email_verified`, `language`, `theme`. Cookie `token` is set.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Email and password are required" }` | Missing fields |
| 400 | `{ "error": "<validation message>" }` | Invalid email format |
| 401 | `{ "error": "Invalid email or password" }` | Wrong credentials |
| 401 | `{ "error": "This account does not have a password set. Please use OIDC login." }` | OIDC-only user |
| 500 | `{ "error": "An error occurred during sign in." }` | Server error |

---

## POST /api/auth/logout

Clear the auth cookie and log the user out.

**Authentication:** None (safe to call unauthenticated).

**Request:** None.

**Response (200):**

```json
{
  "message": "Logged out"
}
```

---

## POST /api/auth/register

Create a new account with email verification. **In self-hosted mode this route may return 404** (registration is typically disabled; first user is created via Setup). Documented for API completeness; in cloud it is the main signup flow.

**Authentication:** None (public).

**Request body (JSON):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | Yes | Valid email |
| name | string | Yes | Display name (1–255 chars) |
| password | string | Yes | Password (must pass complexity validation) |

**Response (201):**

```json
{
  "message": "Check your email to verify your account"
}
```

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Email, name, and password are required" }` | Missing fields |
| 400 | `{ "error": "Email already registered" }` | Duplicate email |
| 400 | `{ "error": "<validation message>" }` | Validation (email, name, password) |
| 403 | `{ "error": "Registrations are disabled" }` | Registrations disabled |
| 500 | `{ "error": "Registration failed. Please try again." }` | Server error |

---

## POST /api/auth/verify-signup

Verify signup email using the token from the verification link. Marks the user as verified.

**Authentication:** None (public).

**Request body (JSON):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| token | string | Yes | Verification token from email link |

**Response (200):**

```json
{
  "message": "Email verified. You can log in."
}
```

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Token is required" }` | Missing token |
| 400 | `{ "error": "Invalid or expired verification link" }` | Invalid/unknown token |
| 400 | `{ "error": "This verification link has already been used" }` | Token already used |
| 400 | `{ "error": "This verification link has expired" }` | Token expired |
| 500 | `{ "error": "Verification failed. Please try again." }` | Server error |

---

## GET /api/auth/signup-verification/status

Check the status of a signup verification token (valid, used, expired, invalid).

**Authentication:** None (public).

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| token | string | Yes | Verification token |

**Response (200):** One of:

- `{ "status": "valid", "email": "string" }`
- `{ "status": "used" }`
- `{ "status": "expired", "email": "string" }`
- `{ "status": "invalid" }`

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "status": "invalid" }` | Missing token |
| 500 | `{ "status": "invalid" }` | Server error |

---

## POST /api/auth/resend-signup-verification

Resend the signup verification email. Optionally update the email address before resending.

**Authentication:** None (public).

**Request body (JSON):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| token | string | Yes | Current verification token |
| newEmail | string | No | New email to verify (must be valid and not already registered) |

**Response (200):**

```json
{
  "message": "Verification email sent"
}
```

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Token is required" }` | Missing token |
| 400 | `{ "error": "Invalid verification token" }` | Invalid token |
| 400 | `{ "error": "This verification link has already been used" }` | Token already used |
| 400 | `{ "error": "Email already registered" }` | newEmail already in use |
| 500 | `{ "error": "Failed to resend verification. Please try again." }` | Server error |

---

## POST /api/auth/request-signup-resend

Request a new verification email by providing only the email (no token). If an unverified account exists, a new link is sent.

**Authentication:** None (public).

**Request body (JSON):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | Yes | Email of the unverified account |

**Response (200):**

```json
{
  "message": "If an unverified account exists with that email, a new verification link has been sent."
}
```

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Email is required" }` | Missing email |
| 400 | `{ "error": "<validation message>" }` | Invalid email |
| 500 | `{ "error": "Request failed. Please try again." }` | Server error |

---

## POST /api/auth/refresh

Token refresh. In the core self-hosted implementation this returns 404 (refresh is used in cloud).

**Authentication:** None.

**Response (404):** `{ "error": "Not found" }`

---

## GET /api/auth/:provider

Starts the OIDC login flow for the given provider (e.g. `google`, `github`). Redirects to the identity provider.

**Authentication:** None (public).

**Path parameters:** `provider` — provider key as configured in Admin OIDC (e.g. `google`).

**Response:** Redirect to identity provider. No JSON.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 404 | `{ "error": "Not found" }` | Unknown provider |

---

## GET /api/auth/:provider/callback

OIDC callback. Handled by Passport; on success sets cookie and redirects to frontend. Not called directly by API clients.

**Authentication:** None (public; identity provider redirects here).

---

## POST /api/auth/setup

Create the first admin user when the system is not yet initialized (self-hosted only). Logs the user in and sets the auth cookie.

**Authentication:** None (public). Only succeeds when system is not initialized.

**Request body (JSON):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | Yes | Admin email |
| name | string | Yes | Display name (1–255 chars) |
| password | string | Yes | Password (must pass validation) |

**Response (200):** User object: `id`, `email`, `name`, `user_key`, `is_admin`, `language`, `theme`. Cookie `token` is set.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 400 | `{ "error": "Email, name, and password are required" }` | Missing fields |
| 400 | `{ "error": "User with this email already exists" }` | Duplicate email or constraint |
| 400 | `{ "error": "<validation message>" }` | Validation (email, name, password) |
| 403 | `{ "error": "System already initialized" }` | Setup already completed |
| 500 | `{ "error": "An error occurred during setup. Please try again." }` | Server error |

---

## GET /api/auth/setup/status

Check whether the system has been initialized (first admin created). Used to show or hide the Setup page.

**Authentication:** None (public).

**Request:** None.

**Response (200):**

```json
{
  "initialized": true
}
```

or `{ "initialized": false }` before setup.

**Errors:**

| Status | Body | Description |
|--------|------|-------------|
| 500 | `{ "error": "An error occurred." }` | Server error |
