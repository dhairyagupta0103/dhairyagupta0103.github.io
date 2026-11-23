# Product blueprint — single-user creator workspace

Status: working MVP architecture  
Audience: one creator using one ChatGPT account and one GitHub account  
Cost target: GitHub and existing ChatGPT access; no paid API, server or database

## Product promise

The creator describes what they want to make in ChatGPT. ChatGPT builds and improves it. The workspace keeps the work organised, remembers its state through GitHub, and provides previews and a launcher for selected releases.

This is not a second creation conversation and does not teach the creator how to use ChatGPT.

## Everyday experience

- Start a new ChatGPT session and describe a new idea, or ask to continue an existing project.
- ChatGPT identifies the project, reads its GitHub records and resumes from the latest saved state.
- The creator can ask for a preview, request changes, or decide that a finished version should be released.
- The public workspace shows only project versions selected in the portfolio manifest.

There is one user and one repository in v1. No sign-up, multi-user roles, invitations, billing, backend or database.

## Source of truth

GitHub is authoritative for project source, metadata, progress, branches, pull requests, version tags, portfolio selections, validation and deployment history.

ChatGPT conversation context is temporary assistance. A session must inspect GitHub before resuming and save meaningful progress back to GitHub before ending.

## Single-repository structure

All projects live in projects/<project-id>/. Shared resources live in shared/. Reusable creator preferences live in creator/preferences.json. Project and portfolio records use JSON files with documented schemas.

## Session modes

A session decides internally whether the request is:
- Project mode: create, resume, experiment on or complete one project.
- Maintenance mode: improve the workspace, website, shared utilities, starter, schemas or GitHub workflows.

The creator does not need to choose a technical mode.

## Work lifecycle

- Ongoing and experimental work stays on a named branch.
- Experiments can be previewed from a branch artifact and iterated without a pull request.
- A pull request is opened when a coherent piece of work is complete and ready for main.
- Main is the approved history and production website source.
- No session commits directly to main.
- A session does not merge unless the creator explicitly asks.

## Releases and portfolio

A meaningful completed milestone may receive a semantic version and immutable tag:
project/<project-id>/v<major>.<minor>.<patch>.

The public portfolio is a simple manifest that points to exact project tags. It is read-only on the website: it launches selected versions and does not edit projects. A ChatGPT session can update the manifest when the creator asks to feature or replace a particular version. That change also goes through a pull request.

## First-release limits

- One GitHub repository and one user.
- Static websites and browser projects only.
- GitHub Actions checks and downloadable preview bundles.
- GitHub Pages production hosting.
- No private preview hosting or arbitrary backend execution.
- No assumption that every ChatGPT surface has identical GitHub write or workflow-trigger permissions. The session uses only capabilities actually available and never claims an action succeeded unless GitHub confirms it.
