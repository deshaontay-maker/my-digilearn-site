const test = require("node:test");
const assert = require("node:assert/strict");
const { renderHome } = require("../src/site");

// A visitor can type anything into ?name=. The page must show it as text, never run it.
test("home page escapes the visitor name", () => {
  const page = renderHome('<script>alert("hi")</script>');
  assert.ok(!page.includes("<script>"), "the page must not contain a script tag from the visitor");
  assert.ok(page.includes("&lt;script&gt;"), "the visitor's text must be shown as text");
});
