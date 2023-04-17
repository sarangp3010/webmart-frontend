import { getUsersPending, getUsersSuccess, deleteUserPending, deleteUserSuccess, deleteUserFailed } from "./user.action";
import * as requestFromServer from "../../services/users/userService";
import { errorToast, successToast } from "../../components/toast/toast";

export const getUsersActionThunk = (userType: string, search: any): any => {
  return (dispatch: any) => {
    dispatch(getUsersPending());
    requestFromServer
      .getUser(userType, search)
      .then((res) => {
        dispatch(getUsersSuccess(res.data));
      })
      .catch((err) => {
        errorToast(err?.response?.data?.message);
      });
  };
};

export const deleteUserActionThunk = (
  userId: string,
): any => {
  return (dispatch: any) => {
    dispatch(deleteUserPending());
    requestFromServer
      .deleteUser(userId)
      .then((res) => {
        if (res?.status === 201 || res?.status === 204) {
          successToast("Product deleted successfully");
          dispatch(deleteUserSuccess({ userId }));
        } else {
          errorToast("Something went wrong");
          dispatch(deleteUserFailed());
        }
      })
      .catch((err) => {
        errorToast(err?.response?.data?.message || "Something went wrong");
        dispatch(deleteUserFailed());
      });
  };
};
