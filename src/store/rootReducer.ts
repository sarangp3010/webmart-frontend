import { combineReducers, CombinedState } from "redux";
import { Reducer } from "react";

import authReducer from "./auth/auth.reducer";
import productReducer from "./products/products.reducer";
import categoryReducer from "./category/category.reducer";
import brandReducer from "./brand/brand.reducer";
import profileReducer from "./profile/profile.reducer";

const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  category: categoryReducer,
  brand: brandReducer,
  product: productReducer,
});

export default reducers;
