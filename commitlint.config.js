module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["api", "crm", "portal", "mobile", "shared", "deps", "root"]],
    "subject-case": [0], // Allows flexibility in message casing if needed
  },
};
