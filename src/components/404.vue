<script setup>
const location = window.location.toString();

// An example for a issue reporting function
// async function report() {
//   const { getAuthHeader } = await import("../firebase.js");
//   const { oof } = await import("simpler-fetch");

//   const res = await oof
//     .POST("/error")
//     .header(await getAuthHeader())
//     .data({ error: "404 route", data: location })
//     .runJSON()
//     .catch((e) => alert(`Error: ${e.message}`));

//   if (res.ok) alert(`Error reported, case number: ${res.id}`);
// }
</script>

<template>
  <div class="columns is-multiline mx-6 my-6 px-6 py-6">
    <div class="column is-full">
      <p class="title is-3">Page Not Found</p>
      <br />

      <p class="subtitle">"{{ location }}"</p>

      <div class="columns is-vcentered">
        <div class="column">
          <p class="subtitle">
            The page you tried to look for does not exists!
          </p>
        </div>

        <div class="column is-narrow">
          <button
            class="button is-light is-warning is-fullwidth"
            @click="report"
          >
            report issue
          </button>
        </div>
      </div>
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
