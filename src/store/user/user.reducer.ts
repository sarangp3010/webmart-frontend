import UserActionTypeEnum from "./user.enum";
import { TUserState, TUserActionType } from "./user.types";

const initialState: TUserState = {
  loading: true,
  usersList: { users: [], count: 0 },
};

const userReducer = (
  state = initialState,
  action: TUserActionType
): TUserState => {
  switch (action.type) {
    case UserActionTypeEnum.GET_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypeEnum.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: action.payload,
      };
    case UserActionTypeEnum.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
      };

    case UserActionTypeEnum.DELETE_USER_PENDING:
      return {
        ...state,
        loading: true,
      };

    case UserActionTypeEnum.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
      };

    case UserActionTypeEnum.DELETE_USER_SUCCESS:
      const users = state?.usersList?.users || [];
      const updatedUsers = users.filter(
        (prod: any) => prod.id !== action?.payload?.userId
      );
      return {
        ...state,
        loading: false,
        usersList: {
          count: state?.usersList?.count - 1,
          users: updatedUsers,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
