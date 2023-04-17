import ReportsActionTypeEnum from "./reports.enum";

const INITIAL_STATE: any = {
  loading: false,
  customerData: { customers: [], count: 0 },
  orderData: { ordersReports: [], count: 0 },
  productData: { productReports: [], count: 0 },
};

const reportsReducer = (
  state = INITIAL_STATE,
  action: any
): any => {
  switch (action.type) {
    case ReportsActionTypeEnum.REPORTS_LOADING:
      return { ...state, loading: true };

    case ReportsActionTypeEnum.REPORTS_LOADED:
      return { ...state, loading: false };

    case ReportsActionTypeEnum.GET_CUSTOMER_REPORTS:
      console.log('====================================');
      console.log("action?.payload", action?.payload);
      console.log('====================================');
      return {
        ...state,
        loading: false,
        customerData: action?.payload,
      };

    case ReportsActionTypeEnum.GET_ORDERS_REPORTS:
      return {
        ...state,
        loading: false,
        orderData: action?.payload,
      };

    case ReportsActionTypeEnum.GET_PRODUCTS_REPORTS:
      return {
        ...state,
        loading: false,
        productData: action?.payload,
      };
    default:
      return state;
  }
};

export default reportsReducer;
