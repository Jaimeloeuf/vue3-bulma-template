import type { RouteRecordRaw } from "vue-router";

import type { AuthTypes } from "./AuthType";

import { PrivateRoute } from "./PrivateRoutes";
import { HomeRoute, AboutRoute } from "./PublicRoutes";

/**
 * RouteObject enforces the type rule that if meta property is specified,
 * it must be an object with an explicit AuthRequirement specified.
 * The meta property is optional because a route like 404 catch all does
 * not need to have any AuthRequirements specified.
 */
type RouteObject = RouteRecordRaw & {
  meta: { AuthRequirements: AuthTypes };
};

/**
 * All the routes objects to be registered with the router. User MUST
 * explicitly import route objects from their definition modules, PrivateRoutes
 * and PublicRoutes, and put it in this array for the router to use it.
 */
export const Routes = [
  // Private Routes
  PrivateRoute,

  // Public Routes
  HomeRoute,
  AboutRoute,

  // Public Only Routes
  // ...

  //   @todo Fix these docs
  // `satisfies` operator to do typechecking to ensure that the AuthRequirements is valid.
  // `as const` to narrow the type and make it as strict as possible.
  //
  // @todo However the chaining is not working for now, for the current TS/Prettier/Eslint version so not used yet.
  // ] as const satisfies Array<RouteObject>;
] satisfies Array<RouteObject>;
