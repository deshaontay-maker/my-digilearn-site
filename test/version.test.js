const test = require("node:test");
const assert = require("node:assert/strict");
const { versionInfo } = require("../src/version");

test("version route answers with the commit sha", () => {
  assert.equal(versionInfo({ GIT_SHA: "abc1234" }).sha, "abc1234");
});

test("version info says dev when no sha is set", () => {
  assert.equal(versionInfo({}).sha, "dev");
});
