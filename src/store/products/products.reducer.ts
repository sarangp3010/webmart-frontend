import { cloneDeep } from 'lodash';
import ProductsActionTypeEnum from "./products.enum";
import { TProductsState, TProductsActionType } from "./products.types";

const initialState: TProductsState = {
  loading: false,
  products: {
    count: 0,
    products: null,
  },
  singleProductData: null,
};

const productsReducer = (
  state = initialState,
  action: TProductsActionType
): TProductsState => {
  switch (action.type) {
    case ProductsActionTypeEnum.GET_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case ProductsActionTypeEnum.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: {
          ...action?.payload,
        },
      };

    case ProductsActionTypeEnum.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case ProductsActionTypeEnum.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        singleProductData: action.payload,
        loading: false,
      };

    case ProductsActionTypeEnum.GET_PRODUCT_BY_ID_FAILED:
      return {
        ...state,
        singleProductData: null,
        loading: false,
      };

    case ProductsActionTypeEnum.GET_PRODUCT_BY_ID_PENDING:
      return {
        ...state,
        singleProductData: null,
        loading: true,
      };

    case ProductsActionTypeEnum.ADD_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case ProductsActionTypeEnum.ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        singleProductData: action?.payload?.product
      };

    case ProductsActionTypeEnum.ADD_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case ProductsActionTypeEnum.UPDATE_PRODUCTS_PENDING:
      return {
        ...state,
        loading: false,
      };

    case ProductsActionTypeEnum.UPDATE_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case ProductsActionTypeEnum.UPDATE_PRODUCTS_SUCCESS:
      let updateProduct = cloneDeep(state.singleProductData);

      if (state?.singleProductData && updateProduct) {
        updateProduct = Object.assign({}, updateProduct, { ...action.payload })
      }
      updateProduct &&
        state.singleProductData &&
        (updateProduct.completedStep =
          state?.singleProductData?.completedStep === 1
            ? 3
            : state?.singleProductData?.completedStep + 1);
      return {
        ...state,
        loading: false,
        singleProductData: updateProduct
      };

    case ProductsActionTypeEnum.DELETE_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case ProductsActionTypeEnum.DELETE_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case ProductsActionTypeEnum.DELETE_PRODUCTS_SUCCESS:
      const products = state?.products?.products || [];
      const updatedProducts = products.filter((prod: any) => prod.id !== action?.payload?.productId);
      return {
        ...state,
        loading: false,
        products: {
          count: state?.products?.count - 1,
          products: updatedProducts
        }
      };
      
    default:
      return state;
  }
};

export default productsReducer;
