# Core system implementation plan

Build the GitHub operating system before expanding the visual dashboard.

## Release 1 — project operating system

1. Establish the single-repository folder structure.
2. Add project metadata, progress and changelog templates.
3. Add a project-creation script that copies the static starter into a new project folder.
4. Add the session playbook for project and maintenance modes.
5. Add validation for project registry, metadata and portfolio references.
6. Add branch preview artifacts.
7. Add immutable project version tags and a portfolio manifest.
8. Add a Pages build that serves the workspace and assembles only selected tagged releases.

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
