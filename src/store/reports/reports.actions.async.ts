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
  search: string | null,
  page: number,
  perPage: number
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(reportsLoadingAction());
    requestFromServer
      .getCustomerReportsAPI(search, page, perPage)
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
  search: string | null,
  startDate: any,
  endDate: any,
  page: number,
  perPage: number
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(reportsLoadingAction());

    requestFromServer
      .getOrderReportsAPI(search, startDate, endDate, page, perPage)
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
  search: string | null,
  page: number,
  perPage: number
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(reportsLoadingAction());

    requestFromServer
      .getProductReportsAPI(search, page, perPage)
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
