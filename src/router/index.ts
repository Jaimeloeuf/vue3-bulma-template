/**
 * Barrel file used to export only the things required by a router user.
 */

export { getRouter } from "./Router";
export {
  createRouterWithGuard,
  createRouterWithCustomRouteGuard,
} from "./CreateRouter";

// ReExport all the RouteObjects for router user to import and use, for the route names.
export * from "./PrivateRoutes";
export * from "./PublicRoutes";

export type { AuthenticationPredicate } from "./RouteGuard";
export type { RouteGuard } from "./RouteGuard";
