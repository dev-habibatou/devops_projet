import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.node,
        ...globals.jest
      } 
    } 
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "18.2.0" // Version fixe pour contourner le bug de l'API ESLint v10
      }
    }
  }
]);