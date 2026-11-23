# Creative workspace and preview architecture

## Product goal

Build a welcoming, low-friction place where a young creator can explore ideas and make projects of any size. It should support quick experiments and POCs, ongoing work, public work-in-progress updates and a curated portfolio. The portfolio is one part of the website, not the whole product.

The creator should be able to ask for changes in ordinary language. ChatGPT sessions handle implementation, tests, branches and PRs. The creator mainly needs to try the preview and say what feels right or what should change.

## A project can grow, pause, or disappear

Use a lightweight lifecycle rather than forcing every idea into a formal process:

1. **Try it:** start with the smallest useful prototype. It can be rough and temporary.
2. **Explore it:** iterate quickly, including through multiple preview revisions on one PR.
3. **Keep or discard:** keep useful work, archive it if its history matters, or close/discard it. A POC does not have to become a permanent repo project.
4. **Share it:** if the creator chooses, publish it as an experiment or work-in-progress with an honest status.
5. **Promote it:** when it is ready and the creator wants it featured, add it to the curated portfolio.

Do not require a polished brief, project plan or portfolio-ready result before starting. Do not confuse a preview with permission to publish.

## Decide where each artefact belongs

A session should make a sensible storage decision for each task instead of putting everything in the public repository.

- **Public repository:** reusable source code, site components, public project pages and assets intentionally selected for public release.
- **Temporary task branch/PR:** short-lived experiments and prototypes that are being reviewed. They can be discarded without changing the live site.
- **Private or less-accessible storage:** personal drafts, private notes, original personal photos, high-resolution originals, private datasets, credentials and material that should not be visible in public Git history.
- **AI-safe fixtures:** fictional sample content only, for tests, browser inspection, screenshots and logs.

Keep the default cautious when personal information is involved, but do not over-restrict normal creative work. A creator-selected image or project can be published after an intentional review. Preserve private originals where appropriate, use a reviewed public copy, consider image rights and other people's privacy, and remove location metadata from public copies where feasible.

A file deleted in a later commit may still exist in Git history. Therefore, never commit a secret or highly sensitive file on the assumption it can simply be deleted later.

## One renderer, multiple kinds of content

The site should support more than a portfolio grid. Its content model should be able to represent:
- a project or experiment with title, summary, status, date and links;
- a project detail page or standalone interactive demo;
- work-in-progress notes or release/update entries;
- a discovery/projects area for public experiments;
- a curated portfolio section for selected work;
- profile/about information and optional contact links.

The renderer should use configuration/data rather than hard-coding the creator's personal details. Public repository fixtures should be obviously fictional and exercise all supported page types and layouts.

## PR-first preview and iteration

Every requested change should be delivered through a task PR. No direct commits to `main`.

- Create one PR for a coherent task or project increment.
- Build a preview from the PR's exact head commit.
- Show the creator the preview in plain language.
- Accept feedback and push revisions to the same PR.
- Refresh the preview after every new commit and make its commit identity visible.
- Keep the PR open while the creator iterates.
- When the creator confirms that it looks good and is ready for promotion, hand it to the owner for approval.
- Do not merge, deploy or promote automatically.

A creator may abandon a POC at any time. Close the PR or leave it clearly marked as abandoned; do not merge it to preserve it. If preserving the experiment is useful, retain the branch or archive it without changing the live site.

## Two views of each proposed change

Both views should use the same application code and exact PR commit, but different data sources.

### A. AI-safe preview

- Automatically built from the exact PR head commit.
- Uses only fictional sample configuration and placeholder assets from the public repository.
- Accessible to ChatGPT browser inspection and automated Playwright checks.
- Tests navigation, project pages, responsive layouts, keyboard access, image loading and browser errors.
- Screenshots, traces, logs and artifacts contain sample content only.
- The PR shows the preview URL and exact commit SHA.

### B. Personal review preview

- Uses the exact same application code/PR commit.
- Loads selected real content from a separate private source.
- Available only to the creator/owner through authentication.
- Lets the creator check personal copy, selected images and the actual presentation before approving a change.
- ChatGPT sessions and automated jobs never receive its URL, credentials, cookies, private configuration, response bodies or screenshots.
- Generated only by a trusted, owner-authorized process. Do not expose private configuration/secrets to arbitrary PR build scripts that an unreviewed change can modify.

A new commit must refresh both previews or clearly mark old previews as stale. The creator should not need to understand commit hashes; the session should explain which preview is current.

## Privacy boundary

The AI-safe preview keeps personal data out of the AI inspection workflow. It does not make a public production website private. Anyone who can open a public page can see its rendered content, including AI-enabled browsers. Publish only details and images that the creator and owner intentionally choose to make public.

If actual personal content must be inaccessible to unauthenticated visitors, protect the personal view with authentication and ensure there is no alternate unprotected Pages/default/custom domain route. A hidden URL or noindex directive is not access control.

Never put personal information, private images, passwords, tokens, private messages or private datasets into public PRs, Git history, test fixtures, browser traces, screenshots or build logs. Use a reviewed public copy of selected assets where appropriate. Avoid exposing identifying information such as school, home address, phone number, precise location or routine schedule.

## Hosting direction and current limits

Evaluate a host that supports PR preview deployments and a separate authenticated personal preview. Cloudflare Pages + Access is a candidate; its preview Access setting does not automatically protect the default `*.pages.dev` domain or custom domains, so all alternate routes must be tested. Netlify Deploy Previews are another candidate. No provider, domain, private content source or authenticated preview is configured yet.

Do not claim a preview exists until it has been deployed and tested. The architecture must also avoid handing private secrets to arbitrary PR workflows.

## Acceptance criteria

- A new idea can start as a small POC without a heavy setup process.
- The creator can iterate on one PR and see an updated preview after each change.
- An abandoned experiment can be discarded without affecting the live site.
- The website can show public projects/work-in-progress as well as a curated portfolio.
- Sessions decide sensible storage locations and keep private material out of public Git history.
- Public tests and AI inspection use fictional sample content only.
- The creator can inspect a real-content preview through a separate authenticated route.
- The creator explicitly confirms readiness before owner approval; no automatic merge or publication.
