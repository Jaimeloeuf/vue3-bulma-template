<template>
  <!--
    Pass timeValue as a prop to child component.
    More specifically, timeValue is binded to child component,
    meaning that the prop value the child component receives is
    automatically updated as the `timeValue` here gets updated.
  -->
  <Demo :timeAsProp="timeValue">
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

  data() {
    return { timeValue: Date.now() };
  },

  created() {
    // Continuosly update the data field, and since the data field is used as a prop
    // binded to the child component, the child component prop will also be updated.
    setInterval(() => (this.timeValue = Date.now()), 1000);
  },
};
</script>
