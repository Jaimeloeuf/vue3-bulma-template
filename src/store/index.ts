import { defineStore } from "pinia";

/**
 * Type of the pinia store's State.
 * Defined externally to make it more readable.
 */
interface State {
  name?: string;
  random: number;
}

/**
 * Main pinia store of the application.
 *
 * `useStore` could be anything like `useUser`, `useCart`, where the
 * first argument is a unique id of the store across your application.
 */
export const useStore = defineStore("main", {
  // Arrow function used for full type inference, so that all the properties
  // can have their type inferred automatically if no State type is defined
  state: (): State => ({
    name: "User",
    random: 0,
  }),

  // https://pinia.vuejs.org/core-concepts/actions.html
  actions: {
    updateRandom() {
      this.random = Math.trunc(Math.random() * 1000);
    },
  },

  // https://www.npmjs.com/package/pinia-plugin-persistedstate
  // Persists this store's state in localStorage to reuse across sessions
  // Note that this is not efficient for large to extremely large state trees,
  // as on every state change, the entire tree is serialized and saved.
  //
  // https://github.com/prazdevs/pinia-plugin-persistedstate#-usage
  // This can be customised to use other storage implementations like sessionStorage
  persist: true,
});
