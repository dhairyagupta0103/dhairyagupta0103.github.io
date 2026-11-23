# Project session history

This is the durable handoff between ChatGPT sessions. Keep it factual, concise and free of personal or sensitive information.

## Actual goal

A low-friction creative workspace for a young creator to try ideas, make small or large projects, build disposable POCs, keep useful work, share selected experiments, track progress and eventually promote suitable projects to a curated portfolio. The portfolio is one part of the site, not the whole site.

The creator describes changes in ordinary language. ChatGPT sessions handle implementation, testing, branches, PRs and previews. The creator should mainly try the preview and give feedback.

## Product and workflow principles

- Make starting small easy. A rough first version is welcome.
- Let projects grow, pause, restart, be discarded, or become ongoing projects.
- Support experiments, public work-in-progress, updates and curated portfolio entries.
- Use one PR per coherent task. Iterate in that same PR and refresh the preview after each commit.
- A preview is not publication approval. The creator confirms readiness; the owner approves merge/promotion.
- Sessions decide whether artefacts belong in the public repo, a temporary task branch or private/less-accessible storage.
- Be careful with personal details and images without making ordinary creative work feel restrictive.
- Keep all AI inspection, automated tests, screenshots and logs on fictional sample content only.
- Never put credentials or highly sensitive information in Git history.

## Repository state

- Default branch: `main`.
- `main` was restored to the pre-assistant baseline commit `401781a`.
- The assistant-authored work remains on [PR #2](https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2), open and unmerged.
- Recovery reference: `archive/pre-pr-main-2026-11-22`.
- Current task branch: `recovery/all-assistant-changes-pr`.
- PR #2 is a consolidated recovery/foundation PR. It must not be merged until its entire diff is reviewed; the earlier NEXUS design was assistant-invented and has now been replaced in the PR branch by the experiment-first creative workspace.
- No private personal content is included in the sample project data.

## Current implementation on PR #2

- Replaced the generic NEXUS landing page with **Little Big Lab**, a sample creative workspace.
- Added Workbench project cards, status filters, keyboard-openable project detail dialogs, Field Notes updates, a curated Showcase and a low-pressure “start with an idea” section.
- Added fictional project examples covering a maker project, creative coding experiment, POC, web tool, parked idea and learning project.
- The page loads `content/site.sample.json`; the sample content is fictional and intended for browser/AI inspection.
- Added Playwright browser checks for rendering, filtering, keyboard interaction and mobile overflow.
- Updated GitHub Actions to validate sample JSON, run browser tests and save sample-only screenshot/test artifacts.
- Rewrote the editing guide and task template for ordinary-language, same-PR iteration.
- The former unused `content/site.json` NEXUS content should be removed as cleanup if not already removed.
- A hosted PR preview is not guaranteed yet. The candidate static preview URL is a commit-pinned raw.githack URL; verify it actually renders before sharing it as a working preview.
- No private content store, authenticated personal preview, or automatic private preview is configured.

## Safety and publication boundaries

- Never push assistant changes directly to `main`.
- Keep each coherent task in one PR and update its preview as the PR changes.
- Do not merge until the creator says the preview looks good and is ready for promotion, and the repository owner approves.
- Abandoned POCs may be discarded without changing the live site.
- Use fictional sample content for AI/browser inspection, test traces, screenshots and logs.
- Keep personal drafts, originals, credentials, private datasets and sensitive details outside public Git history.
- A public website is visible to anyone. Selected personal details or images must be intentionally reviewed before publication.
- Do not expose a private preview URL, credentials, cookies or content to ChatGPT or automated jobs.
- Keep guidance age-appropriate and ask for adult/owner help for consequential privacy, account-security or safety decisions.

## Next handoff

1. Verify the commit-pinned sample preview URL and inspect the rendered page; fix any issues in this same PR.
2. Confirm GitHub Actions browser tests pass and review the screenshot artifact.
3. Remove unused NEXUS content/assets and update any remaining stale docs/templates.
4. Decide on a real PR preview host (Cloudflare Pages, Netlify or equivalent) if raw static preview is not reliable enough.
5. Later implement the separate authenticated personal preview through a trusted process, without passing private data to PR scripts or AI.
6. After the creator approves the preview and the owner approves, merge only the reviewed changes.

## Session entries

| Session / task | Date (UTC) | Delivered | PR / status | Next handoff |
|---|---|---|---|---|
| Assistant-authored website redesign | 2026-11-22 | Earlier generic NEXUS site was not the requested direction and was initially committed directly to main. | Consolidated into PR #2; open, unmerged. | Replace with creator-led project workspace. |
| PR workflow and handoff | 2026-11-22 | Added PR-first rules, session history, task template and handoff documentation. | PR #2; open, unmerged. | Make sessions manage the technical workflow. |
| History cleanup | 2026-11-22 | Restored main to pre-assistant baseline and retained a recovery branch. | PR #2; open, unmerged. | Review complete diff before approval. |
| Creative workspace clarification | 2026-11-23 | Captured experiment-first product direction, same-PR iteration, discard/restart, flexible artefact storage and sensible personal-image care. | PR #2; open, unmerged. | Implement a working sample experience. |
| First creative workspace implementation | 2026-11-23 | Replaced NEXUS homepage in the PR branch with a sample-driven project workspace; added sample projects, updates, project filters/details, Playwright checks and GitHub Actions browser validation. | PR #2; open, unmerged. Preview and workflow still need verification. | Verify the preview and browser checks, then fix any issues in this PR. |

## Session finish checklist

Record actual changes, PR URL/state, tests actually run, preview URL/commit, remaining risks and the next handoff. Never claim the site is live unless the PR is merged and deployment is verified.
