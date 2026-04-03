---
name: slugbase-docs
description: >
  Writing, auditing, and maintaining customer-facing documentation for SlugBase — the open-source
  bookmark manager. Use this skill whenever the user wants to write, rewrite, expand, restructure,
  or review any docs page (guides, feature explanations, self-hosted setup, cloud differences,
  billing/plans, or FAQ entries). Also trigger when the user says things like "write docs for X",
  "add a page about Y", "sync self-hosted → cloud docs", "update the docs for feature Z",
  "check docs for gaps", or simply activates the skill with no further instructions.
  ALWAYS run the full gap-analysis workflow on activation before writing anything.
---

# SlugBase Docs Writing Skill

Customer-facing documentation for SlugBase. Every activation of this skill starts with a
codebase gap analysis — then writes or fixes docs based on what the analysis finds.

---

## Workspace Layout

Five repos are available locally in the Cursor workspace:

| Repo | Role |
|---|---|
| `slugbase` | Core / self-hosted (AGPL open source) — **source of truth** |
| `slugbase-cloud` | Cloud variant — multi-tenancy, billing, team management |
| `slugbase-workspace` | Monorepo tooling / shared packages |
| `slugbase-docs` | Published docs (documentation.ai) — **the only repo you write to** |
| `slugbase-docs-internal` | Internal notes, not customer-facing — read-only for context |

**You write files only in `slugbase-docs`.** Never modify source code repos.

---

## Rules to Read First

Before doing anything else, read these two rule files from the docs repo:

1. `slugbase-docs/.cursor/rules/docs-boundaries.mdc` — defines what is in/out of scope, page ownership, and `documentation.json` update requirements.
2. `slugbase-docs/.cursor/rules/documentation.ai.mdc` — defines publishing conventions, frontmatter format, and how documentation.ai expects files to be structured.

Both files are authoritative. If they conflict with anything in this skill, the `.mdc` files win.

---

## Step 0 — Gap Analysis (Run Every Time)

On every skill activation, before writing a single line of docs, run a parallel gap analysis
using subagents. Spawn three subagents simultaneously:

### Subagent A — Self-Hosted Feature Inventory
Scan `slugbase/` and produce a flat list of every user-facing feature:
- All routes (check the router config)
- All UI screens and major UI states (check component files)
- All settings / preferences exposed to the user
- Any feature flags or plan-gated UI (mark clearly)
- Skip API endpoints — those are handled by openapi.json

Output: `feature-inventory-self-hosted.md` (internal working file, not published)

### Subagent B — Cloud Delta Inventory
Scan `slugbase-cloud/` and diff against the self-hosted inventory:
- Features added in cloud only
- Features that behave differently (auth, limits, team scoping, billing)
- UI screens that exist only in cloud (team settings, billing portal, plan upgrade, etc.)

Output: `feature-inventory-cloud-delta.md` (internal working file, not published)

### Subagent C — Existing Docs Inventory
Scan `slugbase-docs/` and produce:
- A list of every published docs page (excluding API reference pages — auto-generated from openapi.json, do not touch)
- What feature each page covers
- Whether the page is self-hosted, cloud, or shared

Output: `docs-inventory.md` (internal working file, not published)

---

## Step 1 — Gap Verification (Do This Yourself)

After all three subagents finish, cross-reference the inventories yourself and produce a
**Gap Report** with three sections:

### 1a. Missing Docs
Feature exists in the code but has no docs page.
For each: note whether it's self-hosted only, cloud only, or both.

### 1b. Stale Docs
A docs page describes behaviour, field names, routes, or plan limits that no longer match the code.
Be specific: "Page X says Y but the router shows route Z."

### 1c. Ghost Docs
A docs page describes a feature, setting, or screen that cannot be found in either codebase.

Present the Gap Report to the user before writing anything. If the user activated the skill
with a specific task ("write docs for X"), confirm the gap report first, then focus on their
task — don't go silent and start writing.

---

## Step 2 — Write or Fix Docs

Work through the Gap Report in this priority order (unless the user specifies otherwise):

1. **Ghost docs first** — remove or correct anything factually wrong before adding new content.
2. **Stale docs** — update to match current code.
3. **Missing docs** — write new pages, self-hosted first, then cloud delta.

For each page created or modified, update `documentation.json` immediately — don't batch
this to the end. The rule in `docs-boundaries.mdc` requires `documentation.json` to stay
in sync at all times.

---

## Fundamental Docs Principle: Self-Hosted is Source of Truth

1. Write the **self-hosted version first** — this documents how the open-source core behaves.
2. **Copy it 1:1** into the cloud docs section.
3. Apply only the delta — what actually differs in cloud (auth, multi-tenancy, billing, plan limits, team management, etc.).
4. Never duplicate an explanation that is identical in both variants — link back to the self-hosted page instead.

---

## Language

**English only.** All docs are written in English. No other languages.

---

## Audience & Tone

SlugBase docs serve two overlapping audiences:

- **Power users** — technically comfortable, may want to self-host, understand terms like Docker and environment variables, but are not developers of SlugBase itself.
- **End users** — less technical, just want to manage bookmarks and use slugs effectively.

Write so that both can follow. Concretely:

- Use "you" consistently. Never "the user" or "one should".
- Present tense: "SlugBase saves your bookmarks", not "will save".
- Define jargon inline the first time: "a slug — the short keyword you type in the address bar".
- Short sentences. If a sentence needs two commas, split it.
- No fluff. No "In this article, we will explore…" openers. Start with the answer.
- Explain **what** the UI does and **how** to use it — not **how it works internally**.

---

## What Belongs in Docs vs. What Doesn't

### ✅ Allowed
- Shell commands needed for self-hosted setup (e.g. `docker run ...`, `docker compose up`)
- Environment variable names and their purpose (e.g. `.env` config snippets)
- Step-by-step UI instructions ("Click **Add Bookmark**, fill in the URL, press **Save**")
- Descriptions of what a feature does from the user's perspective
- Callouts explaining cloud vs. self-hosted differences

### ❌ Not Allowed
- Application source code or code snippets showing internal implementation (e.g. how a bookmark is stored in the database, what an API handler does internally)
- Database schemas or query logic
- Internal component names, function names, or file paths from the source repos
- Anything that explains *how SlugBase works under the hood* rather than *how to use it*

The rule of thumb: if a user would need to be a developer of SlugBase to understand it, it doesn't belong in docs. If someone self-hosting just needs to run a command or set a value — that's fine.

---

## Page Structure Template

```markdown
# Page Title

One-sentence description of what this page covers.

## What is [Feature]?           ← skip if obvious from title
## How it works                 ← from the user's perspective, not internal implementation
## Step-by-step / How to use
## Cloud differences            ← only on self-hosted pages that have a cloud delta
## FAQ / Troubleshooting        ← optional, add when common questions exist
```

For **cloud variant pages** that differ from self-hosted, add a callout at the top:

```markdown
> **Cloud vs Self-Hosted:** This page covers the cloud behaviour.
> [See the self-hosted version →](/self-hosted/feature-name)
```

---

## Key Concepts — Use These Terms Consistently

| Term | Meaning |
|---|---|
| **Bookmark** | A saved URL with a title, optional tags, and optional slug |
| **Slug** | A short keyword that forwards the browser to a bookmark's URL — optional, not every bookmark needs one |
| **Search engine shortcut** | The browser mechanism (e.g. `go [slug]`) that makes slugs work |
| **Cloud** | The hosted version at slugbase.app |
| **Self-hosted** | Running SlugBase on your own server |

Slugs are **optional**. Never imply every bookmark requires one. Slugs are a power feature;
bookmarks are the baseline.

---

## Cloud-Only Delta Checklist

When porting self-hosted docs to cloud, check each item and add a callout only where it applies:

- **Authentication** — Cloud uses email/password + optional SSO; self-hosted may differ
- **Multi-tenancy** — Cloud has organizations/teams; self-hosted is single-tenant
- **Plan limits** — Cloud enforces quotas per plan (see Plans Reference below)
- **Billing** — Cloud only: Stripe, plan switching, Early Supporter lifetime deal
- **Setup** — Self-hosted requires Docker/server; cloud has no setup step
- **API keys** — Both have API access; cloud scopes keys per organization
- **Data export** — Both support it; cloud adds a "delete account" flow

---

## Plans Reference

| Plan | Price | Bookmark limit | Notes |
|---|---|---|---|
| Free | €0 | 50 | Cloud only |
| Personal | €3/mo or €30/yr | Unlimited | Cloud only |
| Team | €9/mo base | Unlimited | Up to 5 users; €2/mo per extra user |
| Early Supporter | €69 one-time | Unlimited | Lifetime, limited availability; via contact form |
| Self-hosted | Free | Unlimited | AGPL, own infrastructure |

---

## What to Verify Against Code Before Writing

- **Feature exists** — is it in the router and UI? Don't document roadmap items.
- **Plan gating** — which plan actually unlocks this feature?
- **Field names & labels** — use the exact label shown in the UI (check `en.json` i18n keys).
- **Routes** — use actual routes from the router config, not guesses.
- **Support flow** — cloud support goes via the contact form; code bugs go to GitHub Issues.

---

## documentation.json Maintenance

`documentation.json` is documentation.ai's navigation and page registry.
Keep it in sync with every change — immediately per page, not batched at the end:

- Adding a page → add its entry right after creating the file.
- Removing a page → remove its entry right away.
- Renaming or moving a page → update the path in the entry.
- **Never** touch API reference entries — those are already registered correctly.

Refer to `docs-boundaries.mdc` for the exact schema and required fields.

---

## Formatting Rules

- `#` for page title, `##` for sections, `###` for subsections — nothing deeper.
- Code blocks with language tag for shell commands and `.env` snippets only.
- Callouts:
  - `> **Note:**` — neutral important info
  - `> **Cloud only:**` — not available self-hosted
  - `> **Self-hosted only:**` — not available in cloud
  - `> **Tip:**` — helpful but optional
- Numbered lists for sequential steps. Bullet lists for non-ordered items.
- No nested lists beyond one level.
- Internal links: root-absolute paths — `[Plans and limits →](/cloud/plans-and-limits)`.
- External links: standard markdown — documentation.ai handles `target="_blank"` automatically.

---

## API Reference — Hands Off

The API reference pages for both self-hosted and cloud are auto-generated from `openapi.json`
and are already correctly registered in `documentation.json`. Do not:

- Create or edit API reference markdown files
- Modify their `documentation.json` entries
- List them as gaps in the Gap Report

---

## Anti-Patterns

- ❌ Skip the gap analysis and go straight to writing
- ❌ Document a feature that doesn't exist in the codebase
- ❌ Include application source code or internal implementation details
- ❌ Explain how SlugBase works internally — only explain how to use it
- ❌ Say "slug" when you mean "bookmark", or vice versa
- ❌ Imply slugs are required for every bookmark
- ❌ Mix cloud and self-hosted instructions on one page without clear callouts
- ❌ Write in passive voice — always active
- ❌ Write "please" — just be direct
- ❌ Add or modify any API reference pages
- ❌ Batch-update `documentation.json` at the end — do it per page, immediately
- ❌ Write docs in any language other than English
- ❌ Invent plan limits — always verify against the Plans Reference table or the code