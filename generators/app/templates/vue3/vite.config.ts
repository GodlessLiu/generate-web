import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import EslintPlugin from "vite-plugin-eslint";
import stylelitPlugin from "vite-plugin-stylelint";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), EslintPlugin(), stylelitPlugin()],
  server: {
    open: true,
    port: 9999,
    host: "localhost"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
