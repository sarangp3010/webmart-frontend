import { TBrandState, TBrandActionTypes } from "./brand.types";
import TBrandActionTypeEnum from "./brand.enum";

const initialState: TBrandState= {
  loading: false,
  brands: { count: 0, brands: [] },
  brand: null,
};

const categoryReducer = (
  state = initialState,
  action: TBrandActionTypes
): TBrandState => {
  switch (action.type) {
    case TBrandActionTypeEnum.GET_BRAND_PENDING:
      return {
        ...state,
        loading: true,
        brands: { count: 0, brands: [] },
      };
    case TBrandActionTypeEnum.GET_BRAND_FAILED:
      return {
        ...state,
        loading: false,
      };
    case TBrandActionTypeEnum.GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: action.payload,
      };

      case TBrandActionTypeEnum.ADD_BRAND_PENDING:
        return {
          ...state,
          loading: true,
        };
  
      case TBrandActionTypeEnum.ADD_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          brand: action?.payload
        };
  
      case TBrandActionTypeEnum.ADD_BRAND_FAILED:
        return {
          ...state,
          loading: false,
        };

    default:
      return state;
  }
};

export default categoryReducer;
