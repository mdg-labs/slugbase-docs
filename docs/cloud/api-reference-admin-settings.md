---
id: api-reference-admin-settings
title: Admin Settings
sidebar_position: 118
---

# Admin Settings

All paths under `{BASE_URL}/api/admin/settings`. Admin only. Tenant-scoped key-value settings; special routes for AI and SMTP.

**Authentication:** Required, admin.

---

## GET /api/admin/settings

List all system_config key-value pairs for the tenant. smtp_password value is masked.

**Response (200):** Object of key-value strings.

**Errors:** 500 server error.

---

## GET /api/admin/settings/ai

Get AI settings (ai_enabled, ai_provider, ai_model, ai_api_key_set). API key value not returned.

**Response (200):** ai_enabled (boolean), ai_provider, ai_model, ai_api_key_set (boolean).

**Errors:** 500 server error.

---

## GET /api/admin/settings/ai/models

List available models for configured provider (e.g. OpenAI). Requires API key to be set first.

**Response (200):** `{ models: [] }`

**Errors:** 400 API key required; could not read API key. 500 server error.

---

## GET /api/admin/settings/:key

Get one setting by key.

**Response (200):** `{ key, value }`

**Errors:** 404 Setting not found. 500 server error.

---

## POST /api/admin/settings

Set a key-value setting. Body: key, value (required).

**Request body (JSON):** key, value (required).

**Response (200):** `{ key, value }`

**Errors:** 400 Key and value required. 500 server error.

---

## DELETE /api/admin/settings/:key

Delete a setting by key.

**Response (200):** Success.

**Errors:** 404 Setting not found. 500 server error.

---

## POST /api/admin/settings/smtp/test

Send a test email using current SMTP settings.

**Request:** No body or empty body.

**Response (200):** Success message.

**Errors:** 400 SMTP not configured. 500 Send failed.

---

## POST /api/admin/settings/smtp

Save SMTP settings. Body typically includes smtp_host, smtp_port, smtp_user, smtp_password, smtp_from, etc. Exact keys from frontend.

**Response (200):** Success or updated settings.

**Errors:** 400 Validation. 500 server error.

---

## POST /api/admin/settings/ai

Save AI settings. Body: ai_enabled, ai_provider, ai_model, ai_api_key (optional; only to change).

**Response (200):** Success.

**Errors:** 400 Validation. 500 server error.
