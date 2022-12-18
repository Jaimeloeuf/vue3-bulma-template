import type { RouteRecordRaw } from "vue-router";
import type { Public, PublicOnly } from "./AuthType";
import { AuthType } from "./AuthType";

import Home from "../views/Home.vue";

/**
 * A public route requires AuthRequirements to be specified as Public or PublicOnly
 */
type PublicRoute = RouteRecordRaw & {
  meta: { AuthRequirements: Public | PublicOnly };
};

/**
 * @notice
 * Routes uses lazily loaded components with route level code-splitting
 * this generates a separate chunk (about.[hash].js) for this route
 * which is lazy-loaded when the route is visited.
 */
export const PublicRoutes: Readonly<Array<PublicRoute>> = [
  /* Public only routes */
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("../views/Login.vue"),
  // },

  {
    path: "/",
    name: "home",
    component: Home,
    meta: { AuthRequirements: AuthType.Public },
  },

  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: { AuthRequirements: AuthType.Public },
  },

  // `satisfies` operator to do typechecking to ensure that the AuthRequirements is valid.
  // `as const` to narrow the type and make it as strict as possible.
  //
  // @todo However the chaining is not working for now, for the current TS/Prettier/Eslint version so not used yet.
  // ] as const satisfies Array<PublicRoute>;
] satisfies Array<PublicRoute>;
