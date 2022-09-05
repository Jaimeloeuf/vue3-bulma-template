// Load bulma styles in the main entry point before all else
// If you prefer using a CDN, delete this line and the dependency, and add the CDN link to index.html
import "bulma/css/bulma.min.css";

// Import API library first to set default base URL before it is used anywhere else
import { oof } from "simpler-fetch";

// If you would like to use this to read a single URL from the .env file
// oof.setBaseURL(import.meta.env.VITE_API_URL);

// Else commit your base API URL with source code, use this to specify different URLs
oof.setBaseURL(
  // Since there are modes other than production that should use the real API, such as
  // when deploying to github-pages, the local development API is only used when running
  // the project in development mode with `npx vite` or `npx vite build --mode development`
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://api.example.com"
);

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./router/index";
import App from "./App.vue";

// Create new vue app
createApp(App)
  .use(router)
  .use(createPinia().use(piniaPluginPersistedstate))
  .mount("#app");
