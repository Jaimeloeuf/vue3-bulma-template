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
 * This anonymous unbinded array is used internally only for typechecking purposes.
 * Uses the `satisfies` operator to typecheck that the AuthRequirements are valid.
 *
 * Add all route objects defined in this file to this array for typechecking to
 * ensure that the route objects satisfies the `PublicRoute` type constrain.
 *
 * The alternative of this is to use the satisfies operator on every single Route
 * Object definition, but that is more tedious and error prone as they are all done
 * individually compared to this array type checking method which makes it readable.
 *
 * Also the RouteObjects cannot simply be annotated with the `PublicRoute` type directly
 * at the point of creation, because that will widen the RouteObject type to be that of
 * `PublicRoute` and ignore the const assertion, which is critical for treating the
 * `name` field as a string literal type for `RouteNames` type to be properly inferred.
 *
 * Since this array cant be referenced and used anywhere it will be tree shaked away,
 * therefore there is no need to worry about the runtime cost of this array.
 */
[HomeRoute, AboutRoute] satisfies Array<PublicRoute>;
