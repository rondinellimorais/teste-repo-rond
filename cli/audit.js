const regFetch = require("npm-registry-fetch");

const body = {
  "name": "npm_audit_test",
  "version": "1.0.0",
  "requires": {
    "date-fns": "2.14.0",
    "minimist": "1.2.0",
    "node.extend": "1.1.6"
  },
  "dependencies": {
    "minimist": {
      "version": "1.2.0",
      "integrity": "sha1-ebq614r2OLpNUiqecVzf3SQp6UY=234"
    },
    "date-fns": {
      "version": "2.14.0",
      "integrity": "sha1-ebq614r2OLpNUiqecVzf3SQp6UY=234"
    },
    "node.extend": {
      "version": "1.1.6",
      "integrity": "sha1-ebq614r2OLpNUiqecVzf3SQp6UY=234"
    }
  }
};

let opts = {
  "color": true,
  "json": true,
  "unicode": true,
  method: 'POST',
  gzip: true,
  body
};

regFetch('/-/npm/v1/security/audits', opts)
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => console.error(err));