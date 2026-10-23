// Builds the site into the dist folder: the home page and version.json.
// GitHub Actions sets GITHUB_SHA to the commit it is building.
const fs = require("node:fs");
const path = require("node:path");
const { renderHome } = require("../src/site");
const { versionInfo } = require("../src/version");

const out = path.join(__dirname, "..", "dist");
const info = versionInfo(process.env);
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), renderHome(undefined, info.sha));
fs.writeFileSync(path.join(out, "version.json"), JSON.stringify(info) + "\n");
console.log("Built dist/index.html and dist/version.json");
