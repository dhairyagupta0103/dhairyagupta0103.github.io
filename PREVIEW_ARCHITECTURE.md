# Creative workspace and preview architecture

## Product goal

A welcoming place where a young creator can try ideas and make projects of any size. It supports quick experiments and POCs, ongoing projects, public work-in-progress, progress notes and a curated portfolio. The portfolio is one part of the site, not the whole product.

The creator describes changes in ordinary language. ChatGPT sessions handle the technical work and Git workflow. The creator mainly tries previews and gives feedback.

## Project lifecycle

1. **Try it:** start with the smallest useful prototype. No formal brief is needed.
2. **Explore it:** iterate through multiple preview revisions on one PR.
3. **Keep or discard:** continue, restart, park, archive or discard. A POC does not need to become permanent.
4. **Share it:** publish only when the creator chooses, with an honest work-in-progress status.
5. **Promote it:** feature it in the curated portfolio when it is ready and the creator wants that.

Do not require a polished result before starting. A preview is not permission to publish.

## Where artefacts live

Sessions choose a sensible home for each task:
- **Public repository:** reusable source and assets intentionally selected for public release.
- **Temporary task branch/PR:** disposable prototypes and short-lived experiments.
- **Private/less-accessible storage:** personal drafts, original photos, private notes, private datasets and other sensitive artefacts.
- **AI-safe fixtures:** fictional content only for browser inspection, tests, screenshots and logs.

Be careful with personal details and images without making ordinary creativity feel restricted. Selected personal assets can be published after intentional review. Keep secrets and highly sensitive information out of Git entirely: deleting a file later does not erase it from Git history.

## Website structure

The first sample implementation uses one data-driven page with:
- Workbench: projects and experiments with status filters and detail views.
- Field Notes: short progress updates and discoveries.
- Showcase: curated projects selected for promotion.
- Start section: an invitation to begin with a small idea.

The fictional content is stored in `content/site.sample.json`. The page renderer is separate from that data. Future iterations can add individual project pages, richer demos, categories, tags, search, and real creator content after the privacy boundary is ready.

## PR-first iteration

Every coherent task is delivered through a PR. No direct commits to `main`.

- Create one PR per task/project increment.
- Build or update a preview from the exact PR head commit.
- Show the creator the preview in plain language.
- Continue revisions in the same PR and refresh the preview after each commit.
- Keep the PR open while the creator iterates.
- Wait for the creator to confirm that it looks good and is ready for promotion.
- The repository owner approves and merges. Do not merge or publish automatically.

A creator may abandon a POC at any time. Close/discard it without changing the live site.

## Preview modes

### A. AI-safe preview

- Uses only fictional sample content from the public repository.
- ChatGPT browser inspection and automated Playwright checks use this version only.
- Tests cover initial rendering, project filters, keyboard operation of detail views and mobile overflow.
- Screenshots, traces, logs and artifacts contain sample data only.
- The preview must identify the exact PR commit.

A commit-pinned raw static preview URL may be used for an initial review only after verifying that it renders and loads its relative assets/data correctly. This is a convenience preview, not a dedicated deployment system. GitHub Actions browser tests create sample-only screenshots and reports.

### B. Personal review preview (future)

- Uses the same application code and exact PR commit.
- Loads selected real content from a separate private source.
- Accessible only to the creator/owner through authentication.
- ChatGPT sessions and automated jobs never receive its URL, credentials, cookies, configuration, response bodies or screenshots.
- Generated only through a trusted, owner-authorized process. Do not expose private configuration or secrets to arbitrary PR build scripts.

This capability is not configured. Do not claim it exists until deployed and tested.

## Privacy boundary

The AI-safe preview prevents personal content from entering the AI inspection workflow. It does not make a public production website private. Anyone who can open a public page can see its rendered content. Publish only details and images intentionally selected for public release.

If actual personal content must be inaccessible to unauthenticated visitors, protect the personal view with authentication and ensure there is no alternate unprotected deployment domain. A hidden URL or noindex directive is not access control.

Avoid publishing identifying details such as school, home address, phone number, precise location or routine schedule. Review image rights and other people's privacy. Keep original personal media private where appropriate and use reviewed public copies.

## Hosting direction and current limits

A dedicated host that supports PR preview deployments is still needed for a robust, always-current preview. Cloudflare Pages + Access and Netlify are candidates, but no provider, domain, private content source or authenticated preview is configured. Cloudflare preview access settings require special care because default Pages domains and custom domains may remain accessible unless separately protected.

## Current implementation status

- Sample creative workspace implemented on PR #2.
- Fictional sample config committed at `content/site.sample.json`.
- Playwright checks and GitHub Actions workflow added.
- The first browser preview must still be opened and verified at the current PR head.
- Dedicated PR hosting and the authenticated personal preview remain future work.
- There is no universal ChatGPT-to-GitHub automation service. The session instructions define the intended workflow, subject to the connected account's permissions.

## Acceptance criteria

- New ideas can start as small POCs without a heavy setup process.
- The creator can iterate on one PR and see an updated preview after each change.
- Abandoned experiments can be discarded without affecting the live site.
- The website supports public projects/work-in-progress and a curated portfolio.
- Sessions choose sensible storage and keep sensitive artefacts out of public Git history.
- Public tests and AI inspection use fictional sample content only.
- The creator can eventually inspect a real-content preview through a separate authenticated route.
- The creator confirms readiness before owner approval; no automatic merge or publication.


## Agreed free-tier MVP direction (2026-11-23)

The longer-term product is a creator-first AI project workspace. The first release uses ChatGPT as the AI partner, GitHub as source/version history, GitHub Actions for checks, and GitHub Pages for public static hosting. See `PRODUCT_BLUEPRINT.md` and `MVP_IMPLEMENTATION_PLAN.md` for the authoritative scope.

Important constraints:
- GitHub Pages on GitHub Free is available for public repositories; public project files and deployed content are public. Do not store private drafts, secrets, identifying details or personal data in these repositories.
- Standard ChatGPT GitHub app access is read-only. Use an eligible Codex workflow for direct edits where available, or provide a manual file-upload fallback. A custom MCP server is not required for v1.
- Pull-request artifacts and optional commit-pinned static previews are review aids, not private hosting. Publish only from the approved default branch after owner approval.
- No platform backend, database, automatic repository creation, arbitrary code execution or authenticated private preview is part of v1.
- ChatGPT and GitHub require users to be at least 13 (or a higher local minimum); ChatGPT users under 18 need parent/guardian permission. For under-13 children, an adult must conduct the actual ChatGPT interaction and manage accounts.
