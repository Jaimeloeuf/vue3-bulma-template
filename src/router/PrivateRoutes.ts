import type { RouteRecordRaw } from "vue-router";
import type { Private } from "./AuthType";
import { AuthType } from "./AuthType";

/**
 * A Private route requires AuthRequirements to be specified as Private only
 */
type PrivateRoute = RouteRecordRaw & {
  meta: { AuthRequirements: Private };
};

/**
 * @notice
 * Routes uses lazily loaded components with route level code-splitting
 * this generates a separate chunk (about.[hash].js) for this route
 * which is lazy-loaded when the route is visited.
 */
export const PrivateRoutes: Readonly<Array<PrivateRoute>> = [
  {
    path: "/private-route",
    name: "private-route",
    component: () => import("../views/DemoPrivateView.vue"),
    meta: { AuthRequirements: AuthType.Private },
  },

  // `satisfies` operator to do typechecking to ensure that the AuthRequirements is valid.
  // `as const` to narrow the type and make it as strict as possible.
  //
  // @todo However the chaining is not working for now, for the current TS/Prettier/Eslint version so not used yet.
  // ] as const satisfies Array<PrivateRoute>;
] satisfies Array<PrivateRoute>;
