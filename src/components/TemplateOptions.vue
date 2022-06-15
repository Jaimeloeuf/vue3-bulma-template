<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapState, mapWritableState, mapActions, mapStores } from "pinia";
import { useStore } from "../store/index";

// import { oof } from "simpler-fetch";

export default defineComponent({
  name: "TemplateOptions",

  props: {},

  data(): { value: string } {
    return { value: "" };
  },

  computed: {
    // Access state data from store inside the component
    // ...mapState(useStore, ["someValue"]), // Readonly data
    // ...mapWritableState(useStore, ["someMutableValue"]), // Writable data

    // Alternatively, use this to access the whole store in your component
    // https://pinia.vuejs.org/cookbook/options-api.html#giving-access-to-the-whole-store
    // The store will be accessible as its id + 'Store'
    ...mapStores(useStore),
  },

  methods: {
    // Import an action to use directly in the component
    // ...mapActions(useStore, ["someAction"]),

    reset() {
      // Use the store's id + 'Store' as the name of the store
      // Access any actions associated with the imported store like `this.mainStore.myAction()`
      this.mainStore.$reset();
    },
  },
});
</script>
