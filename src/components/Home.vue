<template>
  <div class="section">
    <p class="title">Vue3 Bulma Template</p>

    name: {{ name }}
    <br />

    isAdmin: {{ isAdmin }}
    <br />

    <div class="box m-3">
      All data in mainStore:
      <br />
      <code>
        {{ mainStore }}
      </code>
    </div>
  </div>
</template>

<script>
import { mapState, mapStores } from "pinia";
import { useStore } from "../store";

export default {
  name: "Home",

  computed: {
    // Access state data from store inside the component
    ...mapState(useStore, ["name", "isAdmin"]),

    // Alternatively, use this to access the whole store in your component
    // https://pinia.vuejs.org/cookbook/options-api.html#giving-access-to-the-whole-store
    // The store will be accessible as its id + 'Store'
    ...mapStores(useStore),
  },
};
</script>
