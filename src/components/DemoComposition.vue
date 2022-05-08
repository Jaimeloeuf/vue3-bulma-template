<script setup lang="ts">
// Unlike using Options API with script tags, the component name cannot
// be defined inside this setup block, which means that if only the
// setup block is used, then the name of the component in the vue js dev
// tools will show the name in which this component is imported as.

import { ref } from "vue";

import { oof } from "simpler-fetch";

import { useStore } from "../store/index";

let newName = ref<string | undefined>(undefined);
let value = ref<object | undefined>(undefined);

// See documentation on using props as initial value without subscribing to changes
// https://vuejs.org/guide/components/props.html#one-way-data-flow
defineProps({
  timeAsProp: {
    type: Number,
    required: true,
    default: Date.now(),

    // See also: prop validation
    // https://vuejs.org/guide/components/props.html#prop-validation
  },
});

const mainStore = useStore();

const random = mainStore.random;
const name = mainStore.name;

const updateRandom = mainStore.updateRandom;

function reset() {
  mainStore.$reset();
}

function updateName() {
  mainStore.name = newName;
  newName = undefined;
}

// Method to call API for data and set data variable with response
async function getData() {
  const res = await oof
    .GET("https://jsonplaceholder.typicode.com/todos/1")
    .runJSON()
    .catch((e) => alert(`Error: ${e.message}`));

  if (!res?.ok) return alert("Failed to get data");
  value = res;
}
</script>

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
