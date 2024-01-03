import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";
import stylelitPlugin from "vite-plugin-stylelint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), stylelitPlugin()],
  server: {
    port: 9998,
    open: true,
    host: "localhost"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
