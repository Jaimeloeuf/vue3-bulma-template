import { getRouter } from "./Router";
import { routeGuardFF, type AuthenticationPredicate } from "./RouteGuard";
import type { PrivateRouteNames } from "./PrivateRoutes";
import type { PublicRouteNames } from "./PublicRoutes";
import type { RouteGuard } from "./RouteGuard";

/**
 * Use this function to create a router with a route guard that you can
 * customise using your authentication predicate and default redirect
 * routes for redirecting the user's navigation if they do not meet
 * certain conditions.
 *
 * Get the name of the route that you want to redirect to by importing
 * the route object and acessing its name property.
 */
export function createRouterWithGuard(
  authenticationPredicate: AuthenticationPredicate,
  redirect_for_route_protected_but_not_authenticated: PublicRouteNames = "home",
  redirect_for_route_public_only_but_authenticated: PrivateRouteNames = "private-route"
) {
  const router = getRouter();

  // Attach the RouteGaurd Middleware function to run before every navigation,
  // to check if user's current authentication status matches the authentication
  // requirements of the route being accessed.
  router.beforeEach(
    routeGuardFF(
      authenticationPredicate,
      redirect_for_route_protected_but_not_authenticated,
      redirect_for_route_public_only_but_authenticated
    )
  );

  return router;
}

/**
 * Use this function to create a router with a custom route guard if you
 * do not want to use the default route guard provided.
 *
 * See `./RouteGuard.ts` to get inspiration on how to implement a route guard
 */
export function createRouterWithCustomRouteGuard(routeGuard: RouteGuard) {
  const router = getRouter();

  // Attach the RouteGaurd Middleware function to run before every navigation,
  // to check if user's current authentication status matches the authentication
  // requirements of the route being accessed.
  router.beforeEach(routeGuard);

  return router;
}
