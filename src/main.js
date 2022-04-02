// Load bulma styles in the main entry point before all else
import "bulma/css/bulma.min.css";

// Import API library first to set default base URL before it is used anywhere else
import { oof } from "simpler-fetch";

// If you would like to commit your base API URL with source code, use this to specify different URLs
oof._baseUrl =
  import.meta.env.MODE === "production"
    ? "https://api.example.com"
    : "http://localhost:3000";

// Else use this to read a single URL from the .env file
// oof._baseUrl = import.meta.env.VITE_API_URL;

import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";

// Create new vue app
createApp(App).use(router).mount("#app");
