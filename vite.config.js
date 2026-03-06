import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@gui": path.resolve(__dirname, "lib/gui.ts"),
    },
  },
});
