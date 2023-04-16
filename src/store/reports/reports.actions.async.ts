import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import {
  reportsLoadingAction,
  reportsLoadedAction,
  getCustomerReportsAction,
  getOrderReportsAction,
  getProductsReportsAction,
} from "./reports.action";
import { errorToast } from "../../components/toast/toast";
import * as requestFromServer from "../../services/reports/reportsService";

export const getCustomerReportsActionThunk = (
  search: string | null
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(reportsLoadingAction());
    requestFromServer
      .getCustomerReportsAPI(search)
      .then((response) => {
        dispatch(getCustomerReportsAction(response.data));
      })
      .catch((error) => {
        dispatch(reportsLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

export const getOrderReportsActionThunk = (
  search: string | null
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(reportsLoadingAction());

    requestFromServer
      .getOrderReportsAPI(search)
      .then((response) => {
        dispatch(getOrderReportsAction(response.data));
      })
      .catch((error) => {
        dispatch(reportsLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

export const getProductReportsActionThunk = (
  search: string | null
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(reportsLoadingAction());

    requestFromServer
      .getProductReportsAPI(search)
      .then((response) => {
        dispatch(getProductsReportsAction(response.data));
      })
      .catch((error) => {
        dispatch(reportsLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};
