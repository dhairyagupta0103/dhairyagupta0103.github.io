# Workspace handoff record

GitHub is the authoritative record. This file is a short workspace-level handoff, not a replacement for each project's PROGRESS.md, branch history or pull requests.

## Current architecture

- One user, one GitHub repository, one ChatGPT account.
- All projects live under projects/.
- Shared resources live under shared/.
- Reusable non-sensitive preferences live in creator/preferences.json.
- projects/index.json lists projects.
- Each project has project.json, PROGRESS.md, CHANGELOG.md and source files.
- ChatGPT sessions classify work as project mode or maintenance mode.
- GitHub branches hold unfinished and experimental work.
- Pull requests are opened for completed work.
- main is never edited directly and is the production website source.
- Immutable tags identify released project versions.
- portfolio/portfolio.json selects the exact releases launched by the public portfolio.

## Current GitHub state

- Repository: dhairyagupta0103/dhairyagupta0103.github.io
- Default branch: main
- Foundation PR: #2
- Working branch: recovery/all-assistant-changes-pr
- PR #2 remains open and unmerged.

## Next handoff

1. Run workspace validation and browser tests.
2. Confirm branch preview artifacts are produced.
3. Verify the Pages deployment build with an empty portfolio manifest.
4. Test one fictional project from creation through release and portfolio selection.
5. Record actual workflow results here.

Every session must inspect GitHub before resuming and update the relevant project's progress record on the same branch as its work. Never rely on this file or conversation history as a substitute for actual project files and GitHub history.
