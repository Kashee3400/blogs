import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/cms.ts"),
      name: "CMS",
      fileName: () => "cms.js",
      formats: ["iife"],   // ✅ browser-friendly self-executing
    },
    outDir: "public",      // ✅ place cms.js directly into public
    emptyOutDir: false,    // keep other files intact
  },
});
