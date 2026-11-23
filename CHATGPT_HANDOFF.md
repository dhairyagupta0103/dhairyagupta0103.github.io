# ChatGPT handoff

## What this project is for

This repository is meant to hold a personal website that a non-technical young person can maintain by asking ChatGPT for changes in ordinary language. The homepage must render from a configuration file; the requester should not need to edit HTML, CSS or JavaScript.

## Two preview modes are required

1. **AI-safe preview:** built from the exact PR commit using only a fictional sample configuration committed to the public repository. ChatGPT and automated browser tests inspect this version.
2. **Personal review preview:** built from the same PR commit but loads the real personal configuration from a separate private source. It is accessible only to the nephew/owner after authentication. ChatGPT and automated tests must not receive its URL, credentials, cookies, config, response bodies or screenshots.

See `PREVIEW_ARCHITECTURE.md` for the full design and acceptance criteria.

## For each new ChatGPT session

1. Read `CHATGPT_INSTRUCTIONS.md`, `SESSION_LOG.md` and `PREVIEW_ARCHITECTURE.md`.
2. Inspect the current repository, latest `main`, and open pull requests.
3. Inspect only the AI-safe preview when using browser tools. Never request or open the authenticated personal preview.
4. Make technical decisions without asking the user to choose file names or implementation details.
5. Create a task branch from the latest approved base; never work directly on `main`.
6. Make and test the change against the fictional sample configuration.
7. Update `SESSION_LOG.md` with actual changes, PR link/status and next handoff.
8. Open a pull request to `main`. Do not merge it; the owner must approve publication.

## Privacy boundary

The public repository must contain only fictional sample content. The real configuration must live outside the public repository and outside AI-readable PR files. A public website's rendered content is public to anyone who can open it; if personal content must be restricted, require authentication for the real-content view.

Never pass private content or credentials to a PR build script that can be changed by an unreviewed PR. Do not place secrets in browser code, logs, screenshots or test artifacts.

## Current limitation

There is not yet a configured preview host, private content store, protected personal preview or universal ChatGPT-to-GitHub automation. The current Content Studio is only a local JSON import/export helper. A GitHub connector configured in one ChatGPT account does not automatically transfer to the nephew's account.
