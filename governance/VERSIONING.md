# Project versions and portfolio

## Version format

Use semantic versioning: MAJOR.MINOR.PATCH.

- PATCH — a fix or small correction that does not add a new capability.
- MINOR — a new compatible feature or meaningful improvement.
- MAJOR — a substantial redesign, incompatible change or new major direction.

Do not create a version for every commit. A version represents a meaningful completed milestone.

## Release process

1. Complete the project change on its work branch.
2. Update project.json current_version and CHANGELOG.md.
3. Open a pull request to main.
4. After the PR is merged, create an immutable tag on the merged commit: project/<project-id>/v<version>.
5. Never move or overwrite an existing tag. If a mistake is made, use a new patch version.

## Portfolio selection

portfolio/portfolio.json contains the public selection. Each entry points to one exact project version and tag.

A session may update the manifest when the creator explicitly asks to add, remove or switch a project/version. The manifest update is a normal branch and PR change. It does not roll back the working project.

The public site launches the selected tagged snapshot. It does not automatically show the newest working files.

## Reverting a public selection

To return to an earlier version, change the portfolio entry to the earlier existing tag and submit a PR. Do not reset main, move a tag or overwrite project files to achieve a portfolio rollback.
