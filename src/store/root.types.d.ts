import { TAuthState } from "./auth/auth.types";
import { TProfileState } from "./profile/profile.types";
import { TProductsState } from "./products/products.types";
import { TCategoryState } from "./category/category.types";
import { TBrandState } from "./brand/brand.types";

/**
 * Import all not available imports.
 * Module wise who made that module import accordingly.
 */
type TRootState = {
  auth: TAuthState;
  profile: TProfileState;
  product: TProductsState;
  category: TCategoryState;
  brand: TBrandState;
};

export default TRootState;
