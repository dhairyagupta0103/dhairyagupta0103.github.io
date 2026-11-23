#!/usr/bin/env node
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const [id, title, summary, category = "creative"] = process.argv.slice(2);
const fail = (message) => {
  console.error(message);
  process.exit(1);
};

if (!id || !title || !summary) {
  fail('Usage: node scripts/create-project.mjs <slug> "<title>" "<summary>" [category]');
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || id === "_template") {
  fail("Project slug must use lowercase letters, numbers and single hyphens.");
}

const root = process.cwd();
const projectDir = path.join(root, "projects", id);
const templateDir = path.join(root, "projects", "_template");
const starterDir = path.join(root, "starter", "static-site");

try {
  await readFile(path.join(projectDir, "project.json"));
  fail("Project " + id + " already exists.");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const registryPath = path.join(root, "projects", "index.json");
const registry = JSON.parse(await readFile(registryPath, "utf8"));
if (!Array.isArray(registry.projects)) fail("projects/index.json must contain a projects array.");
if (registry.projects.some((project) => project.id === id)) fail("Project " + id + " is already registered.");

await cp(templateDir, projectDir, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
const project = {
  schema_version: 1,
  id,
  title,
  summary,
  category,
  status: "building",
  current_version: "0.1.0",
  created_at: today,
  updated_at: today
};
await writeFile(path.join(projectDir, "project.json"), JSON.stringify(project, null, 2) + "\n");

const readTemplate = async (name) => (await readFile(path.join(templateDir, name), "utf8"))
  .replaceAll("{{PROJECT_TITLE}}", title)
  .replaceAll("{{PROJECT_SUMMARY}}", summary)
  .replaceAll("{{PROJECT_ID}}", id)
  .replaceAll("{{PROJECT_CATEGORY}}", category)
  .replaceAll("{{CREATED_AT}}", today);
for (const name of ["README.md", "PROGRESS.md", "CHANGELOG.md"]) {
  await writeFile(path.join(projectDir, name), await readTemplate(name));
}

for (const name of ["index.html", "styles.css", "app.js"]) {
  await cp(path.join(starterDir, name), path.join(projectDir, name));
}
await mkdir(path.join(projectDir, "assets"), { recursive: true });
await writeFile(path.join(projectDir, "assets", ".gitkeep"), "");

registry.projects.push({
  id,
  title,
  summary,
  category,
  status: "building",
  current_version: "0.1.0"
});
registry.projects.sort((a, b) => a.id.localeCompare(b.id));
await writeFile(registryPath, JSON.stringify(registry, null, 2) + "\n");

console.log("Created projects/" + id + ". Continue building on your current branch.");
