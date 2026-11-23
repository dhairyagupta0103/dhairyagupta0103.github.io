# Session playbook

## Classify the request

The session chooses the mode internally.

**Project mode:** start, resume, experiment on or improve one project.

**Maintenance mode:** change the workspace itself, including the website, shared utilities, project template, schemas, scripts, governance or GitHub workflows.

If a request spans both, keep the project change focused and make a separate maintenance task for reusable system changes. Ask only if the intended outcome is genuinely unclear.

## Recover from GitHub

At the start of every session:
- inspect the default branch and latest commit;
- inspect open pull requests;
- search for matching work, experiment or maintenance branches;
- read relevant project records and actual source files;
- compare progress notes with the real code.

A new project may exist only on an unfinished branch and not yet be listed on main. Search matching branch names first and read the project catalogue from that branch. Conversation memory is a convenience, not an authority.

## Choose or continue a branch

- Continue a matching unfinished branch if it exists.
- Otherwise create a branch from the latest appropriate main.
- Project work: work/<project-id>/<task> or experiment/<project-id>/<task>.
- Maintenance: maintenance/<task>.
- Never use main as a working branch.

## Keep the scope simple

- Work on one project at a time.
- Reuse shared/ and creator/preferences.json.
- Avoid duplicating utilities or preferences in every project.
- Do not reorganise unrelated projects during a feature task.
- Do not perform cleanup unless the creator asks for a maintenance task.

## Save progress

Before ending a project session, update its PROGRESS.md on the same branch with current state, what works, what remains, known issues, active branch and next suggested step.

Update PROGRESS.md at meaningful milestones as well as at the end. Update CHANGELOG.md for meaningful completed changes. Do not claim unrun tests passed.

For maintenance sessions, update SESSION_LOG.md with the actual outcome and next handoff.

## Finish the work

- Experiments remain on their branch and get a preview artifact.
- Completed work gets a pull request to main.
- A PR should describe a coherent finished unit, not an unfinished experiment.
- Do not merge unless the creator explicitly asks.
- Do not claim the production site changed until merge and deployment are confirmed.
