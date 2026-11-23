# Preview and configuration architecture

## Required outcome

Every pull request must be viewable in a real browser before it is merged. The nephew must be able to inspect the latest proposed design with his real website content. ChatGPT and automated browser checks must be able to inspect the same proposed code without receiving the nephew's personal content.

## One renderer, separate data

The homepage must be rendered by shared website code using a configuration object. The renderer must not contain the nephew's name, biography, photos, projects, school, contact details or other personal information as hard-coded values.

The public code repository must contain a clearly labelled, entirely fictional sample configuration (target path: `content/site.sample.json`). Use obviously invented sample identity details, projects and placeholder imagery. It must be realistic enough to exercise every homepage component and responsive layout.

The real personal configuration must live outside the public repository and outside ChatGPT-readable PR files. It must not be copied into PR diffs, logs, screenshots, test output, build logs or browser-test traces.

## Two views of every PR

### A. AI-safe preview

- Built automatically from the PR's exact head commit.
- Always uses `content/site.sample.json`, never the real personal configuration.
- Has a stable link recorded on the PR.
- Accessible to the ChatGPT browser/inspection workflow and automated Playwright checks.
- Browser checks cover homepage rendering, navigation, responsive layouts, keyboard access, missing images and console/network errors.
- Screenshots and test artifacts must contain sample content only.

### B. Personal review preview

- Uses the exact same PR code/head commit as the AI-safe preview.
- Loads the real personal configuration from a separate private source only for the nephew's authenticated browser session.
- Protected by an access-control layer. The nephew can sign in and inspect the actual content and layout before merge.
- The ChatGPT session and automated browser jobs receive neither its URL nor credentials, cookies, private config, API response bodies or screenshots.
- This preview is generated only through a trusted, owner-authorized process. Do not expose private configuration or secrets to arbitrary PR build scripts.

Both preview links must identify the PR number and exact commit SHA, so it is obvious which code version is being reviewed. A new commit to the PR must refresh both previews or clearly mark the previous preview as stale.

## Privacy boundary

A sample configuration prevents the normal AI inspection workflow from receiving personal content. It does not make content secret if that content is published on a public website: anyone who can open a public page can view its rendered content. If the owner requires that personal content be inaccessible to ChatGPT and other unauthenticated visitors, the real-content view must require authentication and must not be exposed through a public URL.

The production website should publish only content the owner and nephew intentionally choose to make public. Never treat a robots/noindex header or an unshared URL as an access-control mechanism.

## Suggested hosting approach

Evaluate Cloudflare Pages for automatic PR preview deployments and Cloudflare Access for restricting the real-content preview. Cloudflare documents automatic per-PR preview URLs and Access policies for preview deployments. Its preview Access setting does not protect the project's default `*.pages.dev` domain or custom domains, so the deployment design must account for those separately. Do not assume a preview is private until its access policy has been tested.

Alternative: Netlify Deploy Previews also build from PRs and support preview-specific environment configuration and access restrictions. Check current plan limits before selecting it.

No hosting provider, domain, account, secret or private content source has been configured yet. This document records the required design, not a claim that previews are already deployed.

## Implementation sequence

1. Define the homepage configuration schema and build a fictional sample portfolio configuration.
2. Refactor the homepage so all profile, introduction, project, interest, link and image content comes from that configuration.
3. Ensure public repository tests and AI inspection can only use the sample configuration.
4. Add Playwright browser tests against the sample preview and attach screenshots/results to each PR.
5. Configure automatic safe PR previews and publish the exact preview URL in the PR.
6. Choose a private content store and implement the owner-authorized, authenticated personal preview. Do not pass personal data to untrusted PR workflows.
7. Test that an unauthenticated browser and the AI-safe preview cannot retrieve the private configuration.
8. Add the personal preview link to the PR for the nephew/owner only, without exposing it in public logs or AI-readable artifacts.

## Acceptance criteria

- The homepage is fully driven by configuration; replacing the sample config changes the rendered site without editing the renderer.
- The repository contains only fictional sample data.
- Every PR has an AI-safe, browser-inspectable preview built from the exact PR commit.
- The AI-safe preview and its tests contain no personal content.
- The nephew can authenticate and view the latest PR with real content before merge.
- The real-content preview is not accessible to the AI inspection workflow or unauthenticated visitors.
- No PR is merged automatically; owner approval remains required.
