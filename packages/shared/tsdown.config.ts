import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  /*
   * Dual output ensures compatibility with both Next.js(web) and NestJS(api)
   */
  format: ["esm", "cjs"],

  /*
   * this package is going to be pure typescript for now.
   */
  platform: "neutral",

  target: "esnext",
  dts: true, // Automatically generates bundled .d.ts files
  clean: true, // Cleans the dist folder before every build
  sourcemap: true, // Great for debugging across monorepo boundaries
  treeshake: true, // Keeps Next.js client/server bundles lean
});
