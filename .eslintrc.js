module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true
    }
  },
};
