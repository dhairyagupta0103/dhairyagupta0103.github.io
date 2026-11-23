# Making things here

This is a read-only public launcher for selected project releases. The creator's everyday building experience happens through their existing ChatGPT session.

## The easy way to work

Describe a new idea or a change to an existing project in ordinary language. ChatGPT should:
1. Decide internally whether this is project work or workspace maintenance.
2. Read the current GitHub project records and source files.
3. Resume the matching unfinished branch or create a new one.
4. Build and preview the change without asking the creator to manage Git.
5. Save progress back to GitHub so another session can continue later.
6. Open a pull request only when a coherent unit of work is complete.

The creator can change direction, pause an idea or discard an experiment. Not every project needs to become part of the public portfolio.

## Where project files go

All projects live in projects/<project-id>/. Reusable resources live in shared/. Common creator preferences live in creator/preferences.json. A project is not a separate repository.

## Preview and publishing

Work and experiment branches produce downloadable GitHub Actions preview bundles. They do not change the production website.

The production Pages site is built from main. It launches only the exact versions selected in portfolio/portfolio.json. That manifest is the portfolio's only content source; the public page does not provide editing controls.

A release is identified by an immutable project/<project-id>/v<version> Git tag. Changing the manifest selects another existing release; it does not roll back project development.

## For ChatGPT sessions

Read CHATGPT_INSTRUCTIONS.md and governance/SESSION_PLAYBOOK.md before working. GitHub is the source of truth; conversation history is not. Never commit directly to main.
