# Project session history

This file is the durable handoff between ChatGPT sessions. Update it in every task PR. Keep entries concise, factual and useful to the next session. Do not record personal or sensitive information.

## The actual goal

Create a website setup that can be handed to a 12-year-old. They should be able to open a ChatGPT session, say what they want changed in ordinary language, and have ChatGPT handle the technical work. A later ChatGPT session must be able to understand the project and continue from the repository's instructions and history.

The public homepage should be a personal website rendered from configuration. ChatGPT and automated checks should use a fictional sample configuration, never the real personal content.

The user did not request a product called NEXUS, a generic digital canvas, or a separate Control Center. Those were assistant-invented directions and are not agreed requirements.

## Current repository state

- **Default branch:** `main`.
- **Current `main` baseline:** restored to commit `401781a`, immediately before assistant-authored redesign work. This is the earlier site version; review privacy implications before treating it as the final published state.
- **Assistant-authored work:** held on [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2), not merged.
- **Safety copy of previous main tip:** branch `archive/pre-pr-main-2026-11-22`.
- **Proposed site files on PR #2:** `index.html`, `assets/styles.css`, `assets/app.js`, `content/site.json`, and `EDITING.md`.
- **Workflow files on PR #2:** `CONTRIBUTING.md`, `TASK_TEMPLATE.md`, `.github/PULL_REQUEST_TEMPLATE.md`, and `.github/workflows/validate.yml`.
- **AI integration status:** there is no working ChatGPT-to-GitHub automation service in this repository. The current Content Studio is only a local browser import/export tool. It does not connect to ChatGPT or write to GitHub.
- **Preview status:** no PR preview hosting or browser-inspection pipeline is configured yet. See `PREVIEW_ARCHITECTURE.md` for the required two-view design.
- **Important account limitation:** a GitHub connection available in one ChatGPT account/session is not automatically available to the nephew in a separate account. The handoff workflow must explicitly account for the nephew's own access and permissions.

## Non-negotiable delivery rules

- Never push assistant changes directly to `main`.
- Every task is scoped, implemented on its own branch, validated, and delivered through a PR to `main`.
- Do not merge a PR without the repository owner's approval.
- Update this file in the same PR with what changed, its PR/status, remaining work and the next handoff.
- Make technical decisions autonomously where safe; ask only for genuine product choices or necessary permission.
- Never expose GitHub tokens, API keys, passwords or private data in browser code or repository files.

## Next focus

1. Refactor the homepage into a personal website renderer driven entirely by configuration, using fictional sample content in the public repository.
2. Keep the real personal configuration in a separate private source, never in public PRs or AI-readable test artifacts.
3. Build an AI-safe preview for every PR and browser-inspection/Playwright checks against the sample configuration.
4. Build a separate authenticated personal preview from the same PR commit so the nephew can inspect actual content before merge.
5. Evaluate and configure preview hosting/access control; Cloudflare Pages + Access is the current candidate, not yet configured.
6. Arrange the nephew's own ChatGPT/GitHub access without sharing credentials.

## Session entries

| Session / task | Date (UTC) | Delivered | PR / status | Next handoff |
|---|---|---|---|---|
| Assistant-authored website redesign | 2026-11-22 | Created a generic NEXUS-branded website, themes, content JSON and local import/export studio; removed personal image files from the current tree. This was not the requested end product and was initially committed directly to `main`. | Included in [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. | Replace the invented generic canvas with the requested config-driven personal website. |
| PR workflow and session handoff | 2026-11-22 | Added PR-first contribution rules, task template, session log, PR template and basic CI validation. | Included in [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. PR #1 was closed as superseded. | Make ChatGPT-session handoff usable and preserve owner approval. |
| History cleanup | 2026-11-22 | Restored `main` to the pre-assistant baseline and preserved the former main tip on `archive/pre-pr-main-2026-11-22`. | PR #2 contains the assistant-authored commit history; open, not merged. | Review deployment/privacy implications and PR contents before approval. |
| Dual-preview requirements | 2026-11-23 | Recorded the requirement for a configuration-driven personal homepage, fictional sample data for AI/browser inspection, and a separate authenticated real-content preview built from the same PR commit. No hosting or private content integration is configured yet. | Documented on [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. | Implement the config-driven sample portfolio and safe browser preview first; then configure the protected personal preview. |

## How every session must finish

Add a row recording the actual work, PR URL and current state, tests performed, unresolved decisions/risks, and the next useful task. Never say a change is live unless its PR has been merged and deployment verified.
