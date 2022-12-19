# router/
All vue-router related logic is stored in this folder.


## Setting up the Router
By default, the router that is used have no route guard attached to it, see [main.ts](../main.ts)'s router registration. If you want to add authentication protected routes, you need to change how the router is created, by using either of the 2 factory functions from the `router` module.

### Create an auth protected router
To create an auth protected router, all you need is the `createRouterWithGuard` factory function from the `router` module. Just replace the `getRouter()` call with `createRouterWithGuard` and pass in the authentication predicate and route object names for the default redirects.

```typescript
import { createRouterWithGuard, HomeRoute, PrivateRoute } from "./router";

/**
 * Your own authentication predicate using your own authentication provider, e.g. Auth0, Firebase Auth, Okta...
 * Return true if user is authenticated and false if user is not authenticated.
 * This can be async if needed.
 */
const authPredicate = () => true;

// Sample vue app creation with new router.
// Create the router with the authentication route guard and register it.
createApp(App)
  .use(createRouterWithGuard(authPredicate, HomeRoute.name, PrivateRoute.name))
  .mount("#app");
```

### Create a router with a custom Route Guard
If you want to define and use your own Route Guard instead of the default one, you can use the `createRouterWithCustomRouteGuard` factory function from the `router` module.

```typescript
import { createRouterWithCustomRouteGuard } from "./router";

/**
 * Your own Route Guard
 */
async function RouteGuard(to, from, next) {
  // Do your own authentication and redirect logic based on the to and from args.
  next();
};


// Sample vue app creation with new router.
// Create the router with the RouteGuard and register it.
createApp(App)
  .use(createRouterWithCustomRouteGuard(RouteGuard))
  .mount("#app");
```


## How to create a new route?
*As long as your are using this router module from the template, regardless of whether you are using a RouteGuard or no RouteGuard or custom RouteGuard, the way to create and register a new route is the same.*

1. Once your view component is created, decide it's Authentication Requirement (aka is it Private or Public or Public Only)
1. Open up one of the route definition files, either [PrivateRoutes](./PrivateRoutes.ts) or [PublicRoutes](./PublicRoutes.ts) depending on the Authentication Required.
1. Create a new Route Object for your new route, see the existing route objects on how to create it, or simply duplicate one to modify.
   - Make sure the `path` and `name` fields are **UNIQUE**
   - Make sure that the object has a const assertion
1. Add the RouteObject to the typechecking array (named `PrivateRoutes` and `PublicRoutes`) near the bottom of each route definition file to ensure that your Route Object is valid.
1. Add the Route Object to the Routes array in the [Routes module](./Routes.ts)
1. DONE!



Private just means authenticated, does not mean AUTHORIZED.... v imp distinction here
## Using a Route Object
All Route Objects defined in both [PrivateRoutes](./PrivateRoutes.ts) and [PublicRoutes](./PublicRoutes.ts) are exported from the `routes` module itself.

This means that router users can directly import the Route Objects from their component files... stores... and more, to get the Route Object's name property to use for navigation, to ensure that there will be no runtime errors if any of the route name is wrong.


## Lazy Route Components
By default all the routes are lazily loaded, as defined by their async import that is only ran the first time the Route Component is navigated to. You can still define your own eagerly loaded routes by importing the Route Component at top level instead of the doing the async dynamic import.

Routes that use lazily loaded components will have route level code-splitting applied to it, which will compile to separate chunks (*COMPONENT_NAME.[hash].js*) for every route, which is lazy-loaded when the route is visited.


## Router Mode
By default the router uses `# hashed based routing` rather than history mode for simplicity, but this can be changed in [Router.ts](./Router.ts)