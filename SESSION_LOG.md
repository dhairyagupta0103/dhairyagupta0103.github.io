# NEXUS session history

This file is the durable handoff between work sessions. Update it in every task PR. Keep entries concise, factual and useful to the next contributor. Do not record personal or sensitive user information.

## Current project state

- **Product direction:** NEXUS is the platform/engine; the public website is a configurable experience powered by it. A personal portfolio is one possible site profile, not the only purpose.
- **Current public experience:** generic NEXUS starter canvas with four visitor-selectable visual themes.
- **Content source of truth:** `content/site.json`.
- **Design and rendering:** `assets/styles.css`, `assets/app.js`, `index.html`.
- **Editing guide:** `EDITING.md`.
- **Delivery rule:** all future changes go through task-scoped branches and pull requests targeting `main`. Do not commit directly to `main`.
- **AI status:** AI-assisted editing is currently a guided prompt + portable JSON workflow. There is no connected AI provider, authenticated GitHub write service, automatic PR creator, preview deployment or control center yet.

## Next focus

1. Define and build the private NEXUS Control Center as the management interface, separate from the public site.
2. Design the request-to-PR orchestration service: task intake, repository context, isolated workspaces, checks, preview, PR creation and session-log update.
3. Add safe GitHub authentication using a server-side GitHub App; never expose tokens or AI keys in browser code.
4. Add PR preview deployments and automated validation/accessibility checks.
5. Decide how approvals and repository branch protection are configured before enabling merges.

## Session entries

| Session / task | Date (UTC) | Delivered | PR / status | Next handoff |
|---|---|---|---|---|
| Initial NEXUS foundation | 2026-11-22 | Replaced the birthday-oriented homepage with a generic, responsive NEXUS canvas; added four themes, content JSON, browser Content Studio import/export and editing guide; removed old profile/gallery files from the current tree. This work was committed directly to `main` before the PR-only policy was established. | Historical direct-to-main commits; not a PR. | Establish PR-first workflow and session handoff. |
| Governance foundation | 2026-11-22 | Add task-driven contribution rules, PR template, session log and basic CI validation. | In progress: this PR. | Build Control Center and secure AI-to-PR orchestration. |

## How to update this log

At the end of each session, add one row with:
- task/session identifier and date;
- what actually changed (not intended work);
- PR URL/number and current state;
- remaining work, risks or the next useful focus.

If work is not merged, say so. Do not describe proposed work as delivered. Keep the top-level "Current project state" and "Next focus" accurate after merged changes.
