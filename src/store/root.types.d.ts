import { TAuthState } from "./auth/auth.types";
import { TProfileState } from "./profile/profile.types";

/**
 * Import all not available imports.
 * Module wise who made that module import accordingly.
 */
type TRootState = {
  auth: TAuthState;
  profile: TProfileState;
};

export default TRootState;
