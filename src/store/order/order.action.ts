import { action } from "typesafe-actions";
import TOrderActionTypeEnum from "./order.enum";

const getOrderByIdSuccess = (payload: any) =>
  action(TOrderActionTypeEnum.GET_ORDER_BYID_SUCCESS, payload);

const getOrderByIdFailed = () =>
  action(TOrderActionTypeEnum.GET_ORDER_BYID_FAILED);

const getOrderByIdPending = () =>
  action(TOrderActionTypeEnum.GET_ORDER_BYID_PENDING);

const getOrderListSuccess = (payload: any) =>
  action(TOrderActionTypeEnum.GET_ORDER_LIST_SUCCESS, payload);

const getOrderListFailed = () =>
  action(TOrderActionTypeEnum.GET_ORDER_LIST_FAILED);

const getOrderListPending = () =>
  action(TOrderActionTypeEnum.GET_ORDER_LIST_PENDING);

export {
  getOrderByIdSuccess,
  getOrderByIdFailed,
  getOrderByIdPending,
  getOrderListSuccess,
  getOrderListFailed,
  getOrderListPending,
};
