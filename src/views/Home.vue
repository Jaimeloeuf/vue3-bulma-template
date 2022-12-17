<script setup lang="ts">
import { ref } from "vue";

import DemoComponent from "../components/DemoComponentWithCompositionAPI.vue";

const timeValue = ref<number>(Date.now());

// Start running this interval on component creation
// Continuosly update the data field, and since the data field is used as a prop
// binded to the child component, the child component prop will also be updated.
setInterval(() => (timeValue.value = Date.now()), 1000);
</script>

<template>
  <div class="section mx-3 py-0">
    <DemoComponent :timeAsProp="timeValue">
      <template #title>
        <p class="title mx-3">
          Vue3 Bulma Template (With Composition API only)
        </p>
      </template>
    </DemoComponent>
  </div>
</template>
