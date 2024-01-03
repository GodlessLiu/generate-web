// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./lib/index.ts"],
  outDir: "./bin",
  external: [],
  splitting: false,
  dts: false,
  sourcemap: false,
  format: ["cjs"],
  clean: true,
  watch: true,
  minify: true
});
