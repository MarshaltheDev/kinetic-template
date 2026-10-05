/**
 * ESLint rules for "npm run lint": JavaScript + TypeScript recommended rules and the
 * React hooks rules. Rarely needs editing.
 *
 * Note: eslint-config-next is not used because its dependency chain
 * (@next/eslint-plugin-next -> fast-glob -> micromatch -> braces) has an open
 * high-severity advisory with no patched release. Re-add it once braces is patched:
 *   npm i -D eslint-config-next, then spread nextVitals and nextTs into the array below.
 */

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
