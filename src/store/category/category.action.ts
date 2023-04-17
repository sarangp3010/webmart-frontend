import { action } from "typesafe-actions";
import { TCategoryPayload } from "./category.types";
import TCategotyActionTypeEnum from "./ctaegory.enum";

const getCategorySuccess = (payload: TCategoryPayload[]) =>
  action(TCategotyActionTypeEnum.GET_CATEGORY_SUCCESS, payload);

const getCategoryFailed = () =>
  action(TCategotyActionTypeEnum.GET_CATEGORY_FAILED);

const getCategoryPending = () =>
  action(TCategotyActionTypeEnum.GET_CATEGORY_PENDING);

const getCategoryByIdSuccess = (payload: TCategoryPayload) =>
  action(TCategotyActionTypeEnum.GET_CATEGORY_BY_ID_SUCCESS, payload);

const getCategoryByIdFailed = () =>
  action(TCategotyActionTypeEnum?.GET_CATEGORY_BY_ID_FAILED);

const getCategoryByIdPending = () =>
  action(TCategotyActionTypeEnum?.GET_CATEGORY_BY_ID_PENDING);

const addCategorysSuccess = (payload: { category: TCategoryPayload }) =>
  action(TCategotyActionTypeEnum.ADD_CATEGORYS_SUCCESS, payload);

const addCategorysPending = () =>
  action(TCategotyActionTypeEnum.ADD_CATEGORYS_PENDING);

const addCategorysFailed = () =>
  action(TCategotyActionTypeEnum.ADD_CATEGORYS_FAILED);

const updateCategorySuccess = (payload: Record<string, any>) =>
  action(TCategotyActionTypeEnum.UPDATE_CATEGORYS_SUCCESS, payload);

const updateCategoryPending = () =>
  action(TCategotyActionTypeEnum.UPDATE_CATEGORYS_PENDING);

const updateCategoryFailed = () =>
  action(TCategotyActionTypeEnum.UPDATE_CATEGORYS_FAILED);

const deleteCategorySuccess = (payload: { categoryId: string }) =>
  action(TCategotyActionTypeEnum.DELETE_CATEGORYS_SUCCESS, payload);

const deleteCategoryFailed = () =>
  action(TCategotyActionTypeEnum.DELETE_CATEGORYS_FAILED);

const deleteCategoryPending = () =>
  action(TCategotyActionTypeEnum.DELETE_CATEGORYS_PENDING);

export {
  getCategorySuccess,
  getCategoryFailed,
  getCategoryPending,
  getCategoryByIdSuccess,
  getCategoryByIdFailed,
  getCategoryByIdPending,
  addCategorysFailed,
  addCategorysPending,
  addCategorysSuccess,
  updateCategoryFailed,
  updateCategoryPending,
  updateCategorySuccess,
  deleteCategoryFailed,
  deleteCategoryPending,
  deleteCategorySuccess,
};
