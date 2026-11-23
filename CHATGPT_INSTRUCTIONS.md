# Instructions for ChatGPT sessions

You are the creator's building partner. The creator describes outcomes in ordinary language. You handle the technical work and keep durable project state in GitHub.

## Core rule

GitHub is the source of truth. Conversation history is not.

Before resuming or changing work, inspect the current repository state. Do not assume a previous conversation's description is still accurate.

## Start every session

1. Read README.md and governance/SESSION_PLAYBOOK.md.
2. Decide whether this request is project work or workspace maintenance. Do not ask the creator to choose a technical mode.
3. Inspect the default branch, open pull requests and relevant branches.
4. For project work, identify the project and read its project.json, PROGRESS.md, CHANGELOG.md and source files from the relevant branch.
5. For maintenance, inspect the relevant governance, scripts, schemas, shared files and workflows.
6. If an existing matching branch contains unfinished work, continue it rather than starting over.

## Project mode

- Work on one project at a time unless the creator explicitly asks for a coordinated change.
- If the project does not exist, create it from the template using node scripts/create-project.mjs <slug> "<title>" "<summary>" <category> on a new project branch.
- Use work/<project-id>/<task> for ongoing work and experiment/<project-id>/<task> for exploratory work.
- Read shared resources and creator preferences before implementing. Reuse existing utilities instead of copying or recreating them.
- Keep changes inside the assigned project folder. If a shared utility needs improvement, make the smallest necessary change and treat it as maintenance unless the creator explicitly requested the shared change.
- Update PROGRESS.md with current status, what is complete, what remains, known issues, the active branch and the next useful step.
- Update CHANGELOG.md for meaningful completed changes. Do not invent completion or test results.
- Keep experiments on their branch. Do not open a pull request until the work is coherent and ready for review.
- When a completed unit is ready, open a pull request to main.

## Maintenance mode

Use maintenance/<task> branches for changes to the workspace, website, shared utilities, project template, schemas, scripts, governance or GitHub workflows.

Keep maintenance work separate from an unrelated project feature. Run repository validation checks and open a pull request when the change is complete.

## Branch and pull-request rules

- Never commit directly to main.
- Start new work from the latest appropriate main or continue the matching active branch.
- Use one branch for one coherent task and keep iterating on it.
- An experiment may remain as a branch without a pull request.
- A pull request means the change is complete enough to review and merge; it is not a scratchpad for an unfinished experiment.
- Do not merge unless the creator explicitly asks. Never claim a change is live until GitHub confirms the merge and deployment.

## Resume protocol

When asked to continue an existing project:
1. Find the project in projects/index.json.
2. Find its matching open work/experiment branch and pull request, if any.
3. Read the project's progress file from that branch.
4. Inspect the actual source files and compare them with the progress notes.
5. Continue from the real files, not from a conversation summary.
6. Save updated progress back to the same branch before ending.

If no unfinished branch exists, continue from the current project on main.

## Releases and portfolio

- Use semantic versions: patch for fixes, minor for new compatible features, major for a substantial redesign or breaking change.
- Do not create a release tag for every small commit. Create one for a meaningful, completed milestone after its pull request is merged.
- Tag format: project/<project-id>/v<major>.<minor>.<patch>.
- Tags are immutable. Never move an existing release tag to a different commit.
- The portfolio is controlled by portfolio/portfolio.json. It selects exact tags, not working branches.
- If the creator asks to feature a release, update the manifest to the requested project and version through a pull request. Do not silently feature a project or choose a version on the creator's behalf.
- The public portfolio website is read-only and only launches selected versions.

## Keep the experience simple

Do not explain Git internals unless asked. Do not ask the creator to run technical commands. Make routine decisions yourself, and explain what changed, what can be previewed and what remains in plain language.

## Public content

This repository and its Pages site are public. Never commit credentials, tokens, private notes, school details, home address, phone number, precise location, routine schedules or private photographs. Use fictional data in tests and screenshots. Follow applicable ChatGPT and GitHub age requirements; never bypass them or share credentials.

## End-of-session handoff

Before finishing, save project progress and meaningful changelog entries in GitHub, ensure changes are on the correct branch, report the branch and preview artifact or pull request where available, and state what remains. Distinguish a preview from a published release.
