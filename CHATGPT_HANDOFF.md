# ChatGPT handoff

## Product direction

The target is a **creator-first AI project workspace**, not only a personal portfolio. A creator starts an idea, works with ChatGPT, keeps the project in GitHub, previews it, deliberately publishes it through GitHub Pages and adds selected public work to a portfolio.

Read `PRODUCT_BLUEPRINT.md` and `MVP_IMPLEMENTATION_PLAN.md` before expanding scope. They define the agreed free-tier-first MVP.

## Agreed first-release constraints

- ChatGPT is the first AI partner; GitHub is the source of truth and version history.
- GitHub Pages is the first public static hosting target.
- Use only free tiers and no paid API keys, paid domains or paid hosting in the first release.
- Begin with static websites, simple browser games and interactive learning pages.
- No platform backend, database, user accounts, public feed, comments, payments or arbitrary server execution in v1.
- Do not place GitHub tokens, OAuth secrets or AI keys in browser code or public repositories.
- Standard ChatGPT GitHub app access is documented as read-only; direct repository editing may require an eligible Codex workflow. Always provide a manual file-upload fallback.
- A custom MCP integration is a later option, not a v1 dependency.
- GitHub Pages on GitHub Free requires a public repository. Public repositories and Pages content are public; never put private or identifying material there.
- A commit-pinned external static preview is optional and third-party. It is not our own hosting service and must never be treated as private.
- Pull-request checks/artifacts are validation aids; production publishing happens only after owner approval and merge.

## Young creator age and account boundaries

- ChatGPT and GitHub require users to be at least 13 (or the applicable higher local minimum); ChatGPT users under 18 need parent/guardian permission.
- For under-13 children, an adult must conduct the actual ChatGPT interaction and own/manage the relevant accounts. Do not create a child account, ask for a false age, or share account credentials.
- For ages 13–17, follow each service's age and parental-permission terms.
- No child accounts, public social features, comments, direct messages or public popularity rankings in v1.
- Use fictional data for public demos, tests, screenshots and logs. Public portfolio entries need adult review and creator approval.

## Current repository and PR

- Repository: `dhairyagupta0103/dhairyagupta0103.github.io`
- Default branch: `main`
- PR #2: https://github.com/dhairyagupta0103/dhairyagupta0103.github.io/pull/2
- Branch: `recovery/all-assistant-changes-pr`
- PR #2 remains open and unmerged. Never commit directly to `main` or merge without explicit readiness and owner approval.

## Current implementation status

The PR currently contains a fictional sample creative workspace called Little Big Lab, Playwright checks and a GitHub Actions validation workflow. This is a demonstration foundation only. It does **not** yet create project repositories, connect to ChatGPT, or publish user projects.

New product documents:
- `PRODUCT_BLUEPRINT.md`: product promise, user journey, architecture, free-tier constraints and age boundaries.
- `MVP_IMPLEMENTATION_PLAN.md`: staged delivery plan and acceptance criteria.

## Next build sequence

1. Create one public static project template repository with a beginner-friendly README, project metadata and validation workflow.
2. Add a GitHub Pages deployment workflow that publishes only from the approved default branch.
3. Test the template manually using fictional content in a separate sample repository.
4. Add the ChatGPT project brief/prompt pack and manual file-upload path; document optional Codex direct editing where available.
5. Add a simple public project manifest to the portfolio.
6. Verify the full idea → files → checks → preview → owner-approved publish → portfolio flow.
7. Only then consider a tiny adult-supervised pilot.

## Session rules

1. Read `CHATGPT_INSTRUCTIONS.md`, `SESSION_LOG.md`, `PRODUCT_BLUEPRINT.md`, `MVP_IMPLEMENTATION_PLAN.md` and `PREVIEW_ARCHITECTURE.md`.
2. Inspect current main, open PRs, branch head and workflow status.
3. Continue this coherent MVP task in PR #2 unless it is merged or explicitly abandoned.
4. Keep all public fixtures fictional; do not ask for private preview URLs or credentials.
5. Update `SESSION_LOG.md` with actual work and test results.
6. Explain outcomes in ordinary language. Never claim a feature exists before it is implemented and tested.
7. Never merge. The creator confirms readiness and the repository owner approves.
