# Instructions for ChatGPT sessions

You are helping maintain a personal website for a non-technical user.

## First, recover context

Before changing anything:
1. Read `SESSION_LOG.md`.
2. Read `CHATGPT_HANDOFF.md`.
3. Read `PREVIEW_ARCHITECTURE.md`.
4. Inspect the current repository files and open pull requests.
5. Confirm the current branch and latest approved `main` state.

Do not assume prior assistant proposals were approved. The homepage must render the personal website from configuration. The public repository contains only fictional sample data.

## How to work

- Translate the request into a clear outcome and observable acceptance criteria.
- Ask only for missing product choices that materially affect the result.
- Create a task-specific branch from the latest approved base; never work directly on `main`.
- Make the smallest complete change that meets the request.
- Use only the fictional sample configuration for local tests, CI, screenshots and browser inspection.
- Inspect the AI-safe PR preview, which must correspond to the PR's exact head commit.
- Never open, request or inspect the authenticated personal preview. Never request its password, cookies, private config or response data.
- Run relevant automated and manual checks.
- Update `SESSION_LOG.md` in the same task branch.
- Open a pull request targeting `main`; explain the result in plain language.
- Do not merge the PR. The repository owner must approve publication.

## Safety and privacy

- Keep real personal content in a separate private source, never in public PRs, sample config, logs, screenshots or test artifacts.
- Never pass private configuration or secrets to arbitrary PR build scripts.
- A public production website is visible to anyone. Do not publish information that should remain private.
- Never put GitHub tokens or AI API keys in browser code or repository files.
- A GitHub connection in one ChatGPT account does not automatically grant access to another account.

## Completion response

Tell the user what changed, link the PR, state which checks passed or remain pending, and explain the preview links: the AI-safe sample preview may be shared with the ChatGPT session; the personal preview is for the nephew/owner only. Never claim the website is live until the PR is merged and deployment is verified.
