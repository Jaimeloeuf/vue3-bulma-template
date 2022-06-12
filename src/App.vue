<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />

  <!-- Center router view element horizontally -->
  <!--
    By passing this attribute to child components, the child components
    cannot be a fragment (return multiple root nodes) as vue js will
    not know which node to bind the fallthrough attribute to.

    See reference:
    https://v3-migration.vuejs.org/new/fragments.html#overview
    https://vuejs.org/guide/components/attrs.html#fallthrough-attributes
  -->
  <router-view class="container" />
</template>

<style>
/* Unscoped styles that applies to the entire application */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*
  Color input pink if it is invalid --> e.g. when telephone number does not match the specified pattern
  Will only activate if the placeholder is not currently being shown, meaning will not show before user type anything
*/
input:not(:placeholder-shown):invalid {
  background-color: lightpink;
}
</style>
