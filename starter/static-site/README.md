# Static project source template

This folder contains the simple HTML, CSS and JavaScript files copied into new projects inside this repository.

It is not a separate repository template. New projects are created as folders in projects/<project-id>/ by running:

~~~sh
node scripts/create-project.mjs <slug> "<title>" "<summary>" <category>
~~~

The script copies index.html, styles.css and app.js from this folder, then creates the project's metadata, progress record, changelog and README from projects/_template/.

The project is built and versioned in the main workspace repository. See the root README and governance/PROJECT_WORKFLOW.md.
