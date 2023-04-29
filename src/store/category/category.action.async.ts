import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  getCategoryFailed,
  getCategoryPending,
  getCategorySuccess,
  deleteCategoryPending,
  deleteCategoryFailed,
  deleteCategorySuccess,
  updateCategoryFailed,
  updateCategoryPending,
  updateCategorySuccess,
  addCategorysFailed,
  addCategorysPending,
  addCategorysSuccess,
  getCategoryByIdFailed,
  getCategoryByIdPending,
  getCategoryByIdSuccess,
} from "./category.action";
import * as requestFromServer from "../../services/category/categoryService";
import { errorToast, successToast } from "../../components/toast/toast";

export const getCategoryActionThunk = (orderType?: string): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getCategoryPending());
    requestFromServer
      .getCategory(orderType || "")
      .then((res) => {
        dispatch(getCategorySuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCategoryFailed());
        errorToast("Something went wrong");
      });
  };
};

export const addCategoryActionThunk = (data: any): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(addCategorysPending());
    requestFromServer
      .addCategory(data)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(addCategorysSuccess({ category: res?.data }));
        }
      })
      .catch((err) => {
        dispatch(addCategorysFailed());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

export const getCategoryByIdActionThunk = (categoryId: string): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getCategoryByIdPending());
    requestFromServer
      .getCategoryById(categoryId)
      .then((res) => {
        dispatch(getCategoryByIdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCategoryByIdFailed());
      });
  };
};
export const updateCategoryActionThunk = (
  data: Record<string, any>,
  categoryId?: string
): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(updateCategoryPending());
    requestFromServer
      .updateCategory({ ...data }, categoryId || "")
      .then((res) => {
        dispatch(updateCategorySuccess(data));
        successToast("Category Updated Successfully");
      })
      .catch((err) => {
        dispatch(updateCategoryFailed());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

export const deleteCategoryActionThunk = (categoryId: string): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(deleteCategoryPending());
    requestFromServer
      .deleteCategory(categoryId)
      .then((res) => {
        if (res?.status === 201 || res?.status === 204) {
          successToast("Category deleted successfully");
          dispatch(deleteCategorySuccess({ categoryId }));
        } else {
          errorToast("Something went wrong");
          dispatch(deleteCategoryFailed());
        }
      })
      .catch((err) => {
        errorToast(err?.response?.data?.message || "Something went wrong");
        dispatch(deleteCategoryFailed());
      });
  };
};