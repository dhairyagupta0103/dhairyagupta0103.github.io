# Core system implementation plan

Build the GitHub operating system before expanding the visual dashboard.

## Release 1 — project operating system

**Status: foundation implemented in PR #2; still unmerged.**

- [x] Establish the single-repository folder structure.
- [x] Add project metadata, progress and changelog templates.
- [x] Add a project-creation script that copies the static starter into a new project folder.
- [x] Add the session playbook for project and maintenance modes.
- [x] Add validation for project registry, metadata and portfolio references.
- [x] Add branch preview artifacts.
- [x] Add immutable project version tag and portfolio manifest conventions.
- [x] Add a Pages build that serves the workspace and assembles only selected tagged releases.

## Validation still to complete

- [x] Project creation script tested in a temporary workspace.
- [x] Workspace records validate.
- [x] Pages output builds without publishing.
- [x] Branch preview artifact is generated.
- [x] Portfolio launcher browser tests pass.
- [ ] Test a real project folder on an experiment branch and resume it from a fresh session.
- [ ] Test a completed project PR, post-merge version tag and portfolio version selection.
- [ ] Configure GitHub Pages to use Actions after the foundation PR is approved.

## Acceptance criteria

- A session creates a project folder without creating another repository.
- A project can be resumed from GitHub records in a fresh ChatGPT session.
- Project and maintenance work use distinct branch naming conventions.
- No work is committed directly to main.
- Experiments can stay on branches and produce a downloadable preview bundle.
- Completed work can be submitted as a pull request.
- A released version is identified by an immutable tag.
- The portfolio manifest selects one exact release per project.
- The public Pages site launches the selected release, not the latest unapproved branch.
- A workflow validates repository records.

## Later

Improve the visual dashboard, richer previews, additional starter types and other AI/hosting integrations only after the core loop works.

## Not in v1

Multi-user registration, roles, backend services, databases, paid APIs, private preview hosting, separate project repositories, social features and payments.
