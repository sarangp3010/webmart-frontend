import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  addProductsFailed,
  addProductsPending,
  addProductsSuccess,
  deleteProductFailed,
  deleteProductPending,
  deleteProductSuccess,
  getProductByIdFailed,
  getProductByIdPending,
  getProductByIdSuccess,
  getProductsFailed,
  getProductsPending,
  getProductsSuccess,
  updateProductFailed,
  updateProductPending,
  updateProductSuccess,
} from "./products.action";
import * as requestFromServer from "../../services/products/productsService";
import { errorToast, successToast } from "../../components/toast/toast";

/**
 * Get products action thunk
 * @param search
 * @param categoryId
 * @param orderType
 * @returns
 */
export const getProductsActionThunk = (
  search?: string,
  categoryId?: string,
  categoryIds?: string[],
  orderType?: number
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getProductsPending());
    requestFromServer
      .getProducts(search, categoryId, categoryIds, orderType)
      .then((res) => {
        dispatch(getProductsSuccess(res?.data));
      })
      .catch((err) => {
        errorToast(err?.response?.data?.message || "Something went wrong");
        dispatch(getProductsFailed());
      });
  };
};

/**
 * Get product by id action thunk
 * @param productId
 * @returns
 */

export const getProductByIdActionThunk = (
  productId: string,
  redirect?: Function,
  successRedirect?: Function
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getProductByIdPending());
    requestFromServer
      .getProductById(productId)
      .then((res) => {
        dispatch(getProductByIdSuccess(res.data));
        successRedirect && successRedirect();
      })
      .catch((err) => {
        dispatch(getProductByIdFailed());
        // errorToast(err?.response?.data?.message || "Something went wrong");
        redirect && redirect();
      });
  };
};

/**
 * Add products action thunk
 * @param name
 * @param orderType
 * @param status
 * @param logo
 * @param details
 * @returns
 */
export const addProductsActionThunk = (
  data: any,
  updateTab?: Function
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(addProductsPending());
    requestFromServer
      .addProducts(data)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(addProductsSuccess({ product: res?.data }));
          successToast("Product added successfully");
          updateTab && updateTab();
        }
      })
      .catch((err) => {
        dispatch(addProductsFailed());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

export const updateProductActionThunk = (
  data: Record<string, any>,
  productId?: string,
  updateTab?: Function
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(updateProductPending());
    requestFromServer
      .updateProduct({ ...data }, productId || "")
      .then((res) => {
        dispatch(updateProductSuccess(data));
        updateTab && updateTab();
      })
      .catch((err) => {
        dispatch(updateProductFailed());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

/**
 * Delete product action thunk
 * @param productId
 * @param orderType
 * @returns
 */
export const deleteProductActionThunk = (
  productId: string,
  orderType: number
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(deleteProductPending());
    requestFromServer
      .deleteProduct(productId)
      .then((res) => {
        if (res?.status === 201 || res?.status === 204) {
          successToast("Product deleted successfully");
          dispatch(deleteProductSuccess({ productId, orderType }));
        } else {
          errorToast("Something went wrong");
          dispatch(deleteProductFailed());
        }
      })
      .catch((err) => {
        errorToast(err?.response?.data?.message || "Something went wrong");
        dispatch(deleteProductSuccess({ productId, orderType }));
      });
  };
};