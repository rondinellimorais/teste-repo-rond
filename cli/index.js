const semver = require("semver");

const patched_versions = ">=0.2.1 <1.0.0 || >=1.2.3";
const currentVersion = '1.2.0';
const versions = ["0.2.1", "1.0.0", "1.2.3", currentVersion].sort(semver.rcompare);

console.log(versions);
console.log(`current version: ${currentVersion}`);

const maxSatisfyingVersion = semver.maxSatisfying(
  versions,
  patched_versions
);
console.log(`max version: ${maxSatisfyingVersion}`);

const minSatisfyingVersion = semver.minSatisfying(
  versions,
  patched_versions
);

console.log(`min version: ${minSatisfyingVersion}`);