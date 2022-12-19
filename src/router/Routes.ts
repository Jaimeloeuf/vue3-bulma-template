import type { RouteRecordRaw } from "vue-router";

import type { AuthTypes } from "./AuthType";

import { PrivateRoute } from "./PrivateRoutes";
import { HomeRoute, AboutRoute } from "./PublicRoutes";

/**
 * RouteObject enforces the type of the meta property to be an object
 * with an explicit AuthRequirement specified.
 *
 * The meta property is NOT optional because even though routes like the
 * '404 catch all' does not need to have any AuthRequirements specified,
 * these type of routes are not defined in this `Routes` array as it is
 * only for User defined Route Objects.
 */
type RouteObject = RouteRecordRaw & {
  meta: { AuthRequirements: AuthTypes };
};

/**
 * All the **USER DEFINED** route objects to be registered with the router.
 * User MUST explicitly import route objects from their definition modules,
 * PrivateRoutes and PublicRoutes, and put it in this array for the router.
 *
 * The const assertion is used to ensure that this array cannot be modified
 * during runtime, all route object registration must be done here.
 */
export const Routes = (<const>[
  // Private Routes
  PrivateRoute,

  // Public Routes
  HomeRoute,
  AboutRoute,

  // Public Only Routes
  // ...

  // `satisfies` operator is used to typecheck all RouteObjects to ensure
  // that the AuthRequirements field is defined in the meta field.
]) satisfies ReadonlyArray<RouteObject>;
