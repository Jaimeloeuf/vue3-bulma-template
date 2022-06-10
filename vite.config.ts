import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // When deploying to Github pages, the base URL will be your repo's name,
  // Thus the production base URL must be changed here for it to work when deployed.
  // Ref: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#next-steps
  // base: process.env.NODE_ENV === "production" ? "/your-github-repo-name/" : "/",
});
