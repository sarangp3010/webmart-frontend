import { ActionType } from "typesafe-actions";

import * as actions from "./reports.action";

type TReportsActionType = ActionType<typeof actions>;

type TReportsState = {
  loading: boolean;
  customerData: { customers: any; count: number };
  orderData: { ordersReports: any; count: number };
  productData: { productReports: any; count: number };
};

export { TReportsActionType, TReportsState };
