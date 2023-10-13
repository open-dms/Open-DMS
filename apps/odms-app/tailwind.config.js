/** @type {import('tailwindcss').Config} */

/** @note we're importing our shared tailwind config from the dedicated `odms-ui` package  */
const sharedConfig = require("odms-ui/tailwind.config");

module.exports = {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./src/**/*.{ts,tsx}",
    "../../packages/odms-ui/src/components/**/*.{ts,tsx}",
  ],
};
