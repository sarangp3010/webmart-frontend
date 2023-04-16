import { ActionType } from "typesafe-actions";
import * as actions from "./user.action";

type TUserActionType = ActionType<typeof actions>;

type TUserState = {
  loading: boolean;
  usersList: { count: number; users: any };
};

export { TUserActionType, TUserState };
