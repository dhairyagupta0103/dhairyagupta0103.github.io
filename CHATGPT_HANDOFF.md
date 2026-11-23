# ChatGPT handoff

## Current direction

Build a simple, single-user creator workspace around one GitHub repository and the creator's existing ChatGPT session.

The creator only needs to describe what they want to make or continue. ChatGPT decides whether the work is project work or maintenance, reads the relevant GitHub records, makes changes on a branch and saves progress back to GitHub.

## Repository

- Repository: dhairyagupta0103/dhairyagupta0103.github.io
- Default branch: main
- Foundation PR: https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2
- Working branch: recovery/all-assistant-changes-pr
- PR #2 is open and unmerged. Never commit directly to main.

## Authoritative instructions

Read README.md, CHATGPT_INSTRUCTIONS.md, governance/SESSION_PLAYBOOK.md, governance/PROJECT_WORKFLOW.md and governance/VERSIONING.md.

Then inspect GitHub branches, open PRs and the actual project files relevant to the request.

## Core architecture

- One repository; no separate repository per project.
- projects/<id>/ stores each project's files, metadata, progress and changelog.
- projects/_template/ stores reusable project records.
- starter/static-site/ supplies the starter website files copied into a new project.
- shared/ stores reusable code and styles.
- creator/preferences.json stores only non-sensitive preferences.
- projects/index.json is the project catalogue.
- portfolio/portfolio.json selects exact released versions for the public launcher.
- Git branches preserve experiments and unfinished work.
- Pull requests represent completed units of work.
- main is the approved history and production website source.

## Session modes

A session classifies its work internally:
- Project mode for one project's creation, continuation or improvement.
- Maintenance mode for shared code, templates, governance, scripts, schemas, site or workflow changes.

The creator should not need to understand or select these modes.

## Integration boundary

Use the GitHub capabilities actually available in the current ChatGPT session. Some GitHub connections are read-only; eligible Codex or connected workflows may provide write access. Do not assume a workflow can be triggered unless the connected GitHub tools confirm it. If the session cannot write or trigger an action, explain the limitation plainly and provide the smallest workable path. Never put credentials in repository files or browser code.

## Next steps

1. Validate project creation and workspace validation scripts.
2. Verify the preview artifact workflow on a work/experiment branch.
3. Configure GitHub Pages to publish through Actions once the deployment workflow is ready.
4. Create one fictional sample project to test folder → branch → preview → PR → release tag → portfolio selection.
5. Only then refine the creator-facing dashboard.

## Rules

GitHub is the source of truth. No direct commits to main. Experiments stay on branches until complete. PRs are for completed work. Portfolio selections point to immutable tags. Do not merge or publish without an explicit creator instruction.
