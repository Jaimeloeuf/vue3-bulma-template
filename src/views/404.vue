<script setup lang="ts">
import { HomeRoute } from "../router";

const loc = window.location.toString();

// An example for a issue reporting function
async function report() {
  alert("Error reported!");

  // Sample error reporting logic
  // const { oof } = await import("simpler-fetch");

  // const { res, err } = await oof
  //   .POST("/error")
  //   .once()
  //   .bodyJSON({ error: "404 route", data: loc })
  //   .runJSON();

  // if (err) return alert(`API call failed: ${err}`);
  // if (!res.ok) return alert(`Failed to get data: ${res}`);

  // alert(`Error reported, case number: ${res.id}`);
}
</script>

<template>
  <div class="columns is-multiline is-mobile mx-4 my-4">
    <div class="column is-full">
      <p class="title is-3">Page Not Found</p>
      <p class="subtitle">The page you tried to look for does not exists!</p>
    </div>

    <div class="column is-full">
      <div class="columns is-vcentered">
        <div class="column">
          <p class="subtitle">"{{ loc }}"</p>
        </div>

        <!-- Alternative can be a form that you can prefill -->
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

    <div class="column is-narrow">
      <button
        class="button is-light is-warning is-fullwidth"
        @click="$router.back"
      >
        Back
      </button>
    </div>

    <div class="column">
      <router-link
        class="button is-light is-success is-fullwidth"
        :to="{ name: HomeRoute.name }"
      >
        Home
      </router-link>
    </div>
  </div>
</template>
