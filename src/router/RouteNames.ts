import type { Routes } from "./Routes";

/**
 * Sum type of all route object names, used to type constrain
 * function parameters instead of just requiring a string type.
 *
 * Alternative method of creating `RouteNames` type if there
 * is no single `Routes` array defined.
 * ```typescript
 * import type { PrivateRoutes } from "./PrivateRoutes";
 * import type { PublicRoutes } from "./PublicRoutes";
 *
 * export type RouteNames =
 *   | typeof PrivateRoutes[number]["name"]
 *   | typeof PublicRoutes[number]["name"];
 * ```
 */
export type RouteNames = typeof Routes[number]["name"];
