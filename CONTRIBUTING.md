# Contributing to NEXUS

NEXUS is maintained through small, task-driven pull requests. Contributors and AI sessions must follow the same process.

## Non-negotiable delivery rules

1. Never push commits directly to `main`. Never use `main` as a working branch.
2. Every change belongs to a task with a user-visible outcome and acceptance criteria.
3. Create one short-lived branch per task, based on the latest `main`.
4. Keep the diff focused. Do not bundle unrelated improvements.
5. Run the checks locally or in the available environment; GitHub Actions must pass before merge.
6. Open a pull request to `main` with the task, rationale, changes, tests, risks and preview information.
7. Update `SESSION_LOG.md` in the same PR with delivered work and the next handoff.
8. Do not merge your own PR or bypass required review/approval.
9. Never place API keys, GitHub tokens, passwords or private user data in the repository.

## Task-driven workflow

### 1. Understand the request
Translate plain language into:
- **Outcome:** what the user wants to achieve.
- **Scope:** what will and will not change.
- **Acceptance criteria:** observable conditions for completion.
- **Constraints:** privacy, accessibility, compatibility and design requirements.

Ask the user only for missing product decisions that materially affect the result. Technical implementation choices are the contributor/agent's responsibility.

### 2. Inspect before editing
Read `SESSION_LOG.md`, `EDITING.md`, the relevant code and open PRs. Check whether another task is already changing the same area. Do not overwrite newer work.

### 3. Branch
Use a task-oriented name such as:
- `feat/project-gallery`
- `fix/mobile-navigation`
- `chore/session-governance`

Branch from the latest `main`.

### 4. Implement and validate
Make the smallest complete change. Keep content in `content/site.json` when possible. Run:
- `node --check assets/app.js`
- JSON/schema checks for `content/site.json`
- responsive and keyboard checks for UI changes
- privacy review for any new content, assets or integrations

Add or update automated checks when the feature needs them.

### 5. Deliver a PR
Use the repository PR template. Explain the user outcome in plain language. Include screenshots or a preview URL for visual changes when available. Clearly identify anything not tested.

### 6. Handoff
Update `SESSION_LOG.md` in the PR. Record the PR link and status, actual delivered work, open risks and next focus. If the PR is not merged, do not claim the change is live.

## Future non-technical workflow

The intended Control Center will accept plain-language requests and automate task shaping, branch creation, implementation, tests, preview deployment, PR creation and session logging. It must still preserve the PR review/approval boundary. Browser clients must never hold GitHub App private keys, installation tokens or AI provider secrets.

## Definition of done

A task is done when its acceptance criteria are met, checks pass, privacy and accessibility implications are reviewed, a PR is open with a useful description, and the session handoff is updated. A task is published only after its PR is approved and merged.
