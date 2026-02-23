---
id: api-reference-dashboard
title: Dashboard
sidebar_position: 113
---

# Dashboard

Authentication: Required.

## GET /api/dashboard/stats

Returns aggregated stats for the current user: totalBookmarks, totalFolders, totalTags, sharedBookmarks, sharedFolders, recentBookmarks, topTags, quickAccessBookmarks, pinnedBookmarks.

Response 200: JSON object with the above fields.

Errors: 500 server error.
