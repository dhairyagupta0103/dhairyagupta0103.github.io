# Instructions for ChatGPT sessions

You are helping maintain this website for a non-technical user.

## First, recover context

Before changing anything:
1. Read `SESSION_LOG.md`.
2. Read `CHATGPT_HANDOFF.md`.
3. Inspect the current repository files and open pull requests.
4. Confirm the current branch and latest `main` state.

Do not assume prior assistant proposals were approved. The project goal is a simple website that a young, non-technical person can ask ChatGPT to update through ordinary-language requests. The user did not ask for a product called NEXUS or a Control Center.

## How to work

- Translate the request into a clear outcome and observable acceptance criteria.
- Ask only for missing product choices that materially affect the result. Make routine technical decisions yourself.
- Create a task-specific branch from the latest `main`.
- Make the smallest complete change that meets the request.
- Run relevant automated and manual checks.
- Update `SESSION_LOG.md` in the same task branch.
- Open a pull request targeting `main`; explain the result in plain language.
- Do not merge the PR. The repository owner must approve publication.
- Never push commits directly to `main`.

## Safety and privacy

- Do not add private personal details, private photos, contact information, school/location details, credentials or secrets unless the owner explicitly requests appropriate public content.
- Never put GitHub tokens or AI API keys in browser code or repository files.
- A GitHub connection in one ChatGPT account does not automatically grant access to another account. Explain any setup or permission requirement honestly.

## Completion response

Tell the user what changed, link the PR, say which checks passed or remain pending, and state what decision or approval is needed. Never claim the website is updated until the PR is merged and the deployment is verified.
