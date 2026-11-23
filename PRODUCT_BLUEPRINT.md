# Product blueprint: creator-first AI project workspace

**Status:** proposed MVP direction, not yet implemented as a complete product  
**Initial audience:** young beginners and their responsible adults  
**Initial AI:** ChatGPT  
**Initial project source, version history and hosting:** GitHub + GitHub Pages  
**Cost target:** use existing free tiers; no paid API, server, domain or hosting dependency

## Product promise

Help a creator move from an idea to a working, shareable project with an AI assistant, without needing to learn Git, deployment pipelines or web hosting first.

The product is a project home and publishing workflow around AI creation. It does not try to replace ChatGPT or become a general-purpose AI coding model.

## The first user journey

1. **Start an idea.** The creator chooses a simple project type and describes what they want to make.
2. **Create a project home.** A guided flow creates a GitHub repository from a starter template. In the no-backend MVP, the repository owner performs the GitHub template step.
3. **Build with ChatGPT.** The creator uses a project-specific instruction pack. If an authorised Codex workflow can edit the repository, it may do so. Otherwise ChatGPT produces a complete set of files and the creator/adult uploads them through GitHub's website.
4. **Check the result.** GitHub Actions validates the files. The creator can use a local preview or a commit-pinned public static preview for supported projects. PR checks may also provide downloadable artifacts and screenshots.
5. **Publish deliberately.** A responsible owner reviews the content and merges the approved change. GitHub Actions deploys the public static site to GitHub Pages.
6. **Showcase it.** The creator adds the project's public URL and a short description to a portfolio manifest. The portfolio page displays only projects intentionally selected for public sharing.

## What v1 includes

- A friendly project dashboard and project lifecycle: idea, experiment, building, ready to share, published, archived.
- A small set of static-web project starters: personal project page, simple browser game, interactive learning page and creative showcase.
- A project brief and ChatGPT prompt pack for each starter.
- A GitHub repository template for each project.
- GitHub Actions validation and GitHub Pages deployment.
- A project manifest that powers a selected-work portfolio.
- Clear preview, review and publish states.
- Plain-language guidance so the creator does not need to understand Git internals.

## Explicitly out of scope for v1

- User accounts, passwords or a platform database.
- A hosted backend or a platform-owned GitHub token.
- Automatic repository creation from a browser.
- A universal ChatGPT write integration or an OpenAI API key.
- Arbitrary server-side code execution, databases or long-running services.
- Payments, advertising, social feeds, comments, direct messages or public rankings.
- Private authenticated preview hosting.
- A claim that every kind of project can be run or hosted.

These exclusions keep the first release free-tier-first and avoid exposing GitHub credentials in browser code.

## Architecture

### 1. Creator-facing static workspace

The website is a static application hosted on GitHub Pages. It contains product guidance, project starter choices, a creator portfolio and a project manifest. It must not contain a GitHub personal access token, OAuth client secret, AI API key or other credential.

### 2. GitHub as source of truth

Each publishable project lives in its own repository created from a public starter template. GitHub stores the files and history. The project repository contains:
- the project source;
- a short project brief;
- a README with creator-friendly instructions;
- a validation workflow;
- a Pages deployment workflow.

The portfolio repository stores only approved public project metadata and links. It must not copy private notes or private project files.

### 3. ChatGPT as the first AI partner

The platform provides a structured project brief and reusable prompt instructions. The prompt tells ChatGPT to:
- understand the requested outcome;
- keep the first version small;
- create or revise only project files;
- explain what changed in plain language;
- provide test and preview steps;
- never publish without explicit approval.

**Important integration boundary:** OpenAI's standard GitHub app is documented as read-only. OpenAI says direct code generation, editing and pushing is available through Codex. Therefore, v1 must not promise that every standard ChatGPT account can write to GitHub. Support an optional authorised Codex workflow where available, plus a manual file-upload fallback. Do not require a paid ChatGPT plan or OpenAI API usage for the MVP.

A future MCP integration can expose narrowly scoped project tools, but it is not part of the no-cost first release. Its availability in ChatGPT varies by plan and workspace.

### 4. Build, preview and publish

- GitHub Actions runs syntax, structure and project-specific checks on pull requests.
- A pull request can store test reports and downloadable preview artifacts.
- A commit-pinned public static preview service may be used as a convenience for supported public HTML projects, but it is a third-party service, not a platform-owned hosting feature. Never use it for private content.
- GitHub Pages publishes the approved version after merge to the default branch.
- Production publication is separate from preview and requires an intentional owner action.

GitHub Pages on GitHub Free is available for public repositories. This means the first free-tier hosting path is public by design. Do not put private drafts, credentials, personal records, school details, private images or other sensitive content in a public repository. A private GitHub repository is not a private GitHub Pages hosting solution on the Free plan.

## Young creator safety and age boundaries

- ChatGPT's Terms require users to be at least 13 (or the higher local minimum age); users under 18 need parent/guardian permission. OpenAI says ChatGPT is not meant for children under 13 and, in educational settings, an adult must conduct the actual interaction for under-13 children.
- GitHub's Terms require users to be at least 13, and the local minimum age may be higher.
- Never ask a child to enter a false birth date, bypass age restrictions or share an adult's login. Accounts belong to the adult or eligible user who controls them.
- For under-13 participants, this GitHub + ChatGPT MVP is adult-operated: the adult owns the accounts and performs the AI and GitHub actions. Do not create a child login or share account credentials.
- For ages 13–17, use requires the relevant parental permission and compliance with each service's terms.
- Public pages must avoid identifying information such as full name, school, home address, phone number, routine schedule and precise location.
- No public profiles, social feed, comments or messaging in v1.
- Adult owner reviews every public release and checks permissions for images and other people's work.

## Free-tier cost model and limitations

Expected software spend for the first static-web MVP: ₹0, provided the owner uses eligible free accounts and stays within service limits.

Costs and constraints:
- GitHub Pages: public repositories on GitHub Free; static hosting only.
- GitHub Actions: use public-repository workflows and modest CI. Usage limits and service terms can change.
- ChatGPT: use the person's existing eligible ChatGPT access; no API key or paid API usage in v1.
- Domain: use the supplied GitHub Pages URL; no custom domain purchase.
- Preview: local preview, Actions artifacts, and optionally a third-party commit-pinned static preview. No dedicated paid preview host.

This is not unlimited free compute. No arbitrary backend execution, large media hosting or high-traffic guarantee.

## Success criteria

A first-time creator, with adult help where required, can:
1. choose a starter;
2. create a project repository from its template;
3. use the ChatGPT brief to make a small change;
4. validate the project;
5. see a preview;
6. deliberately publish to GitHub Pages;
7. add the published project to a portfolio.

A friend should be able to repeat this using only the public instructions and free-tier services.

## Later, only after validation

1. Improve the project dashboard and guided onboarding.
2. Add additional starter types.
3. Add a hosted MCP service with narrowly scoped GitHub permissions only when there is a safe, affordable hosting and authentication plan.
4. Add integrations for external hosting providers.
5. Add multi-user collaboration and community features only after privacy, moderation, consent and support requirements are designed.

## Decision

Build the smallest reliable static-web workflow first. Treat ChatGPT as the creative partner, GitHub as the source of truth, GitHub Pages as public static hosting, and the portfolio as a curated index of approved projects. Do not build a platform backend until real creators have successfully repeated this workflow.
