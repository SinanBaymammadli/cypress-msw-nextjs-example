import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    NEXT_PUBLIC_API_MOCKING: "disabled",
  },
  e2e: {
    baseUrl: "http://localhost:3003",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
