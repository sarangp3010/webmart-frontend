import { action } from "typesafe-actions";
import { TBrandPayload } from "./brand.types";
import TBrandActionTypeEnum from "./brand.enum";

const getBrandSuccess = (payload: TBrandPayload[]) =>
  action(TBrandActionTypeEnum.GET_BRAND_SUCCESS, payload);

const getBrandFailed = () => action(TBrandActionTypeEnum.GET_BRAND_FAILED);

const getBrandPending = () => action(TBrandActionTypeEnum.GET_BRAND_PENDING);


const addBrandSuccess = (payload: TBrandPayload[]) =>
  action(TBrandActionTypeEnum.ADD_BRAND_SUCCESS, payload);

const addBrandFailed = () => action(TBrandActionTypeEnum.ADD_BRAND_FAILED);

const addBrandPending = () => action(TBrandActionTypeEnum.ADD_BRAND_PENDING);

export { getBrandSuccess, getBrandFailed, getBrandPending, addBrandFailed, addBrandSuccess, addBrandPending };
