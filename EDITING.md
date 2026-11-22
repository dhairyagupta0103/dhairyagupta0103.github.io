# ChatGPT website handoff guide

## Purpose

This repository is intended to be maintainable through ordinary-language requests in ChatGPT. A non-technical person should be able to say what they want changed; ChatGPT should handle the code, checks, task branch, pull request and session handoff.

This is a target workflow, not a fully connected automation yet.

## How a new ChatGPT session should start

1. Open the repository: https://github.com/dhairyagupta0103/dhairyagupta0103.github.io
2. Ask ChatGPT to read `CHATGPT_INSTRUCTIONS.md` and `SESSION_LOG.md` before making changes.
3. Describe the desired result in plain language. The requester does not need to name files or explain HTML, CSS or JavaScript.
4. ChatGPT should inspect the current branch, existing pull requests and relevant files before editing.
5. ChatGPT should make the change on a task-specific branch, run relevant checks, update `SESSION_LOG.md`, and open a PR to `main`.
6. The owner reviews and approves the PR before it is merged. The website is not updated just because a PR was opened.

## What the requester should experience

The requester should only need to:
- explain the outcome they want;
- answer a genuine design/content question if the answer cannot be safely inferred;
- review the preview or screenshots where available;
- approve the proposed change before publication.

ChatGPT should choose technical implementation details and explain the result in simple language.

## Important current limitation

The repository does not yet contain a secure service that automatically connects any ChatGPT account to GitHub. The browser Content Studio is a local JSON import/export helper only; it does not talk to ChatGPT, create branches, or open PRs.

A GitHub connector connected to one ChatGPT account is not automatically available to another person or another account. Before handing this to the nephew, set up the appropriate GitHub repository access and a supported ChatGPT-to-GitHub workflow for the account he will use. Never share personal access tokens or put credentials in website files.

## Delivery rules

- All assistant-authored changes go through a task-specific branch and PR to `main`.
- Never commit directly to `main`.
- Never merge without owner approval.
- Update `SESSION_LOG.md` in every task PR.
- Run checks and state clearly what was or was not tested.
- Keep private details and credentials out of public website content and repository files.

## Project status

See `SESSION_LOG.md` for current state, previous work, open PRs, risks and next focus.
