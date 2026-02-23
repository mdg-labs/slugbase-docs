---
id: api-reference-oidc-providers
title: OIDC Providers
sidebar_position: 115
---

# OIDC Providers

All paths under `{BASE_URL}/api/oidc-providers`. Admin only.

**Authentication:** Required, admin.

---

## GET /api/oidc-providers

List OIDC providers (no client_secret). Each includes callback_url.

**Response (200):** Array of providers (id, provider_key, issuer_url, authorization_url, token_url, userinfo_url, scopes, auto_create_users, default_role, created_at, callback_url).

**Errors:** 500 server error.

---

## GET /api/oidc-providers/:id

Get one OIDC provider by id (no secret).

**Response (200):** Provider object with callback_url.

**Errors:** 404 Provider not found. 500 server error.

---

## POST /api/oidc-providers

Create OIDC provider. Required: provider_key, client_id, client_secret, issuer_url. Optional: authorization_url, token_url, userinfo_url, scopes, auto_create_users, default_role.

**Request body (JSON):** provider_key, client_id, client_secret, issuer_url (required). Optional: authorization_url, token_url, userinfo_url, scopes, auto_create_users, default_role.

**Response (201):** Created provider (no secret in response).

**Errors:** 400 Missing required fields; provider_key validation; URL validation. 500 server error.

---

## PUT /api/oidc-providers/:id

Update OIDC provider. Same fields as create; client_secret optional (only sent if changing).

**Response (200):** Updated provider.

**Errors:** 404 Provider not found. 400 Validation. 500 server error.

---

## DELETE /api/oidc-providers/:id

Delete OIDC provider.

**Response (200):** Success.

**Errors:** 404 Provider not found. 500 server error.
