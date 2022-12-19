import type { RouteRecordRaw } from "vue-router";
import type { Public, PublicOnly } from "./AuthType";
import { AuthType } from "./AuthType";

/*
  Define all Private Route Objects here, before adding them to the
  type checking array defined at the bottom of this module.

  const assertion is needed to tell TS to use stricter types, by
  treating string types like the `name` property as a string literal
  type instead of a string type (ie dont widen any types), so that
  it can be properly inferred in `RouteNames` module.
*/

export const HomeRoute = <const>{
  path: "/",
  name: "home",
  component: () => import("../views/Home.vue"),
  meta: { AuthRequirements: AuthType.Public },
};

export const AboutRoute = <const>{
  path: "/about",
  name: "about",
  component: () => import("../views/About.vue"),
  meta: { AuthRequirements: AuthType.Public },
};

/**
 * A public route requires AuthRequirements to be specified as Public or PublicOnly
 */
type PublicRoute = RouteRecordRaw & {
  meta: { AuthRequirements: Public | PublicOnly };
};

/**
 * This array is only used internally for typechecking and type creation purposes
 * only, and is never used as a value anywhere, therefore there is no need to worry
 * about this array's runtime cost as this will be tree shaked away as dead code.
 *
 * Add all route objects defined in this file to this array for typechecking to
 * ensure that the route objects satisfies the `PublicRoute` type constrain using
 * the `satisfies` operator.
 *
 * Typechecking is done here instead of doing it for every Route Object individually
 * as the RouteObjects cannot be annotated with the `PublicRoute` type directly at the
 * point of creation as that will widen the RouteObject type to be that of `PublicRoute`
 * and ignore the const assertion, which is critical for treating the `name` field as
 * a string literal type for `PublicRouteNames` type to be properly inferred.
 */
const PublicRoutes = [HomeRoute, AboutRoute] satisfies Array<PublicRoute>;

/**
 * Sum type of all Public Route object names, used to constrain
 * function parameters' type instead of just accepting string type.
 */
export type PublicRouteNames = typeof PublicRoutes[number]["name"];
