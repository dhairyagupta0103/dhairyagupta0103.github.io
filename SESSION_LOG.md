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
- PR #2 remains open and unmerged. Fetch the current head SHA from GitHub whenever resuming.

## Implemented core

The foundation PR now contains the single-repository folder structure, project metadata/progress/changelog templates, project creation script, project/maintenance session playbook, version-tag and portfolio conventions, workspace validator, branch preview artifact workflow, Pages build/deployment workflow and a read-only portfolio launcher driven by portfolio/portfolio.json.

## Validation recorded

- Workspace validation passed.
- Project folder creation test passed in a temporary workspace.
- Pages output build passed without publishing.
- Branch preview artifact workflow passed.
- Portfolio launcher browser tests passed on an earlier implementation commit.
- Verify the latest Actions run results on the current PR head before merging.

## Next handoff

1. Verify the latest Actions runs on the current PR head.
2. Test one fictional project on an experiment branch and confirm it can be resumed from its branch records.
3. Complete the project through a PR, create its immutable version tag after merge, and test portfolio selection.
4. Configure Pages to use GitHub Actions only after the foundation PR is approved.

Every session must inspect GitHub before resuming and update the relevant project's progress record on the same branch as its work. Never rely on this file or conversation history as a substitute for actual project files and GitHub history.
