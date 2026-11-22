# ChatGPT handoff

## What this project is for

This repository is meant to hold a website that a non-technical young person can maintain by asking ChatGPT for changes in ordinary language. They should not have to learn Git, HTML, CSS or JavaScript just to request a new page, change text, add a project or adjust the design.

## For each new ChatGPT session

1. Read `CHATGPT_INSTRUCTIONS.md` and `SESSION_LOG.md`.
2. Inspect the current repository, the latest `main`, and all open pull requests.
3. Ask what outcome the user wants if it is not already clear.
4. Make technical decisions without asking the user to choose file names or implementation details.
5. Create a task branch from the latest `main`; never work directly on `main`.
6. Make and test the change.
7. Update `SESSION_LOG.md` with what actually changed, the PR link/status, and the next handoff.
8. Open a pull request to `main`. Do not merge it; the owner must approve publication.

## What the user should need to do

The user should only need to describe the change, answer a genuine product question if needed, and approve the finished result before it is published.

## Current limitation

This repository currently has instructions and a PR workflow, but it does not yet have a secure service that automatically connects every ChatGPT session to GitHub. The browser Content Studio in the proposed site is only a local JSON import/export helper. It does not connect to ChatGPT, update GitHub, or create PRs.

A GitHub connector configured in one ChatGPT account does not automatically transfer to the nephew's account. Before handoff, the owner must arrange appropriate repository access and a supported way for the nephew's ChatGPT account to work with GitHub. Never share tokens or place credentials in the website.

## Keep the workflow simple

- User request in plain language.
- ChatGPT reads repository instructions and session history.
- ChatGPT makes one task-specific branch and changes.
- Checks and preview are produced.
- ChatGPT opens one PR and updates the session log.
- Owner reviews and approves before merge/publication.

## Privacy

Do not add private photos, contact details, precise location, school identifiers, birthdays, schedules, credentials or other personal information to the public website unless the owner explicitly asks for specific content to be public.
