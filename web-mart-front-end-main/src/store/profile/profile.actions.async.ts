import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { API } from "../../middleware/middleware";

import {
  profileLoadingAction,
  profileLoadedAction,
  getProfileAction,

  setUserAddresses,
  updateUserAddress,
  deleteUserAddress,
  resetUserAddresses
} from "./profile.action";
import { successToast, errorToast } from "../../components/toast/toast";

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

    return API.get("/users/me")
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


export const getUserProfileAddresses = (): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(profileLoadingAction());

    API.get("/address/get_user_address")
      .then((response) => {
        console.log('22222222222222222222222222222222', response.data)
        dispatch(setUserAddresses(response.data));
      })
      .catch((error) => {
        dispatch(profileLoadedAction());
      });
  };
};

export const updateUserProfileAddress = (address_data: any): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(profileLoadingAction());

    API.put("/address/update_address", { ...address_data })
      .then(res => {
        if (res.data.affected) {
          dispatch(updateUserAddress(address_data));
          successToast("Updated successfully!");
        }
      })
      .catch(err => {
        console.log(err)
        errorToast(err)
      });
  };
};

export const deleteUserProfileAddress = (address_id: string): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(profileLoadingAction());

    API.delete("/address/delete_address", { data: { address_id } })
      .then(res => {
        if (res.data.affected) {
          dispatch(deleteUserAddress(address_id));
          successToast("Deleted successfully!");
        }
      })
      .catch(err => {
        console.log(err)
        errorToast(err)
      });
  };
};

