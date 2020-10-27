module.exports = {
  extends: ["airbnb", "prettier", "prettier/react", "eslint-config-prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      classes: true,
    },
  },
  rules: {
    // my custom rules
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  plugins: ["prettier", "jest", "html", "react-hooks"],
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier/@typescript-eslint",
      ],
    },
  ],
};
