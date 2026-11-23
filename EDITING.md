# Making things here

This site is a creative workspace, not just a portfolio. It can hold quick experiments, POCs, projects that are still being built, progress notes and selected work that is ready to showcase.

## The easy way to work

Describe the idea or change in ordinary language to a ChatGPT session. You do not need to edit code or manage Git yourself.

For a new idea, the session should:
1. Make a small first version rather than over-planning.
2. Decide whether it is a throwaway experiment, an ongoing project or something intended for public sharing.
3. Create or update one task PR and give you a preview.
4. Let you try it and describe what should change.
5. Keep updating that same PR and refresh the preview until you are happy.
6. Wait for you to say it looks good and is ready for promotion. The site owner approves before anything is merged or published.

You can change direction, restart or discard an experiment. Not every idea needs to become a portfolio project.

## Where project files go

Sessions choose a sensible place for each thing:
- Public repository: source and assets intentionally selected for sharing.
- Temporary PR: prototypes and experiments that may be discarded.
- Private or less-accessible storage: personal drafts, original photos, sensitive details, credentials and private data.

A file committed to a public repository can remain in its history even if deleted later. Keep secrets and highly sensitive material out of Git entirely. Review personal details and images before choosing to publish them.

## Preview

The public preview and automated browser checks use fictional content from `content/site.sample.json`. It is safe for ChatGPT sessions to inspect.

A real-content preview is a separate future capability. It must be authenticated and must never be sent to ChatGPT or automated tests. Do not assume that a hard-to-guess link is private.

## Current first version

- The page has a Workbench with project cards and status filters.
- Project details open in a simple dialog.
- Field Notes show a short progress trail.
- Showcase highlights selected projects.
- The sample content is entirely fictional.
- Browser checks run against the sample site in GitHub Actions.

No private content store or authenticated personal preview is configured yet. The first sample preview is not the published website.

## For maintainers and ChatGPT sessions

Read `CHATGPT_INSTRUCTIONS.md`, `CHATGPT_HANDOFF.md`, `PREVIEW_ARCHITECTURE.md` and `SESSION_LOG.md` before making changes. Keep all changes on a PR branch, update the session log, and do not merge without explicit readiness confirmation and owner approval.
