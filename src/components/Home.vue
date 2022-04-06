<template>
  <div class="section">
    <p class="title">Vue3 Bulma Template</p>

    name: {{ name }}
    <br />

    isAdmin: {{ isAdmin }}
    <br />

    <div class="box m-3">
      <label>
        Enter a new name

        <div class="field has-addons">
          <div class="control is-expanded">
            <input
              type="text"
              class="input"
              v-model="newName"
              @keypress.enter="updateName"
              placeholder="New Name"
            />
          </div>
          <div class="control">
            <button class="button is-info" @click="updateName">Update</button>
          </div>
        </div>
      </label>
    </div>

    <div class="box m-3">
      <label>
        Direct 2 way binding using v-model with state variable from store

        <input
          type="text"
          class="input"
          v-model="name"
          placeholder="XXX to directly binded to store"
        />
      </label>
    </div>

    <div class="box m-3">
      <div class="columns is-vcentered">
        <div class="column">
          <p class="subtitle">All data in mainStore</p>
        </div>

        <div class="column is-narrow">
          <button class="button is-light is-danger" @click="reset">
            Reset State
          </button>
        </div>
      </div>

      <code>
        {{ mainStore }}
      </code>
    </div>

    <div class="box m-3">
      <p class="subtitle">Test API method</p>

      <div class="columns">
        <div class="column is-half">
          <button
            class="button is-light is-danger is-fullwidth"
            @click="value = undefined"
          >
            Clear Data
          </button>
        </div>
        <div class="column is-half">
          <button
            class="button is-light is-success is-fullwidth"
            @click="getData"
          >
            Get Data
          </button>
        </div>
      </div>

      <div class="mt-5" v-if="value">
        <code>{{ value }}</code>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState, mapStores } from "pinia";
import { useStore } from "../store";

import { oof } from "simpler-fetch";

export default {
  name: "Home",

  data() {
    return { newName: undefined, value: undefined };
  },

  computed: {
    // Access state data from store inside the component
    ...mapState(useStore, ["isAdmin"]), // Readonly data
    ...mapWritableState(useStore, ["name"]), // Writable data

    // Alternatively, use this to access the whole store in your component
    // https://pinia.vuejs.org/cookbook/options-api.html#giving-access-to-the-whole-store
    // The store will be accessible as its id + 'Store'
    ...mapStores(useStore),
  },

  methods: {
    updateName() {
      this.name = this.newName;
      this.newName = undefined;
    },

    reset() {
      // Use the store's id + 'Store' as the name of the store
      // Access any actions associated with the imported store like `this.mainStore.myAction()`
      this.mainStore.$reset();
    },

    // Method to call API for data and set data variable with response
    async getData() {
      const res = await oof
        .GET("https://jsonplaceholder.typicode.com/todos/1")
        .runJSON()
        .catch((e) => alert(`Error: ${e.message}`));

      if (!res?.ok) return alert("Failed to get data");
      this.value = res;
    },
  },
};
</script>
