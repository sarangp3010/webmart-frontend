import { combineReducers, CombinedState } from "redux";
import { Reducer } from "react";

import authReducer from "./auth/auth.reducer";
import profileReducer from "./profile/profile.reducer";

const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export default reducers;
