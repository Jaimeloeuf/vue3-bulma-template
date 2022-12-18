import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

import { AuthType, type AuthTypes } from "./AuthType";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

/**
 * RouteObject enforces the type rule that if meta property is specified,
 * it must be an object with an explicit AuthRequirement specified.
 * The meta property is optional because a route like 404 catch all does
 * not need to have any AuthRequirements specified.
 */
type RouteObject = RouteRecordRaw & {
  meta?: { AuthRequirements: AuthTypes };
};

export const router = createRouter({
  history: createWebHashHistory(),

  // Alternatively, import 'createWebHistory' to use history mode instead
  // history: createWebHistory(),

  // Always scroll to top of view on first visit and no savedPosition, else reuse savedPosition
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { top: 0 };
  },

  /**
   * @notice
   * Routes uses lazily loaded components with route level code-splitting
   * this generates a separate chunk (about.[hash].js) for this route
   * which is lazy-loaded when the route is visited.
   */
  routes: [
    ...PublicRoutes,
    ...PrivateRoutes,

    /* 404 Catch all route handler */
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/404.vue"),
    },
  ] satisfies Array<RouteObject>,
});

/**
 * Function to create an object to easily check the required auth requirement of a route object.
 */
const requiredAuth = (AuthRequirements?: AuthTypes) => ({
  public: AuthRequirements === AuthType.Public,
  public_only: AuthRequirements === AuthType.PublicOnly,
  private: AuthRequirements === AuthType.Private,
});

/**
 * Attach a Router Gaurd Middleware function to run when navigation is made before the actual navigation.
 * The guard checks if user's current auth status matches required auth status for the route being accessed.
 */
router.beforeEach(function (to, _from, next) {
  // @todo Get the user's auth status from your auth service/lib
  const isAuthenticated = true;

  // Get AuthStatus required for accessing the route.
  // Get auth requirements from first route object that matches with route navigated to
  const AuthType_required_is = requiredAuth(
    to.matched[0]?.meta.AuthRequirements as AuthTypes | undefined
  );

  /* Call the next middleware based on authentication status */

  // If route is auth protected and user not logged in, redirect to login page
  if (AuthType_required_is.private && !isAuthenticated) next({ name: "login" });
  // If route is public only and user is logged in, redirect to default private route of home
  else if (AuthType_required_is.public_only && isAuthenticated)
    next({ name: "home" });
  // Else, just continue navigation as per user request.
  else next();
});
