import type { RouteRecordRaw } from "vue-router";
import type { Private } from "./AuthType";
import { AuthType } from "./AuthType";

/*
  Define all Private Route Objects here, before adding them to the
  type checking array defined at the bottom of this module.

  `as const` needed for TS to use strict types, and name property's
  string value as the property's string literal type, so that it
  can be properly inferred in `RouteNames` module.
*/

export const PrivateRoute = {
  path: "/private-route",
  name: "private-route",
  component: () => import("../views/DemoPrivateView.vue"),
  meta: { AuthRequirements: AuthType.Private },
} as const;

/**
 * A Private route requires AuthRequirements to be specified as Private only
 */
type PrivateRoute = RouteRecordRaw & {
  meta: { AuthRequirements: Private };
};

/**
 * This anonymous unbinded array is used internally only for typechecking purposes.
 * Uses the `satisfies` operator to typecheck that the AuthRequirements are valid.
 *
 * Add all route objects defined in this file to this array for typechecking to
 * ensure that the route objects satisfies the `PrivateRoute` type constrain.
 *
 * The alternative of this is to chain the satisfies operator on every single Route
 * Object definition, but that is more tedious and error prone as they are all done
 * individually compared to this array type checking method which makes it readable.
 *
 * Also the RouteObjects cannot simply be annotated with the `PrivateRoute` type directly
 * at the point of creation, because that will widen the RouteObject type to be that of
 * `PrivateRoute` and ignore the `as const`, which is critical for treating the `name`
 * field as a string literal type for `RouteNames` type to be properly inferred.
 *
 * Since this array cant be referenced and used anywhere it will be tree shaked away,
 * therefore there is no need to worry about the runtime cost of this array.
 */
[PrivateRoute] satisfies Array<PrivateRoute>;
