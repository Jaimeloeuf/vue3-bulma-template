<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import LoaderUI from "./components/LoaderUI.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <!--
      A timeout MUST BE specified for the fallback content to be shown by default.
      Arbitrary timeout of 10 milliseconds to account for super quick
      dynamic route loading or flush behaviour to prevent flickering.

      References:
      https://github.com/vuejs/router/issues/560
      https://github.com/vuejs/core/issues/2142
    -->
    <Suspense :timeout="10">
      <!--
        Main dynamic content from router-view.

        Suspense slots expect a single root node and cannot support fragments in
        components, therefore an extra `div` is used to wrap it to only have a
        single element passed to Suspense's default slot.

        A template tag cannot be used instead as it is compiled away and will just
        end up exposing the fragment to Suspense again. Therefore a div has to be
        used. A `template` tag would also require the #default slot name to be
        specified since the template tag is part of the slot API and cannot be used
        directly without any slot name since that will just mean that the default
        slot becomes empty.

        References:
        https://github.com/vuejs/core/issues/2143
        https://github.com/vuejs/core/issues/3795
        https://v2.vuejs.org/v2/guide/conditional.html#Conditional-Groups-with-v-if-on-lt-template-gt
        https://stackoverflow.com/questions/10704575/is-there-any-html-element-without-any-style
        https://caniuse.com/css-display-contents
      -->
      <div>
        <Navbar />

        <!-- Center router view element horizontally -->
        <div class="container">
          <component :is="Component" />
        </div>
      </div>

      <!-- Loading UI shown when router component with async setup script is still not resolved -->
      <template #fallback>
        <LoaderUI />
      </template>
    </Suspense>
  </RouterView>
</template>
