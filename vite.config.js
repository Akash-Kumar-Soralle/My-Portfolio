import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import esbuild from "esbuild-wasm"; // ✅ add this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
  build: {
    rollupOptions: {},
  },
});
