const test = require("node:test");
const assert = require("node:assert/strict");
const { versionInfo } = require("../src/version");

// The /version page is public. It must never show the server's settings.
test("version info shows only the commit sha", () => {
  const info = versionInfo({ GIT_SHA: "abc1234", SECRET_KEY: "do-not-show" });
  assert.deepEqual(Object.keys(info), ["sha"]);
});
