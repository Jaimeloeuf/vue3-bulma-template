<template>
  <div class="section">
    <!-- Named slot, see usage in Home.vue -->
    <slot name="title"></slot>

    <div class="box m-3">
      <p class="subtitle mb-2">Prop value from parent component (Home.vue)</p>

      {{ new Date(timeAsProp) }}
    </div>

    <div class="box m-3">
      <p class="subtitle">State variable from store</p>

      name: {{ name }}
      <br />

      random: {{ random }}
    </div>

    <div class="box m-3">
      <label>
        Enter a new name

        <div class="field has-addons">
          <div class="control is-expanded">
            <input
              v-model="newName"
              type="text"
              class="input"
              placeholder="New Name"
              @keypress.enter="updateName"
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
          v-model="name"
          type="text"
          class="input"
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
          <button class="button is-light is-warning" @click="updateRandom">
            Update 'random'
          </button>
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

      <div v-if="value" class="mt-5">
        <code>{{ value }}</code>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapState, mapWritableState, mapActions, mapStores } from "pinia";
import { useStore } from "../store/index";

import { oof } from "simpler-fetch";

export default defineComponent({
  name: "DemoOptions",

  // See documentation on using props as initial value without subscribing to changes
  // https://vuejs.org/guide/components/props.html#one-way-data-flow
  props: {
    timeAsProp: {
      type: Number,
      required: true,
      default: Date.now(),

      // See also: prop validation
      // https://vuejs.org/guide/components/props.html#prop-validation
    },
  },

  // @todo If using this type, then the this.name = this.newName assignment in updateName method errors out...?
  // @todo Setting newName to undefined for now to prevent the error
  data(): { newName?: undefined; value?: object } {
    return { newName: undefined, value: undefined };
  },

  computed: {
    // Access state data from store inside the component
    ...mapState(useStore, ["random"]), // Readonly data
    ...mapWritableState(useStore, ["name"]), // Writable data

    // Alternatively, use this to access the whole store in your component
    // https://pinia.vuejs.org/cookbook/options-api.html#giving-access-to-the-whole-store
    // The store will be accessible as its id + 'Store'
    ...mapStores(useStore),
  },

  methods: {
    // Import an action to use directly in the component
    ...mapActions(useStore, ["updateRandom"]),

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
      const { res, err } = await oof
        .GET("https://jsonplaceholder.typicode.com/todos/1")
        .once()
        .runJSON();

      if (err) return alert(`API call failed: ${err}`);
      if (!res.ok) return alert(`Failed to get data: ${res}`);

      this.value = res;
    },
  },
});
</script>
