import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio/",
  build: {
    outDir: "dist",
    target: "es2022",
    sourcemap: false,
  },
});
