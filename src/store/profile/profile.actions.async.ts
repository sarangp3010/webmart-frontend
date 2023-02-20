import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import {
  profileLoadingAction,
  profileLoadedAction,
  getProfileAction,
} from "./profile.action";
import { errorToast } from "../../components/toast/toast";
import * as requestFromServer from "../../services/profile/profileService";

/*
    you can replace this implementation with whatever api call using axios or fetch etc 
    replace ThunkAction<void, {}, {}, AnyAction> by  replace ThunkAction<Promise<void>, {}, {}, AnyAction>
*/

/**
 * get profile data thunk
 * @returns
 */
export const getProfileActionThunk = (): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(profileLoadingAction());

    requestFromServer
      .getProfileDataAPI()
      .then((response) => {
        dispatch(getProfileAction(response.data));
      })
      .catch((error) => {
        dispatch(profileLoadedAction());
        // if (error.response && error.response.data) {
        //   errorToast(error.response.data.message);
        // } else {
        //   errorToast("Something went wrong.");
        // }
      });
  };
};
