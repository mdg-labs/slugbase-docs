---
id: api-reference-cloud-only
title: Cloud-only Endpoints
sidebar_position: 99
---

# Cloud-only Endpoints

These endpoints exist only in SlugBase Cloud. All under `{BASE_URL}/api` unless noted.

---

## Contact

### GET /api/contact

Returns a short description of the contact API. No auth.

**Response (200):** `{ "message": "Contact API: use POST with name, email, message" }`

### POST /api/contact

Submit the contact form. Sends email via Postmark to internal recipient and optional confirmation to user. Rate-limited (e.g. 10 per hour). No auth.

**Request body (JSON):** `name` (required, max 255), `email` (required, valid email), `message` (required, max 10000 chars).

**Response (200):** `{ "success": true }`

**Errors:** 400 — Name/email/message required; invalid email; length exceeded. 429 — rate limit. 503 — Postmark not configured or CONTACT_FORM_RECIPIENT not set.

---

## Session

### GET /api/session/org

Return current organization ID from session (for frontend). Auth required.

**Response (200):** `{ "organizationId": "string | null" }`

### POST /api/session/org

Set current organization. Verifies user is a member. Auth required.

**Request body (JSON):** `organizationId` (string, required).

**Response (200):** `{ "organizationId": "string" }`

**Errors:** 400 organizationId required. 403 Not a member of this organization. 500 server error.

---

## Organizations

### GET /api/organizations

List organizations the user is a member of. Auth required.

**Response (200):** Array of `{ id, name, plan, included_seats, created_at, role, joined_at }`.

**Errors:** 500 server error.

### POST /api/organizations

Create organization. Auth required. User becomes owner.

**Request body (JSON):** `name` (string, required).

**Response (201):** `{ id, name, plan, included_seats, created_at }`.

**Errors:** 400 Organization name required. 500 server error.

### GET /api/organizations/:id

Get organization by id. User must be member. Auth required.

**Response (200):** Organization object (id, name, plan, stripe_customer_id, included_seats, created_at).

**Errors:** 404 Organization not found. 500 server error.

### GET /api/organizations/:id/members

List organization members. Auth required, must be member.

**Response (200):** Array of `{ user_id, role, joined_at, email, name }`.

**Errors:** 404 Organization not found. 500 server error.

### POST /api/organizations/:id/invitations

Create an invitation for an email to join the org. Auth required, must be member (typically owner/admin). Body: `email` (required).

**Response (201):** Invitation result (e.g. token or message).

**Errors:** 400 Email required. 403 Forbidden. 404 Organization not found. 500 server error.

---

## Invitations

### POST /api/invitations/accept

Accept an organization invitation by token. Auth required. Token from invitation link/email.

**Request body (JSON):** `token` (string, required).

**Response (200):** `{ "message": "Joined organization", "orgId": "string" }` or `{ "message": "Already a member", "orgId": "string" }`.

**Errors:** 400 Token required; invitation already used or cancelled; invitation expired. 403 This invitation was sent to a different email address. 404 Invitation not found. 500 server error.

---

## Billing

### POST /api/billing/checkout-session

Create a Stripe Checkout session for subscription. Auth required. Requires STRIPE_SECRET_KEY.

**Request body (JSON):** `organizationId` (required), `priceId` (required, Stripe price ID).

**Response (200):** `{ "url": "string" }` — redirect user to this URL for checkout.

**Errors:** 400 organizationId and priceId required. 403 Not a member of this organization. 404 Organization not found. 501 Billing not configured. 500 Stripe error.

### POST /api/billing/portal-session

Create a Stripe Customer Portal session for managing subscription. Auth required.

**Request body (JSON):** `organizationId` (required).

**Response (200):** `{ "url": "string" }` — redirect user to this URL for portal.

**Errors:** 400 organizationId required. 403 Not a member. 404 Organization not found. 501 Billing not configured. 500 Stripe error.

**Note:** `POST /api/billing/webhook` is for Stripe only (server-to-server). Do not call it from client code.
