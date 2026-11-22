# Project session history

This file is the durable handoff between ChatGPT sessions. Update it in every task PR. Keep entries concise, factual and useful to the next session. Do not record personal or sensitive information.

## The actual goal

Create a website setup that can be handed to a 12-year-old. They should be able to open a ChatGPT session, say what they want changed in ordinary language, and have ChatGPT handle the technical work. A later ChatGPT session must be able to understand the project and continue from the repository's instructions and history.

The user did not request a product called NEXUS, a generic digital canvas, or a separate Control Center. Those were assistant-invented directions and are not agreed requirements.

## Current repository state

- **Default branch:** `main`.
- **Current `main` baseline:** restored to commit `401781a`, immediately before assistant-authored redesign work. This is the earlier site version; review privacy implications before treating it as the final published state.
- **Assistant-authored work:** held on [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2), not merged.
- **Safety copy of previous main tip:** branch `archive/pre-pr-main-2026-11-22`.
- **Proposed site files on PR #2:** `index.html`, `assets/styles.css`, `assets/app.js`, `content/site.json`, and `EDITING.md`.
- **Workflow files on PR #2:** `CONTRIBUTING.md`, `TASK_TEMPLATE.md`, `.github/PULL_REQUEST_TEMPLATE.md`, and `.github/workflows/validate.yml`.
- **AI integration status:** there is no working ChatGPT-to-GitHub automation service in this repository. The current Content Studio is only a local browser import/export tool. It does not connect to ChatGPT or write to GitHub.
- **Important account limitation:** a GitHub connection available in one ChatGPT account/session is not automatically available to the nephew in a separate account. The handoff workflow must explicitly account for the nephew's own access and permissions.

## Non-negotiable delivery rules

- Never push assistant changes directly to `main`.
- Every task is scoped, implemented on its own branch, validated, and delivered through a PR to `main`.
- Do not merge a PR without the repository owner's approval.
- Update this file in the same PR with what changed, its PR/status, remaining work and the next handoff.
- Make technical decisions autonomously where safe; ask only for genuine product choices or necessary permission.
- Never expose GitHub tokens, API keys, passwords or private data in browser code or repository files.

## Next focus

1. Define the simplest real workflow for a nephew to request a website change from his own ChatGPT sessions.
2. Add clear repository instructions that every new ChatGPT session can read first, including how to inspect history, make a task branch, test changes, open a PR and update this log.
3. Determine the practical GitHub access/authorization setup for the nephew. Do not assume this account's connector access transfers to him.
4. Make the public website direction match the owner's intended website; do not continue the invented NEXUS/Control Center direction without explicit approval.
5. Add preview and automated checks so the nephew can see proposed changes before they are published.

## Session entries

| Session / task | Date (UTC) | Delivered | PR / status | Next handoff |
|---|---|---|---|---|
| Assistant-authored website redesign | 2026-11-22 | Created a generic NEXUS-branded website, themes, content JSON and local import/export studio; removed personal image files from the current tree. This was not the requested end product and was initially committed directly to `main`. | Included in [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. | Reassess against the actual ChatGPT handoff goal; do not assume NEXUS or a Control Center is wanted. |
| PR workflow and session handoff | 2026-11-22 | Added PR-first contribution rules, task template, session log, PR template and basic CI validation. | Included in [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. PR #1 was closed as superseded. | Build the simple, genuinely usable ChatGPT-session handoff workflow. |
| History cleanup | 2026-11-22 | Restored `main` to the pre-assistant baseline and preserved the former main tip on `archive/pre-pr-main-2026-11-22`. | PR #2 contains the assistant-authored commit history; open, not merged. | Review deployment/privacy implications and PR contents before approval. |

## How every session must finish

Add a row recording the actual work, PR URL and current state, tests performed, unresolved decisions/risks, and the next useful task. Never say a change is live unless its PR has been merged and deployment verified.
