# Your first project website

This folder is a starter for a small, public, static website hosted with GitHub Pages.

## What is included

- `index.html` — the page structure
- `styles.css` — the visual design
- `app.js` — loads the project details
- `project.json` — the project title, summary and category
- `.github/workflows/validate.yml` — checks files on pull requests
- `.github/workflows/deploy-pages.yml` — publishes the approved default branch to GitHub Pages

## Before you begin

This starter is designed for public projects. A GitHub Pages site on the free GitHub plan uses a public repository. Anyone can see the repository files and the published site.

Do not add passwords, API keys, private notes, school details, home address, phone number, precise location, daily schedule or private photographs. Use a project nickname or creator alias. Ask a responsible adult to review anything intended for public release.

GitHub and ChatGPT account age requirements apply. Do not create an account below a service's minimum age or share another person's login.

## Create a project repository

1. A repository owner creates a new repository on GitHub.
2. Copy the contents of this starter folder into the new repository's root.
3. Keep the repository public only if the project is safe to share publicly.
4. Open the repository's **Settings → Pages** and choose **GitHub Actions** as the publishing source.
5. Make a small first change and open a pull request. The validation workflow checks it.
6. After the owner reviews and merges the change to the default branch, the Pages workflow publishes it.

The exact site URL appears in the repository's **Settings → Pages** and in the deployment workflow summary.

## Preview before publishing

For a local preview, run a simple static file server from the project folder:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Pull-request checks are not a private hosted preview. Do not publish sensitive content just to preview it.

## Work with ChatGPT

Open `CHATGPT_PROJECT_PROMPT.md` and copy its instructions into a ChatGPT conversation. Describe the project in your own words.

If an authorised Codex workflow can edit the repository, it may make changes there. Otherwise ask ChatGPT for complete file contents and upload the files through GitHub's website. The standard ChatGPT GitHub app is read-only.

## Publishing rule

A preview is not permission to publish. The creator should confirm that the result is ready, and the repository owner must review and merge it. Do not merge changes automatically.
