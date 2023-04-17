import { combineReducers, CombinedState } from "redux";
import { Reducer } from "react";

import authReducer from "./auth/auth.reducer";
import productReducer from "./products/products.reducer";
import categoryReducer from "./category/category.reducer";
import brandReducer from "./brand/brand.reducer";
import profileReducer from "./profile/profile.reducer";
import orderReducer from "./order/order.reducer";
import reportReducer from "./reports/reports.reducer";
import userReducer from "./user/user.reducer";

const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  category: categoryReducer,
  brand: brandReducer,
  product: productReducer,
  order: orderReducer,
  report: reportReducer,
  user: userReducer,
});

export default reducers;
