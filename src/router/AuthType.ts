/**
 * Module exporting Auth Type enum
 * @module AuthEnum
 */

export type Public = 1;
export type Public_only = 2;
export type Private = 3;
export type AuthTypes = Public | Public_only | Private;

/**
 * Define an enum of all authentication requirements types possible for the routes.
 * When performing checks and running router gaurd functions, check against this AuthType enum.
 * The Enum object is frozen to prevent it from getting modified.
 *
 * Auth types:
 * - public: All User can access route regardless of current auth status.
 * - public_only: Only accessible if user is not logged in. Example would be the login route.
 * - private: Accessible to users after authentication.
 */
export default Object.freeze({
  public: 1,
  public_only: 2,
  private: 3,
});
