#!/usr/bin/env bash
set -euo pipefail

rm -rf _site
mkdir -p _site
cp index.html _site/
cp -R assets content images shared portfolio _site/

node scripts/validate-workspace.mjs

node --input-type=module <<'NODE'
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

const manifest = JSON.parse(readFileSync("portfolio/portfolio.json", "utf8"));
for (const item of manifest.projects) {
  const destination = path.join("_site", "projects", item.project_id);
  mkdirSync(destination, { recursive: true });
  const projectPath = "projects/" + item.project_id + "/";
  const archive = execFileSync("git", [
    "archive", "--format=tar", item.tag,
    projectPath + "index.html",
    projectPath + "styles.css",
    projectPath + "app.js",
    projectPath + "project.json",
    projectPath + "assets"
  ]);
  execFileSync("tar", ["-x", "-C", destination, "--strip-components=2"], { input: archive });
  console.log("Prepared " + item.project_id + " " + item.version + " from " + item.tag);
}
NODE
