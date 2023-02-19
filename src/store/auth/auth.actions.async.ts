import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import {
  authPending,
  loginSuccess,
  authSuccess,
  forgotPassword,
  resetForgotPasswordSuccess,
  changePassword,
  logout,
  signupSuccess,
} from "./auth.action";
import { errorToast, successToast } from "../../components/toast/toast";
import * as requestFromServer from "../../services/auth/authService";
import {
  TLoginPayloadData,
  TSignupPayloadData,
  TForgotPasswordPayloadData,
  TResetForgotPasswordPayloadData,
  TChangePasswordPayloadData,
} from "./auth.types";

/*
    you can replace this implementation with whatever api call using axios or fetch etc 
    replace ThunkAction<void, {}, {}, AnyAction> by  replace ThunkAction<Promise<void>, {}, {}, AnyAction>
*/

/**
 * auth user login thunk
 * @param values
 */
export const loginActionThunk = (
  values: TLoginPayloadData,
  navigate: Function
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(authPending());
    setTimeout(() => {
      dispatch(authSuccess());
    }, 10000);
    requestFromServer
      .authLogin(values)
      .then((response) => {
        dispatch(
          loginSuccess({ token: response.data.access_token, refreshToken: response.data.refresh_token })
        );
        localStorage.setItem("lToken", response.data.access_token);
        localStorage.setItem("lRefreshToken", response.data.refresh_token);
        navigate('/home');
      })
      .catch((error) => {
        dispatch(authSuccess());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message || "Invalid Credentials" || "Something went wrong");
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * auth user login thunk
 * @param values
 */
 export const signupActionThunk = (
  values: TSignupPayloadData,
  navigate: Function
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(authPending());
    setTimeout(() => {
      dispatch(authSuccess());
    }, 10000);
    requestFromServer
      .authSignup(values)
      .then((response) => {
        dispatch(
          signupSuccess({ token: response.data.access_token, refreshToken: response.data.refresh_token })
        );
        localStorage.setItem("lToken", response.data.access_token);
        localStorage.setItem("lRefreshToken", response.data.refresh_token);
        navigate('/home');
      })
      .catch((error) => {
        dispatch(authSuccess());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * auth user forgot password thunk
 * @param values
 * @returns
 */
export const forgotPasswordActionThunk = (
  values: TForgotPasswordPayloadData,
  showConfirmModal: Function
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(authPending());
    requestFromServer
      .authForgotPassword(values)
      .then(() => {
        dispatch(forgotPassword());
        showConfirmModal();
      })
      .catch((error: any) => {
        dispatch(authSuccess());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * auth user reset forgot password thunk
 * @param values
 * @returns
 */
export const ResetForgotPasswordActionThunk = (
  values: TResetForgotPasswordPayloadData,
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(authPending());

    requestFromServer
      .authResetForgotPassword(values)
      .then(async (response: any) => {
        await dispatch(resetForgotPasswordSuccess());
        successToast(response.data.message);
        localStorage.removeItem("rememberMe");
      })
      .catch((error: any) => {
        dispatch(authSuccess());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * auth user change password thunk
 * @param values
 * @returns
 */
export const changePasswordActionThunk = (
  values: TChangePasswordPayloadData
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(authPending());
    requestFromServer
      .authChangePassword(values)
      .then((response: any) => {
        dispatch(changePassword());
        if (response.data && response.data.message) {
          successToast(response.data.message);
        }
        localStorage.removeItem("rememberMe");
        dispatch(logout());
      })
      .catch((error: any) => {
        dispatch(authSuccess());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};
