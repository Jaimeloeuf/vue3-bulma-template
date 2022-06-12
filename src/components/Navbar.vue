<template>
  <!-- See class applied to the html tag in index.html for sticky navbar -->
  <nav id="nav" class="navbar is-fixed-top is-white" role="navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="navbar-item">
        <svg viewBox="0 0 128 128" width="24" height="24">
          <path
            fill="#42b883"
            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
          />
          <path
            fill="#35495e"
            d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
          />
        </svg>
      </router-link>

      <!-- Using <a> instead of button as it does not need an icon and dont have the inverted colors on click behaviour -->
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': showMobileMenu }"
        aria-label="menu"
        data-target="navbar-menu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <!-- 3 empty span tags to show the burger menu icon -->
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div
      class="navbar-menu has-text-right"
      :class="{ 'is-active': showMobileMenu }"
    >
      <div class="navbar-end">
        <router-link
          v-for="(menuItem, i) in menuItems"
          :key="i"
          :to="menuItem.link"
          class="navbar-item"
        >
          <span @click="showMobileMenu = false">{{ menuItem.name }}</span>
        </router-link>

        <a
          class="navbar-item"
          href="https://github.com/Enkel-Digital/vue3-bulma-template"
          target="_blank"
        >
          <span @click="showMobileMenu = false">Github</span>
        </a>
      </div>
    </div>
  </nav>

  <br />
</template>

<script lang="ts">
export default {
  name: "Navbar",
  data() {
    return {
      showMobileMenu: false,

      // @todo Add menu items as needed
      menuItems: [
        // { name: "About", link: { name: "about" } },
      ],
    };
  },
};
</script>

<style scoped>
/* Gives the nav bar a white fill background and a super thin and light bottom underline to give visual seperation from the content */
#nav {
  background: white;
  border-bottom: 1px solid rgb(231, 231, 231);
}
</style>
