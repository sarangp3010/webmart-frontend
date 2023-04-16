import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import {
  getOrderListSuccess,
  getOrderListPending,
  getOrderListFailed,
  getOrderByIdSuccess,
  getOrderByIdPending,
  getOrderByIdFailed
} from "./order.action";
import * as requestFromServer from "../../services/order/order";
import { errorToast } from "../../components/toast/toast";

export const getOrderListActionThunk = (data: any): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getOrderListPending());
    requestFromServer
      .getAllOrder(data)
      .then((res) => {
        dispatch(getOrderListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getOrderListFailed());
        errorToast("Something went wrong");
      });
  };
};

export const getOrderByIdActionThunk = (orderId: string): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getOrderByIdPending());
    requestFromServer
      .getOrderById(orderId)
      .then((res) => {
        dispatch(getOrderByIdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getOrderByIdFailed());
        errorToast("Something went wrong");
      });
  };
};