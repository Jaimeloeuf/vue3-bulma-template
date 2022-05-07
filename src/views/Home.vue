<template>
  <!--
    Wrapping all elements of this view in a div even though vue3 allows
    for multiple elements per template without a root element.
    However, since there is a class applied to the router-view element
    in App.vue, vue will not know which sub element to apply that class
    onto, therefore, by grouping all under a div tag, the class applied
    on router-view element in App.vue will be inherited here on this div.
  -->
  <div>
    <!--
      Component selector tab is wrapped in a sticky navbar.
      See also the class applied to the html tag in index.html
    -->
    <nav class="navbar is-fixed-top">
      <div class="tabs is-centered">
        <ul>
          <li
            :class="{ 'is-active': API_type === 'Options' }"
            @click="API_type = 'Options'"
          >
            <a>Options API</a>
          </li>

          <li
            :class="{ 'is-active': API_type === 'Composition' }"
            @click="API_type = 'Composition'"
          >
            <a>Composition API</a>
          </li>
        </ul>
      </div>
    </nav>

    <!--
      Dynamic component used based on the tab selected
      Reference: https://vuejs.org/guide/essentials/component-basics.html#dynamic-components
      
      Pass timeValue as a prop to child component.
      More specifically, timeValue is binded to child component,
      meaning that the prop value the child component receives is
      automatically updated as the `timeValue` here gets updated.
    -->
    <component :is="'Demo' + API_type" :timeAsProp="timeValue">
      <!-- Example on how to use a named slot -->
      <template #title>
        <p class="title">Vue3 Bulma Template ({{ API_type }})</p>
      </template>
    </component>

    <!-- Alternative using simple if/else vue directives instead of dynamic components -->
    <!--
      <div v-if="API_type === 'options'">
        <DemoOptions :timeAsProp="timeValue">
          <template #title>
            <p class="title">Vue3 Bulma Template (Options)</p>
          </template>
        </DemoOptions>
      </div>
      <div v-else-if="API_type === 'composition'">
        <DemoComposition :timeAsProp="timeValue">
          <template #title>
            <p class="title">Vue3 Bulma Template (Composition)</p>
          </template>
        </DemoComposition>
      </div>
      <div v-else class="section">
        <h1 class="title">INTERNAL ERROR: Invalid API type selected</h1>
      </div>
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DemoOptions from "../components/DemoOptions.vue";
import DemoComposition from "../components/DemoComposition.vue";

export default defineComponent({
  name: "Home",

  components: { DemoOptions, DemoComposition },

  data(): {
    API_type: "Options" | "Composition";
    timeValue: number;
  } {
    return {
      // Default to show Demo component built using Options API
      // API_type: "Options",
      API_type: "Composition",

      timeValue: Date.now(),
    };
  },

  created() {
    // Continuosly update the data field, and since the data field is used as a prop
    // binded to the child component, the child component prop will also be updated.
    setInterval(() => (this.timeValue = Date.now()), 1000);
  },
});
</script>
