# NEXUS — no-code editing guide

NEXUS is a static, content-driven website. The design system lives in `assets/styles.css`, rendering and interactions in `assets/app.js`, and all editable site copy/cards in `content/site.json`.

## Update without coding
1. Open the website and select the ✳ Content studio control.
2. Export the current `site.json` file.
3. Give that file to ChatGPT with this instruction: "Update this NEXUS website content. Keep it generic and do not add personal data. Return the complete valid JSON only."
4. Import the returned JSON in the Content studio to preview it.
5. Export the approved JSON and replace `content/site.json` in this GitHub repository. Commit the change. GitHub Pages will publish it.

The studio is a local preview/import/export tool. It does not write to GitHub by itself and does not send data to an AI service.

## Multiple ChatGPT conversations
Treat `content/site.json` as the shared source of truth. Start each new conversation by providing this guide and the latest JSON file. Ask ChatGPT to return a complete replacement JSON, not a partial patch. Review the diff/version history in GitHub before publishing. For simultaneous edits, coordinate one editor at a time or reconcile changes before committing.

## Content schema
- `meta`: brand, hero copy, section headings, links, footer.
- `features`: array of cards with icon, title, description, tag.
- `signals`: array of short principles with label and value.
- `theme`: initial theme: `aurora`, `monolith`, `playground`, or `terminal`.

## AI integration roadmap
The current site is AI-ready, not AI-connected. The Content Studio generates a prompt for ChatGPT and supports portable JSON. A future secure integration can add authenticated GitHub PR creation, schema validation, approvals and an AI provider. Never put an AI API key or GitHub token in browser JavaScript or public repository files.

## Privacy baseline
Keep identifying and sensitive personal information out of public content. Avoid private photos, personal contact details, precise location, school/work identifiers, birthdays and private schedules. Review changes before publishing.

## Technical notes
- No framework or build step; GitHub Pages can serve the static files.
- Theme selection is visitor-controlled and remembered locally.
- Reduced-motion preferences are respected.
- Content is escaped before being rendered as HTML.
