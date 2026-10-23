const test = require("node:test");
const assert = require("node:assert/strict");
const { renderHome } = require("../src/site");

test("home page shows the short version", () => {
  assert.ok(renderHome(undefined, "abc1234def5678").includes("Version abc1234<"));
});
