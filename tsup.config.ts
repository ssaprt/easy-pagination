import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom", "mobx", "mobx-react-lite"],
    banner: { js: '"use client";' },
});
