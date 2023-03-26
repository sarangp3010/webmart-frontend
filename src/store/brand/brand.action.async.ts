import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  getBrandFailed,
  getBrandPending,
  getBrandSuccess,
  addBrandFailed,
  addBrandPending,
  addBrandSuccess,
} from "./brand.action";
import * as requestFromServer from "../../services/brand/brand";
import { errorToast, successToast } from "../../components/toast/toast";

export const getBrandActionThunk = (name?: string): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getBrandPending());
    requestFromServer
      .getBrand(name)
      .then((res) => {
        dispatch(getBrandSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getBrandFailed());
        errorToast("Something went wrong");
      });
  };
};

export const addBrandActionThunk = (data: any): any => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(addBrandPending());
    return requestFromServer
      .addBrand(data)
      .then((res) => {
        successToast("Brand Successfully Added");
        dispatch(addBrandSuccess(res.data));
        requestFromServer
          .getBrand(null)
          .then((res) => {
            dispatch(getBrandSuccess(res.data));
          })
          .catch((err) => {
            dispatch(getBrandFailed());
            errorToast("Something went wrong");
          });
      })
      .catch((err) => {
        errorToast("Something went wrong.");
        dispatch(addBrandFailed());
      });
  };
};
