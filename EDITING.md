# Editing and preview guide

The homepage is intended to be a personal website rendered from configuration. The public repository must contain only fictional sample content.

## Preview modes

- **AI-safe preview:** use the sample configuration from the public repository. This is the only version ChatGPT and automated browser tests should inspect.
- **Personal review preview:** use the actual personal configuration from a separate private source. The nephew/owner opens this after authentication. Do not share this URL or its contents with ChatGPT.

Both previews must be built from the exact same pull-request commit, so they show the same code changes with different data.

See `PREVIEW_ARCHITECTURE.md` for implementation requirements, privacy boundaries and acceptance criteria.

## Current state

The existing Content Studio is a local import/export helper, not an AI integration. The repository does not yet have configured PR preview hosting, a private content source, or a protected personal preview. Do not claim these capabilities are available until implemented and tested.

All permanent changes must be made on a task branch and delivered through a pull request. The owner approves before merge/publication.
