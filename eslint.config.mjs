import { defineConfig, globalIgnores } from "eslint/config";
import babelParser from "./eslint-parser.mjs";
import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = defineConfig([
  {
    files: ["src/**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        allowImportExportEverywhere: true,
        babelOptions: {
          presets: ["next/babel"],
          caller: { supportsTopLevelAwait: true },
        },
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["src/**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    rules: nextPlugin.configs["core-web-vitals"].rules,
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
