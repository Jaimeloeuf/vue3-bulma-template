<template>
  <Demo>
    <!-- Example on how to use a named slot -->
    <template #title>
      <p class="title">Vue3 Bulma Template</p>
    </template>
  </Demo>
</template>

<script>
import Demo from "../components/Demo.vue";

export default {
  name: "Home",

  components: { Demo },
};
</script>
