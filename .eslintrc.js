module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
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
};
