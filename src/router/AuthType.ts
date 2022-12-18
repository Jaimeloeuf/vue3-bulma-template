/**
 * Module exporting Auth Type enum
 * @module AuthEnum
 */

export type Public = 1;
export type PublicOnly = 2;
export type Private = 3;
export type AuthTypes = Public | PublicOnly | Private;

/**
 * Define an enum of all authentication requirements types possible for the routes.
 * When performing checks and running router gaurd functions, check against this AuthType enum.
 * The Enum object is frozen to prevent it from getting modified.
 *
 * Auth types:
 * - public: All User can access route regardless of current auth status.
 * - publicOnly: Only accessible if user is not logged in. Example would be the login route.
 * - private: Accessible to users after authentication.
 */
export const AuthType = Object.freeze({
  Public: 1,
  PublicOnly: 2,
  Private: 3,
});
