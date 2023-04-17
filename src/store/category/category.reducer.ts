import { cloneDeep } from "lodash";
import { TCategoryState, TCateoryActionTypes } from "./category.types";
import TCategotyActionTypeEnum from "./ctaegory.enum";

const initialState: TCategoryState = {
  loading: false,
  categories: { count: 0, categories: [] },
  category: null,
};

const categoryReducer = (
  state = initialState,
  action: TCateoryActionTypes
): TCategoryState => {
  switch (action.type) {
    case TCategotyActionTypeEnum.GET_CATEGORY_PENDING:
      return {
        ...state,
        loading: true,
        categories: { count: 0, categories: [] },
      };

    case TCategotyActionTypeEnum.GET_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
      };

    case TCategotyActionTypeEnum.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case TCategotyActionTypeEnum.GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    case TCategotyActionTypeEnum.GET_CATEGORY_BY_ID_FAILED:
      return {
        ...state,
        category: null,
        loading: false,
      };

    case TCategotyActionTypeEnum.GET_CATEGORY_BY_ID_PENDING:
      return {
        ...state,
        category: null,
        loading: true,
      };

    case TCategotyActionTypeEnum.ADD_CATEGORYS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case TCategotyActionTypeEnum.ADD_CATEGORYS_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action?.payload?.category,
      };

    case TCategotyActionTypeEnum.ADD_CATEGORYS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case TCategotyActionTypeEnum.UPDATE_CATEGORYS_PENDING:
      return {
        ...state,
        loading: false,
      };

    case TCategotyActionTypeEnum.UPDATE_CATEGORYS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case TCategotyActionTypeEnum.UPDATE_CATEGORYS_SUCCESS:
      let updateCategory = cloneDeep(state.category);

      if (state?.category && updateCategory) {
        updateCategory = Object.assign({}, updateCategory, {
          ...action.payload,
        });
      }
      return {
        ...state,
        loading: false,
        category: updateCategory,
      };

    case TCategotyActionTypeEnum.DELETE_CATEGORYS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case TCategotyActionTypeEnum.DELETE_CATEGORYS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case TCategotyActionTypeEnum.DELETE_CATEGORYS_SUCCESS:
      const categories = state?.categories?.categories || [];
      const updatedCategories = categories.filter(
        (prod: any) => prod.id !== action?.payload?.categoryId
      );
      return {
        ...state,
        loading: false,
        categories: {
          count: state?.categories?.count - 1,
          categories: updatedCategories,
        },
      };
    default:
      return state;
  }
};

export default categoryReducer;
