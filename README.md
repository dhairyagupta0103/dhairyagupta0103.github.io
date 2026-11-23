# Creator Workspace

A single-user creative workspace built around one ChatGPT session and one GitHub repository.

The creator describes what they want to make. ChatGPT handles the technical work. GitHub keeps the projects, shared resources, progress, experiments, releases and portfolio selection.

- ChatGPT understands, creates, improves and resumes work.
- GitHub is the permanent source of truth.
- GitHub Actions validates changes and prepares preview bundles.
- GitHub Pages serves the workspace and selected project releases.
- The portfolio manifest chooses which released versions are launched publicly.

## Repository map

- governance/ — lightweight rules every session follows.
- projects/ — one folder per project and reusable project records.
- starter/static-site/ — source files copied into new static projects.
- shared/ — reusable styles and utilities.
- creator/preferences.json — non-sensitive preferences shared across projects.
- portfolio/portfolio.json — read-only public selection of project releases.
- schemas/ — documented JSON data shapes.
- scripts/ — project creation and validation helpers.
- .github/workflows/ — validation, preview artifacts and production deployment.

## Project workflow

1. Read CHATGPT_INSTRUCTIONS.md and governance/SESSION_PLAYBOOK.md.
2. Decide internally whether the request is project work or workspace maintenance.
3. Identify an existing project or create one from the template.
4. Read its project.json, PROGRESS.md, CHANGELOG.md and source files.
5. Continue a matching unfinished branch, or create a new branch from main.
6. Build and test on that branch. Save progress to GitHub.
7. Keep experiments on their branch. Open a pull request only when a coherent unit is complete.
8. After a completed change is merged, create a version tag when it represents a meaningful release.
9. When asked, update portfolio/portfolio.json to select the exact release to launch.

A new session must recover state from GitHub. Conversation history is helpful, but it is never the project record.

## Branch names

- work/<project-id>/<task> — ongoing project work intended to become a completed change.
- experiment/<project-id>/<task> — exploratory work that may be changed or discarded.
- maintenance/<task> — workspace, website, shared utilities, templates or workflow maintenance.

Never commit directly to main. Completed work goes through a pull request. Experiments can remain on branches until the creator decides what to do with them.

## Create a project

Run this on a project branch:

~~~sh
node scripts/create-project.mjs planet-quiz "Planet Quiz" "A fun quiz about planets" learning
~~~

It creates projects/planet-quiz/, copies the static starter files, creates project records and updates projects/index.json.

## Versions and portfolio

Project releases use immutable tags in this format:

project/<project-id>/v<major>.<minor>.<patch>

The public portfolio contains only exact releases selected in portfolio/portfolio.json. The Pages build assembles those tagged project files under /projects/<project-id>/. Changing a portfolio selection does not roll back or alter the project's current working files.

## Preview and publishing

- Branch and pull-request checks create downloadable preview bundles.
- Production Pages content is built only from main.
- Only releases listed in portfolio/portfolio.json are copied into the public project-launcher paths.
- A preview artifact is a review aid, not a public release.

The first Pages deployment requires the repository's Pages publishing source to be set to GitHub Actions.

## Public data

This repository and its Pages site are public. Store only non-sensitive preferences and content intended for public visibility. Never commit passwords, tokens, private notes, school details, home address, phone number, precise location or private photographs.
