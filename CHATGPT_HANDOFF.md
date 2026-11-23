# ChatGPT handoff

## What this project is

A friendly creative workspace for a young creator. It supports quick ideas and POCs, ongoing projects, work-in-progress updates, progress notes and a curated portfolio. The portfolio is a showcase of selected work, not the entire website.

The creator uses ordinary language. ChatGPT sessions manage the code, tests, branches, PRs and previews.

## Normal working loop

1. Understand the idea and make the smallest useful first version.
2. Decide whether it is a throwaway experiment, ongoing project, public work-in-progress or portfolio candidate.
3. Choose where artefacts belong: public repo, temporary task branch or private/less-accessible storage.
4. Create one task PR and a preview from its latest commit.
5. Let the creator try it and describe changes in plain language.
6. Continue in the same PR, refreshing the preview after each update.
7. The creator explicitly confirms when it looks good and is ready for promotion.
8. The owner reviews and approves before merge/publication.

A prototype may be discarded or restarted. Do not merge an experiment just to keep it.

## Current first version

The PR branch contains a fictional **Little Big Lab** sample site:
- Workbench with project cards and filters for experiments, building and in-progress work.
- Keyboard-accessible project detail dialogs.
- Field Notes timeline.
- Curated Showcase.
- A low-pressure invitation to start with any idea.
- Fictional sample projects and updates only.

The public test data is in `content/site.sample.json`. The page loads that file. Playwright checks rendering, project filters, keyboard details and mobile overflow. GitHub Actions runs the browser checks and stores sample-only artifacts.

## For each session

1. Read `CHATGPT_INSTRUCTIONS.md`, `SESSION_LOG.md` and `PREVIEW_ARCHITECTURE.md`.
2. Inspect current main, open PRs and current task branch.
3. Continue an existing task in its PR for revisions; otherwise create a task branch and PR.
4. Use fictional sample data for AI/browser inspection.
5. Never open or request a private authenticated preview.
6. Keep creator-facing steps simple: explain what to try and accept ordinary-language feedback.
7. Update `SESSION_LOG.md` in the same PR.
8. Never merge. Wait for creator readiness confirmation and owner approval.

## Privacy and safety

Do not put private personal details, original personal images, secrets, credentials or private datasets in public Git history, logs, screenshots or test traces. Selected images and details can be published after intentional review; avoid making normal creativity unnecessarily restrictive. A public website is visible to anyone. Private content requires real authentication, not an obscure URL.

Keep guidance age-appropriate. Ask for adult/owner help when a choice has significant privacy, account-security or safety implications.

## Preview state

A commit-pinned raw.githack URL may be used for the first sample-only preview if verified. GitHub Actions browser tests also produce sample-only screenshots/artifacts. No dedicated preview host, private content store or authenticated personal preview is configured yet. Never imply otherwise.
