<script setup lang="ts">
/* Build time variables injected in by vite, configured in vite.config.js */

// Follow this to test other locales: https://stackoverflow.com/a/69149258
// buildTime is ISO string format, so convert to Date
const buildTime = new Date(__vite_inject.buildTime).toString();

// Calculate the version using git branch and commit hash
const version =
  __vite_inject.gitBranch +
  " " +
  __vite_inject.commitHash.slice(0, 6).toString();
</script>

<template>
  <!-- Fixed styles to ensure that the build time string it not too long and extend pass the mobile components -->
  <div class="level" style="font-size: 0.75em">
    Version: {{ version }}
    <br />
    Build Time: {{ buildTime }}
  </div>
</template>
