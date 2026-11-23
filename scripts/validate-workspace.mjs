#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const readJson = (file) => JSON.parse(readFileSync(file, "utf8"));
const fail = (message) => {
  console.error("Workspace validation failed: " + message);
  process.exit(1);
};
const validId = (value) => typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
const validVersion = (value) => typeof value === "string" && /^\d+\.\d+\.\d+$/.test(value);

const registry = readJson("projects/index.json");
const portfolio = readJson("portfolio/portfolio.json");
const preferences = readJson("creator/preferences.json");
if (registry.schema_version !== 1 || !Array.isArray(registry.projects)) fail("projects/index.json has an invalid shape.");
if (portfolio.schema_version !== 1 || !Array.isArray(portfolio.projects)) fail("portfolio/portfolio.json has an invalid shape.");
if (preferences.schema_version !== 1 || typeof preferences.preferences !== "object") fail("creator/preferences.json has an invalid shape.");

const seen = new Set();
for (const entry of registry.projects) {
  if (!validId(entry.id) || seen.has(entry.id)) fail("Invalid or duplicate project id: " + entry.id);
  seen.add(entry.id);
  const dir = path.join("projects", entry.id);
  for (const file of ["project.json", "README.md", "PROGRESS.md", "CHANGELOG.md", "index.html", "styles.css", "app.js"]) {
    if (!existsSync(path.join(dir, file))) fail("projects/" + entry.id + "/ is missing " + file);
  }
  const project = readJson(path.join(dir, "project.json"));
  if (project.id !== entry.id || !validVersion(project.current_version)) fail("Invalid metadata for project " + entry.id);
  if (!["idea", "experiment", "building", "paused", "released"].includes(project.status)) fail("Invalid status for project " + entry.id);
  if (entry.title !== project.title || entry.current_version !== project.current_version) fail("Project catalogue is out of sync for " + entry.id);
}

const selected = new Set();
for (const item of portfolio.projects) {
  if (!validId(item.project_id) || !seen.has(item.project_id)) fail("Portfolio references an unknown project: " + item.project_id);
  if (selected.has(item.project_id)) fail("Portfolio contains more than one selected version for " + item.project_id);
  selected.add(item.project_id);
  if (!validVersion(item.version)) fail("Invalid portfolio version for " + item.project_id);
  const expectedTag = "project/" + item.project_id + "/v" + item.version;
  if (item.tag !== expectedTag) fail("Portfolio tag must be " + expectedTag);
  if (!item.title || !item.summary || !item.category) fail("Portfolio entry for " + item.project_id + " needs title, summary and category");
  try {
    execFileSync("git", ["cat-file", "-e", item.tag + ":projects/" + item.project_id + "/index.html"], { stdio: "ignore" });
  } catch {
    fail("Portfolio tag " + item.tag + " does not contain the project's index.html");
  }
}

const projectDirs = readdirSync("projects", { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "_template")
  .map((entry) => entry.name);
for (const dir of projectDirs) {
  if (!seen.has(dir)) fail("projects/" + dir + " exists but is missing from projects/index.json");
}

console.log("Workspace valid: " + registry.projects.length + " project(s), " + portfolio.projects.length + " portfolio selection(s).");
