# Working in this repository

This is a single-user, GitHub-first creator workspace. The creator describes the outcome; ChatGPT handles implementation and GitHub operations where its connected tools permit.

## Choose a session mode

- Project mode: work on one project under projects/<id>/.
- Maintenance mode: work on the platform, shared resources, templates, schemas, scripts, governance or workflows.

The session chooses the mode from the request. Do not make the creator select a technical mode.

## Required workflow

1. Read CHATGPT_INSTRUCTIONS.md and governance/SESSION_PLAYBOOK.md.
2. Inspect the latest main, open PRs and relevant branches.
3. Continue a matching unfinished branch when possible.
4. Otherwise create a task branch from the latest appropriate base.
5. Make a focused change and run relevant checks.
6. Update the project progress record or workspace handoff in the same branch.
7. Keep experiments on their branch. Open a PR only when the work is complete.
8. Never commit directly to main.

## Branch names

- work/<project-id>/<task>
- experiment/<project-id>/<task>
- maintenance/<task>

Use one branch for one coherent task. Keep iterating on it rather than creating a new branch for every small adjustment.

## Project creation

Run the project creation script from a project branch:

~~~sh
node scripts/create-project.mjs <slug> "<title>" "<summary>" <category>
~~~

The script creates the project folder from the template and updates the project catalogue.

## Definition of done

A project change is ready for a PR when its requested outcome is implemented, relevant checks have been run, its progress/changelog records are accurate and the PR explains the result in ordinary language.

A preview artifact is not a release. A release tag is created only after the completed project PR is merged. A portfolio selection points to an existing immutable release tag.
