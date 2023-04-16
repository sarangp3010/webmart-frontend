import { action } from "typesafe-actions";

import ReportsActionTypeEnum from "./reports.enum";

const reportsLoadingAction = () =>
  action(ReportsActionTypeEnum.REPORTS_LOADING);

const reportsLoadedAction = () => action(ReportsActionTypeEnum.REPORTS_LOADED);

const getCustomerReportsAction = (payload: {
  customers: any;
  count: number;
}) => action(ReportsActionTypeEnum.GET_CUSTOMER_REPORTS, payload)

const getOrderReportsAction = (payload: {
  ordersReports: any;
  count: number;
}) => action(ReportsActionTypeEnum.GET_ORDERS_REPORTS, payload);

const getProductsReportsAction = (payload: {
  productReports: any;
  count: number;
}) => action(ReportsActionTypeEnum.GET_PRODUCTS_REPORTS, payload);

export {
  reportsLoadingAction,
  reportsLoadedAction,
  getCustomerReportsAction,
  getOrderReportsAction,
  getProductsReportsAction,
};
