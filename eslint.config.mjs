import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    ...js.configs.recommended,
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
        version: "18.2.0"
      }
    }
  }
];