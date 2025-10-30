import eslintConfigPrettier from "eslint-config-prettier";
import config from "eslint-config-xo";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
    config,
    eslintConfigPrettier, // Must be last
    {
        languageOptions: {
            parser: tseslint.parser,
            globals: {
                ...tseslint.configs.recommended[0].languageOptions?.globals,
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
            },
        },
    },
]);
