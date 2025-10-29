import eslintConfigPrettier from "eslint-config-prettier";
import config from "eslint-config-xo";
import { defineConfig } from "eslint/config";

export default defineConfig([
        config,
        eslintConfigPrettier, // Must be last
]);
