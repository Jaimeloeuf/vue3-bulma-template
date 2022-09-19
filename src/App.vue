<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />

  <!-- Center router view element horizontally -->
  <div class="container">
    <router-view />
  </div>

  <!--
    Alternative using fragment:

    <router-view class="container" />

    By passing this attribute to child components, the child components
    cannot be a fragment (return multiple root nodes) as vue js will
    not know which node to bind the fallthrough attribute to.

    Thus all elements of the child view is usually wrapped in a div even
    though vue3 allows for multiple elements per template without a root
    element because vue will not know which sub element to apply that class
    onto, therefore, by grouping all under a div tag, the class applied
    on router-view element will be inherited on the wrapper div.

    See reference:
    https://v3-migration.vuejs.org/new/fragments.html#overview
    https://vuejs.org/guide/components/attrs.html#fallthrough-attributes
  -->
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
