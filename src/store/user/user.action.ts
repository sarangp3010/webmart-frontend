import { action } from "typesafe-actions";
import UserActionTypeEnum from "./user.enum";

const getUsersSuccess = (payload: { count: number; users: any }) =>
  action(UserActionTypeEnum.GET_USER_SUCCESS, payload);

const getUsersFailed = () => action(UserActionTypeEnum.GET_USER_FAILED);

const getUsersPending = () => action(UserActionTypeEnum.GET_USER_PENDING);

const deleteUserSuccess = (payload: { userId: string }) =>
  action(UserActionTypeEnum.DELETE_USER_SUCCESS, payload);

const deleteUserFailed = () => action(UserActionTypeEnum.DELETE_USER_FAILED);

const deleteUserPending = () => action(UserActionTypeEnum.DELETE_USER_PENDING);

export {
  getUsersSuccess,
  getUsersFailed,
  getUsersPending,
  deleteUserFailed,
  deleteUserPending,
  deleteUserSuccess,
};
