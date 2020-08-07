const semver = require("semver");

const range = ">=0.2.1 <1.0.0 || >=1.2.3";
const versions = ["0.2.1", "1.0.0", "1.2.3", '1.2.0'].sort(semver.rcompare);
console.log(versions);

const maxSatisfyingVersion = semver.maxSatisfying(
  versions,
  range
);
console.log(`max version: ${maxSatisfyingVersion}`);

const minSatisfyingVersion = semver.minSatisfying(
  versions,
  range
);

console.log(`min version: ${minSatisfyingVersion}`);