import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";

export default createRouter({
  history: createWebHashHistory(),

  // Always scroll to top of view on first visit and no savedPosition, else reuse savedPosition
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { top: 0 };
  },

  /**
   * @notice
   * Routes uses lazily loaded components with route level code-splitting
   * this generates a separate chunk (about.[hash].js) for this route
   * which is lazy-loaded when the route is visited.
   */
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    /* Public only routes */
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("./components/Login.vue"),
    // },

    /* Public routes */
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("./components/404.vue"),
    },
  ],
});
