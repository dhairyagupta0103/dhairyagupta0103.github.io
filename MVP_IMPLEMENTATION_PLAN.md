# MVP implementation plan: free GitHub + ChatGPT workflow

## Release 0 — Foundation already in progress

The current PR contains a fictional sample creative workspace and browser tests. It is a product-design/demo foundation only. It does not yet create GitHub projects, connect to ChatGPT, or publish user projects.

## Release 1 — One project can go from idea to public page

Build and verify this narrow vertical slice before adding accounts or community features.

### A. Project starter repository

Create one public GitHub template repository for a simple static website. It should include:
- `index.html`, `styles.css`, `app.js`;
- `project.json` with title, summary, project type and status;
- `README.md` written for a beginner;
- `.github/workflows/validate.yml`;
- `.github/workflows/deploy-pages.yml`;
- a clear licence and attribution note for any included assets.

The starter should have fictional sample content and no personal information.

### B. Guided project creation

The creator dashboard explains how the repository owner uses GitHub's "Use this template" flow. The owner chooses a repository name and visibility. No browser-side token is used. The first release does not create repositories automatically.

### C. ChatGPT project brief

The workspace generates/copies a prompt containing:
- project goal and audience;
- current file list and constraints;
- requested change;
- acceptance checks;
- instruction to keep scope small;
- instruction to avoid secrets and personal data;
- instruction to return complete files or use an authorised Codex repository workflow when available;
- instruction not to publish automatically.

### D. Validation and preview

On pull requests, GitHub Actions checks HTML/JS structure and runs project tests. It uploads a sample-only report or downloadable build artifact.

For static public projects, a commit-pinned external preview can be offered as an optional convenience only after verifying that the service renders the exact commit and relative assets. It is never private. If unavailable, use a local preview or artifact; do not invent a preview URL.

### E. Publishing

A separate Pages workflow deploys only from the default branch after the repository owner merges the approved change. The workflow uses least-privilege permissions and GitHub's supported Pages deployment actions.

### F. Portfolio

The creator's portfolio reads a manually maintained JSON manifest containing only:
- project title;
- short public description;
- project category;
- published URL;
- optional public thumbnail path;
- optional date/status.

No email, school, location, age, private notes or account identifiers are needed.

## Release 1 acceptance checks

- A new project can be created from the template using GitHub's UI.
- A beginner can follow the ChatGPT brief without knowing Git commands.
- A generated project passes the validation workflow.
- The creator can preview before publication.
- Publishing requires an explicit owner merge.
- The deployed Pages URL loads the project and its assets.
- A portfolio entry links to the published project.
- No token or secret appears in browser source, repository files, logs or screenshots.
- Public sample fixtures contain fictional data only.
- Mobile and keyboard navigation are checked.

## Release 2 — Better previews and smoother handoff

Only after Release 1 works:
- add project-specific preview instructions;
- improve PR artifact reports;
- add a one-click copy prompt;
- document optional Codex direct editing;
- test a stable, free preview option for public static sites;
- add a simple portfolio editor backed by a public JSON manifest.

## Release 3 — More project types

Add only project types that can be safely validated and hosted:
- simple browser games;
- interactive learning pages;
- static documentation and project reports;
- downloadable static artifacts.

Do not run arbitrary backend code on GitHub Pages.

## Release 4 — Optional integrations

A hosted MCP integration and automatic GitHub repository creation require a secure backend, authentication, per-user authorisation, token handling, rate limits, abuse controls and ongoing maintenance. This is not a zero-cost assumption and must be separately approved before implementation.

## Build order

1. Finalise and review the product blueprint.
2. Create the first static project template.
3. Test template creation manually with a separate sample repository.
4. Add and verify GitHub Pages deployment.
5. Add a ChatGPT prompt pack and manual fallback.
6. Add the project manifest and portfolio integration.
7. Test the full workflow with fictional content.
8. Invite a very small adult-supervised pilot group only after safety and privacy review.
