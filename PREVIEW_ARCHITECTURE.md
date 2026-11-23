# Preview and publishing

## Branch previews

Work and experiment branches do not change the production site. The preview-projects.yml workflow packages project folders and shared resources into a downloadable GitHub Actions artifact.

The artifact is a review bundle, not a public hosted URL. A session can inspect the files, run the project locally when an execution environment is available, and report the exact branch/commit represented by the artifact.

## Production site

The production site is built only from main by .github/workflows/deploy-pages.yml.

The build:
1. Copies the creator workspace website and shared public resources into the Pages output.
2. Reads portfolio/portfolio.json.
3. For each selected entry, reads the exact immutable tag referenced by that entry.
4. Copies only the project's public runtime files into /projects/<project-id>/.
5. Deploys the assembled site to GitHub Pages.

Project folders not selected in the portfolio are not included in the public launcher build. The source repository itself is public, so this does not make unselected source files private.

## Version selection

The portfolio manifest references an exact tag such as project/planet-quiz/v1.0.0. Selecting another version changes the public launch target on the next main deployment. It does not change the project's current working files or move a tag.

## First-time setup

In repository Settings → Pages, set the publishing source to GitHub Actions.

## Limitations

- GitHub Pages is public static hosting, not private preview hosting.
- Branch artifacts require access to the repository's GitHub Actions page.
- This setup does not execute backend code, store secrets or provide private user accounts.
- Never put sensitive content in a public project folder just because it is not selected for the portfolio.
