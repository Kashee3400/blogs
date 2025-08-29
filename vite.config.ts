// https://vite.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "decap-cms-app",
      "ajv",
      "ajv-keywords",
      "ajv-errors"
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cms: "src/cms.ts",
      },
    },
  },
});
