module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}
