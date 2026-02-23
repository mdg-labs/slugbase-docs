---
id: api-reference-admin-stats
title: Admin Stats
sidebar_position: 114
---

# Admin Stats

**Authentication:** Secret header `X-Stats-Secret` (value = STATS_ENDPOINT_SECRET). Not session/JWT.

## GET /api/admin/stats

Returns aggregated system metrics. Cached 60 seconds.

**Response (200):** Object with aggregate stats.

**Errors:** 401 — invalid/missing secret. 500 — server error.
