<template>
  <div class="columns is-multiline mx-6 my-6">
    <div class="column is-full">
      <p class="title">Vue3 and Bulma Template</p>
      <p class="subtitle is-5">
        <a href="https://github.com/Jaimeloeuf" target="_blank">By JJ</a>
      </p>
    </div>

    <div class="column is-full">
      <hr />
    </div>

    <div class="column is-half">
      <button
        class="button is-light is-warning is-fullwidth"
        @click="$router.back"
      >
        Back
      </button>
    </div>

    <div class="column is-half">
      <router-link
        class="button is-light is-success is-fullwidth"
        :to="{ name: 'home' }"
      >
        Home
      </router-link>
    </div>
  </div>
</template>
