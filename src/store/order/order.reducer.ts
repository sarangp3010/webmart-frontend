import OrderActionTypeEnum from "./order.enum";

const INITIAL_STATE: any = {
  loading: false,
  orders: { count: 0, orders: [] },
  order: null,
};

const profileReducer = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case OrderActionTypeEnum.GET_ORDER_BYID_PENDING:
      return { ...state, loading: true, order: null };

    case OrderActionTypeEnum.GET_ORDER_BYID_FAILED:
      return { ...state, loading: false };

    case OrderActionTypeEnum.GET_ORDER_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };

    case OrderActionTypeEnum.GET_ORDER_LIST_PENDING:
      return { ...state, loading: true, orders: { count: 0, orders: [] } };

    case OrderActionTypeEnum.GET_ORDER_LIST_FAILED:
      return { ...state, loading: false };

    case OrderActionTypeEnum.GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
