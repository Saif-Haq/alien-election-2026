import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["dist", "node_modules", ".angular"],
  }
);
