# ChatGPT handoff

## What this project is for

This is a low-friction creative workspace for a young creator. It should help them try ideas, build small and large projects, make proof-of-concept experiments, share selected work, track progress and gradually curate a portfolio.

It is more than a portfolio. The portfolio is a curated destination for projects that are ready to represent the creator; it should not prevent unfinished experiments and playful exploration elsewhere on the site.

The creator should be able to describe what they want in ordinary language. ChatGPT sessions handle the implementation and repository workflow. The creator should not need to understand Git or code to keep moving.

## The normal working loop

1. The creator describes an idea or asks for a change.
2. The session decides whether it is a quick experiment, ongoing project, public work-in-progress or portfolio candidate.
3. The session chooses a sensible place for the work: public repository, private/less-accessible storage, or temporary task branch.
4. The session creates or updates one task PR and builds a preview from its latest commit.
5. The creator opens the preview, tries it and says what they want changed.
6. The session continues iterating in that same PR and refreshes the preview.
7. When the creator says it looks good and is ready for promotion, the session prepares it for owner review.
8. The owner approves and merges before anything is promoted to the live site.

A preview is not publication approval. Never merge automatically.

## Experiment-friendly project lifecycle

Projects can begin as tiny POCs. They do not need to be polished or permanent. A project may be:
- tried and discarded;
- restarted from a clean version;
- kept as an ongoing experiment;
- shared publicly as a clearly labelled work-in-progress;
- improved over time;
- promoted to the portfolio when it makes sense.

Do not make a new PR for every small adjustment. Continue the current task through the same PR so the creator can repeatedly preview and refine it. Close or abandon a PR when the experiment is no longer wanted; do not merge it just to save it.

## Choosing where things live

Do not put every file in the public repository by default. Sessions should make this decision as part of the task:
- Put reusable, safe-to-share project source and public site content in the repo.
- Keep sensitive personal information, private drafts, credentials, private datasets and original personal media outside the public repo when appropriate.
- Use temporary branches for disposable prototypes.
- Keep only fictional sample data in public automated tests and AI inspection artefacts.

Use a cautious default for uncertain personal information, but do not make ordinary creative work feel restricted. Public images and personal details should be intentionally reviewed before publishing.

## Two preview modes

1. **AI-safe preview:** built from the exact PR commit with fictional sample data only. ChatGPT and automated browser tests inspect this version.
2. **Personal review preview:** same PR code commit, but with real content from a separate private source. The creator/owner can inspect it through authentication. ChatGPT and automated tests must never receive its URL, credentials, cookies, private content, response data or screenshots.

See `PREVIEW_ARCHITECTURE.md` for the detailed design and privacy boundary.

## For each new ChatGPT session

1. Read `CHATGPT_INSTRUCTIONS.md`, `SESSION_LOG.md` and `PREVIEW_ARCHITECTURE.md`.
2. Inspect the repository, latest approved `main`, open PRs and current task state.
3. Continue an existing task in its PR when the request is a revision; otherwise create a task branch and PR.
4. Inspect only the AI-safe preview when using browser tools.
5. Make routine technical decisions independently; ask only for genuine product choices, permission or a safety/privacy decision.
6. Keep the creator's review loop simple: show the preview, describe what to try and accept plain-language feedback.
7. Update `SESSION_LOG.md` in the same PR.
8. Do not merge. Wait for explicit creator confirmation that the preview looks good and is ready for promotion, followed by owner approval.

## Privacy and safety boundary

The public repository should contain fictional sample data for AI/browser checks. Real personal content should be kept separate when it needs protection. A public website's rendered content is visible to anyone who can open it. If actual content must be restricted, require authentication; an unshared URL or noindex setting is not access control.

Never expose secrets to PR scripts that can be changed by an unreviewed PR. Never put private content in logs, screenshots, test traces or PR descriptions. Keep guidance age-appropriate and pause for adult/owner help when a decision involves sensitive personal information, account security, legal/financial commitments or an unsafe activity.

## Current implementation status

There is not yet a configured preview host, browser-inspection pipeline, private content store or protected personal preview. Do not claim these exist until configured and tested. A GitHub connection in one ChatGPT account does not automatically transfer to another account.
