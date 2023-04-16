import { ActionType } from "typesafe-actions";

import * as actions from "./timeSlot.action";

type TOrderActionType = ActionType<typeof actions>;

type TOrderState = {
  loading: boolean;
  orders: { count: number; orders: any };
  order?: any;
};

type TGetOrderListPayload = any;

type TGetOrderByIdPayload = any;

export {
  TOrderActionType,
  TGetOrderListPayload,
  TGetOrderByIdPayload,
  TOrderState,
};
