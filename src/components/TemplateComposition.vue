<script setup lang="ts">
// Unlike using Options API with script tags, the component name cannot
// be defined inside this setup block, which means that if only the
// setup block is used, then the name of the component in the vue js dev
// tools will show the name in which this component is imported as.

// import { ref } from "vue";
// import { oof } from "simpler-fetch";

// import { useStore } from "../store/index";

// See documentation on using props as initial value without subscribing to changes
// https://vuejs.org/guide/components/props.html#one-way-data-flow
defineProps({});

// Create data variables as needed
// let value = ref<string | undefined>(undefined);

// Import the store as needed
// const mainStore = useStore();

// Method to call API for data and set data variable with response
// async function getData() {
//   const res = await oof
//     .GET("https://jsonplaceholder.typicode.com/todos/1")
//     .runJSON()
//     .catch((e) => alert(`Error: ${e.message}`));

//   if (!res?.ok) return alert("Failed to get data");

//   value.value = "API Call works!";
// }
</script>

<template>
  <div></div>
</template>
