import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("main", {
  // arrow function recommended for full type inference
  state: () => ({
    // all these properties will have their type inferred automatically
    name: "User",
    isAdmin: true,
  }),

  // https://pinia.vuejs.org/core-concepts/actions.html
  actions: {},
});
