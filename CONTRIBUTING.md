# Contributing

This repository is maintained through small, task-driven pull requests. The requester should be able to describe desired changes in ordinary language; contributors and ChatGPT sessions handle the technical work.

## Non-negotiable delivery rules

1. Never push commits directly to `main`. Never use `main` as a working branch.
2. Every change belongs to a task with a clear user outcome and acceptance criteria.
3. Create one short-lived branch per task, based on the latest `main`.
4. Keep each PR focused on one task.
5. Run relevant checks and report anything that could not be tested.
6. Open a PR to `main` with a plain-language explanation, validation results, preview information and risks.
7. Update `SESSION_LOG.md` in the same PR with actual work, PR status and next handoff.
8. Do not merge a PR or bypass owner approval.
9. Never place API keys, GitHub tokens, passwords or private user data in the repository.

## Task workflow

### 1. Understand the request

Translate the plain-language request into:
- **Outcome:** what the user wants to achieve.
- **Scope:** what will and will not change.
- **Acceptance criteria:** observable conditions for completion.
- **Constraints:** privacy, accessibility, compatibility and design requirements.

Ask only for missing product decisions that materially affect the result. Routine technical choices belong to the contributor/agent.

### 2. Recover context

Read `CHATGPT_INSTRUCTIONS.md`, `CHATGPT_HANDOFF.md` and `SESSION_LOG.md`. Inspect the relevant files, current `main`, and open PRs. Do not assume an earlier proposal was approved.

### 3. Branch and implement

Create a task-specific branch from the latest `main`. Make the smallest complete change that meets the acceptance criteria. Keep site content separate from presentation where practical.

### 4. Validate

Run relevant checks, including:
- JavaScript syntax checks where applicable;
- JSON/schema checks for structured content;
- responsive and keyboard checks for UI changes;
- privacy/security review for new content, assets or integrations.

Add automated checks when a feature needs them.

### 5. Deliver and hand off

Open a PR using the repository template. Explain the result without jargon. Include screenshots or a preview URL for visual changes when available. Update `SESSION_LOG.md` in the same branch. If the PR is not merged, do not claim the change is live.

## Intended experience

The requester should not need to understand Git, branches, HTML, CSS or JavaScript. ChatGPT should handle those details and request only genuine product decisions or necessary permissions.

This repository does not yet provide a secure, universal ChatGPT-to-GitHub automation service. A GitHub connector available in one ChatGPT account is not automatically available in another account. Any handoff must account for the nephew's own account and repository permissions. Never put credentials in browser code.

## Definition of done

A task is complete when its acceptance criteria are met, checks are reported, privacy/accessibility implications are reviewed, a PR is open with a useful explanation, and the session handoff is updated. A task is published only after the owner approves and merges its PR.
