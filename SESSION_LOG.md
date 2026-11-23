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
- Removed the obsolete unused `content/site.json` NEXUS content. Preserved the seven existing image assets from the approved `main` baseline in this PR; the new sample homepage does not expose or repurpose them.
- A hosted PR preview is not guaranteed yet. A commit-pinned raw.githack URL is included as a convenience preview, but has not been verified by the web inspection tool.
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
| First creative workspace implementation | 2026-11-23 | Replaced NEXUS homepage in the PR branch with a sample-driven project workspace; added sample projects, updates, project filters/details, Playwright checks and GitHub Actions browser validation. Preserved the seven original image assets unchanged. Fixed two issues found by the first browser run (ambiguous dialog-heading selector and mobile overflow). Final workflow passed all three browser tests, syntax validation and sample JSON validation; sample-only screenshot/test artifacts uploaded. | PR #2; open, unmerged. | Creator reviews the sample preview and gives plain-language feedback; continue in this PR. |

## Session finish checklist

Record actual changes, PR URL/state, tests actually run, preview URL/commit, remaining risks and the next handoff. Never claim the site is live unless the PR is merged and deployment is verified.


## New product decision — free-tier creator-first MVP (2026-11-23)

The owner chose a focused starter version for young creators, with ChatGPT as the first AI partner and GitHub as source control, hosting and publishing. The broader product may eventually serve any creator, but v1 stays narrow and free-tier-first.

- Added `PRODUCT_BLUEPRINT.md` with the product promise, first user journey, architecture, explicit exclusions, age boundaries and free-tier limitations.
- Added `MVP_IMPLEMENTATION_PLAN.md` with the staged implementation sequence and Release 1 acceptance checks.
- Updated the ChatGPT handoff and session instructions to use this product direction.
- Important platform constraints recorded: standard ChatGPT GitHub app is read-only; Codex may support direct repository writes where available; manual file upload is the fallback. GitHub Pages on GitHub Free is for public repositories, so private or identifying content must not be placed there. ChatGPT and GitHub require users to be at least 13 (or the higher local minimum); ChatGPT users under 18 need parental permission, and under-13 ChatGPT interactions must be adult-conducted.
- No new product features, GitHub template repository, Pages deployment or ChatGPT integration have been implemented yet. PR #2 remains open and unmerged.
- Next: implement one public static project template, its validation and Pages deployment workflows, then verify the full flow with fictional sample content.


## First static project starter added (2026-11-23)

- Added `starter/static-site/` as the first reusable project starter.
- Included beginner instructions, a ChatGPT project prompt, public project metadata, a responsive static page, CSS and JavaScript.
- Added a project-level GitHub Actions workflow for pull-request validation and a separate Pages deployment workflow that runs only on pushes to `main`.
- Extended the root validation workflow to check the starter JavaScript, metadata and required files.
- Removed manual `workflow_dispatch` from the starter deployment workflow so an arbitrary branch cannot be manually deployed to Pages.
- This is a starter folder inside the existing repository, not yet a separate GitHub template repository. It has not yet been deployed independently.
- Next: copy it into a separate fictional sample repository, configure Pages to use GitHub Actions, verify deployment, then connect it to the creator workspace UI.

- Added a workflow step to package `starter/static-site/` as a downloadable ZIP artifact (30-day retention), so the starter can be tried without copying files one by one. This artifact is generated by CI and contains only fictional starter content.
