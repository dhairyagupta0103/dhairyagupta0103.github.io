# Project workflow

## Project folder

Each project lives in projects/<project-id>/ and contains:

- project.json — structured identity, category, status and current version.
- PROGRESS.md — durable resume point for the next session.
- CHANGELOG.md — meaningful completed changes and releases.
- README.md — what the project is and how to run or preview it.
- index.html, styles.css, app.js — static project runtime.
- assets/ — project-owned assets.

## Starting a project

Create a branch first, then run:

~~~sh
node scripts/create-project.mjs <slug> "<title>" "<summary>" <category>
~~~

The script copies the project record template and static starter files, then updates projects/index.json.

A session without a local repository execution tool can create the same files through its available GitHub file operations. It must still follow the same folder structure.

## Resuming

A project that has not yet been merged may exist only on its work/ or experiment/ branch. Search matching branch names first. Read that branch's projects/index.json and project records, then continue the same branch.

If no unfinished branch exists, find the project in projects/index.json on main and create a new work branch from main.

## Experiments and completed work

Use an experiment/ branch for uncertain ideas and prototypes. Use a work/ branch for a coherent feature being built toward completion.

A preview artifact is produced from the branch. Keep iterating there. When the creator says the result is complete, open a PR to main.

## Progress is not a transcript

Keep PROGRESS.md concise. Record outcomes, current behaviour, open issues and the next step. Update it at meaningful milestones and before ending a session. Do not paste the conversation into the file. Git history and pull requests record the actual changes.
