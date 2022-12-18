import { createRouter, createWebHashHistory } from "vue-router";

import { Routes } from "./Routes";

/**
 * Create a plain Vue Router instance, without any route guard attached.
 */
export const getRouter = () =>
  createRouter({
    history: createWebHashHistory(),

    // Alternatively, import 'createWebHistory' from "vue-router" to use history mode instead
    // history: createWebHistory(),

    // Always scroll to top of view on first visit and no savedPosition, else reuse savedPosition
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) return savedPosition;
      else return { top: 0 };
    },

    /**
     * Routes can use lazily loaded components with route level code-splitting
     * this generates a separate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     */
    routes: [
      ...Routes,

      /* 404 Catch all route handler */
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("../views/404.vue"),
      },
    ],
  });
