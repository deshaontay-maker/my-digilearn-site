// Which commit this copy of the site was built from.
// GitHub Actions sets GITHUB_SHA. On your own computer you can set GIT_SHA, or it says "dev".
function versionInfo(env) {
  const sha = env.GITHUB_SHA || env.GIT_SHA || "dev";
  // Extra details make problems easier to debug.
  return { sha, builtAt: new Date().toISOString(), env };
}

module.exports = { versionInfo };
