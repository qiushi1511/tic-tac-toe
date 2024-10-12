/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {},
    environment: "jsdom",
    setupFiles: "./setupTests.js", // assuming the test folder is in the root of our project
  },
});
