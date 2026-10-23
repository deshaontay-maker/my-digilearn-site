const test = require("node:test");
const assert = require("node:assert/strict");
const { SITE_NAME, OWNER_NAME, renderHome } = require("../src/site");

test("home page shows the site name", () => {
  assert.ok(renderHome().includes("<h1>" + SITE_NAME + "</h1>"));
});

test("home page greets the visitor by name", () => {
  assert.ok(renderHome("Ada").includes("Hello, Ada!"));
});

test("home page shows the owner name", () => {
  assert.ok(renderHome().includes("Made by " + OWNER_NAME));
});
