# Project session history

This file is the durable handoff between ChatGPT sessions. Update it in every task PR. Keep entries concise, factual and useful to the next session. Do not record personal or sensitive information.

## The actual goal

Create a welcoming, low-friction creative workspace for a young creator. It is not just a portfolio. They should be able to try ideas, build small or large projects, make disposable POCs, keep useful work, publish selected experiments, track progress and later promote suitable projects to a curated portfolio.

The creator describes changes in ordinary language. ChatGPT sessions manage the technical work and Git workflow. The creator should be able to review a preview and give feedback without needing to understand branches, commits, HTML, CSS, JavaScript or PRs.

## Product principles

- Make it easy to start small; no formal planning required for a POC.
- Let experiments grow, pause, be discarded/restarted, or become ongoing projects.
- Support public work-in-progress and project updates as well as a curated portfolio.
- Use one task PR as the iteration space: preview, feedback, revise, preview again.
- A preview is not permission to publish. Creator confirms readiness; owner approves merge/promotion.
- Sessions choose sensible storage: public repo for shareable source/assets, temporary branches for disposable work, private storage for sensitive/personal artefacts.
- Be careful with personal details and images without making ordinary creativity feel restricted.
- Keep advice age-appropriate and ask for adult/owner help for consequential privacy, security or safety decisions.

The user did not request a product called NEXUS, a generic digital canvas, or a separate Control Center. Those were assistant-invented directions and are not agreed requirements.

## Current repository state

- **Default branch:** `main`.
- **Current `main` baseline:** restored to commit `401781a`, immediately before assistant-authored redesign work. This is the earlier site version; review privacy implications before treating it as the final published state.
- **Assistant-authored work:** held on [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2), not merged.
- **Safety copy of previous main tip:** branch `archive/pre-pr-main-2026-11-22`.
- **Proposed site files on PR #2:** `index.html`, `assets/styles.css`, `assets/app.js`, `content/site.json`, and `EDITING.md`.
- **Workflow files on PR #2:** `CONTRIBUTING.md`, `TASK_TEMPLATE.md`, `.github/PULL_REQUEST_TEMPLATE.md`, and `.github/workflows/validate.yml`.
- **AI integration status:** there is no working ChatGPT-to-GitHub automation service in this repository. The current Content Studio is only a local browser import/export tool. It does not connect to ChatGPT or write to GitHub.
- **Preview status:** no PR preview hosting or browser-inspection pipeline is configured yet. See `PREVIEW_ARCHITECTURE.md` for the intended AI-safe and personal-review previews.
- **Important account limitation:** a GitHub connection available in one ChatGPT account/session is not automatically available to another account.

## Non-negotiable delivery rules

- Never push assistant changes directly to `main`.
- Every coherent task is scoped, implemented on a task branch, validated and delivered through a PR to `main`.
- Keep iterating on the same PR for revisions to the same task; refresh its preview after every commit.
- Do not merge until the creator explicitly confirms the preview looks good and is ready for promotion, and the repository owner approves.
- Abandoned POCs may be closed/discarded; do not merge them just to preserve their work.
- Update this file in the same task PR with actual changes, PR/status, tests, risks and next handoff.
- Make routine technical decisions autonomously; ask only for genuine product choices, required permission or consequential privacy/safety decisions.
- Never expose credentials, tokens or private data in browser code, repository files, logs, screenshots or test artefacts.

## Next focus

1. Replace the generic NEXUS direction with the actual creative-workspace model: projects, experiments/POCs, work-in-progress updates and a curated portfolio.
2. Design a lightweight project data model and fictional sample content in the public repository.
3. Build an AI-safe PR preview and browser checks using sample data only.
4. Define the creator-facing PR preview/feedback loop so the same PR can be revised repeatedly without Git complexity.
5. Configure a separate authenticated personal preview using a trusted process that does not expose private content to PR scripts or AI checks.
6. Add simple keep/discard/archive/promote paths that do not publish without explicit confirmation and owner approval.

## Session entries

| Session / task | Date (UTC) | Delivered | PR / status | Next handoff |
|---|---|---|---|---|
| Assistant-authored website redesign | 2026-11-22 | Created a generic NEXUS-branded website, themes, content JSON and local import/export studio; removed personal image files from the current tree. This was not the requested end product and was initially committed directly to `main`. | Included in [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. | Replace the invented generic canvas with the requested creative workspace. |
| PR workflow and session handoff | 2026-11-22 | Added PR-first contribution rules, task template, session log, PR template and basic CI validation. | Included in [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. PR #1 was closed as superseded. | Preserve owner approval and make session handoff usable. |
| History cleanup | 2026-11-22 | Restored `main` to the pre-assistant baseline and preserved the former main tip on `archive/pre-pr-main-2026-11-22`. | PR #2 contains the assistant-authored commit history; open, not merged. | Review deployment/privacy implications and PR contents before approval. |
| Dual-preview requirements | 2026-11-23 | Recorded the requirement for fictional sample data in AI/browser inspection and a separate authenticated real-content preview from the same PR commit. | Documented on [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. | Implement and test both preview paths. |
| Creative workspace clarification | 2026-11-23 | Clarified that the site supports a broad project journey: quick POCs, experiments, ongoing projects, public work-in-progress, progress tracking and later portfolio promotion. Added same-PR iteration, discard/restart, flexible artefact storage and age-appropriate privacy/safety principles to the session guidance. | Documented on [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2); open, not merged. | Implement a lightweight project model and sample-driven experience before choosing hosting details. |

## How every session must finish

Add a row recording actual work, PR URL and current state, tests performed, unresolved decisions/risks and the next useful task. Never say a change is live unless its PR has been merged and deployment verified.
