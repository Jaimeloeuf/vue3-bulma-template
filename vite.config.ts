import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import basicSSL from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
// https://vitejs.dev/config/#conditional-config
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),

      // Plugin to enable PWA usage
      VitePWA({
        // Allow PWA to be tested in development mode
        devOptions: { enabled: true },

        registerType: "autoUpdate",

        // Values in the generated manifest file
        manifest: {
          name: "vue3-bulma-template",
        },
      }),

      // Enable https by default as ios requires https connections to give camera access
      // https://vitejs.dev/config/server-options.html#server-https
      // https://vitejs.dev/guide/migration.html#automatic-https-certificate-generation
      basicSSL(),
    ],

    // When deploying to Github pages, the base URL will be your repo's name,
    // Thus the production base URL must be changed here for it to work when deployed.
    // Ref: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#next-steps
    // base: process.env.NODE_ENV === "production" ? "/your-github-repo-name/" : "/",

    // Alternatively, you can pass a value in with `vite build --mode production` instead of relying on env vars.
    // base: mode === "whatever-command-you-want" ? "/your-github-repo-name/" : "/",

    // You can delete this or just leave it alone as this is only for demo purposes.
    base: mode === "github-pages" ? "/vue3-bulma-template/" : "/",

    // Uncomment this to allow the use of the `@` symbol as alias for /src
    // @todo Move import to the top if this is used
    // import { fileURLToPath, URL } from "url";
    // resolve: {
    //   alias: {
    //     "@": fileURLToPath(new URL("./src", import.meta.url)),
    //   },
    // },
  };
});
