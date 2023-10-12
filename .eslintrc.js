module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  parser: '@typescript-eslint/parser', 
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "custom"
  ],
  plugins: ["@typescript-eslint"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
