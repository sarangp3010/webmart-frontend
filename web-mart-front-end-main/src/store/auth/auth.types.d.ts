import { ActionType } from "typesafe-actions";
import * as actions from "./auth.action";

type TAuthState = {
  loading: boolean;
  token: string | null;
  refreshToken: string | null;
};

type TAuthPayload = {
  token: string | null;
  refreshToken: string | null;
};

type TLoginPayloadData = {
  email: string;
  password: string;
};

type TSignupPayloadData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: string[] | null;
};

type TForgotPasswordPayloadData = {
  email: string;
};

type TResetForgotPasswordPayloadData = {
  token: string | null;
  newPassword: string;
  userType: string[];
};

type TChangePasswordPayloadData = {
  oldPassword: string;
  newPassword: string;
};

type TAuthActionType = ActionType<typeof actions>;

export {
  TAuthActionType,
  TAuthState,
  TAuthPayload,
  TLoginPayloadData,
  TSignupPayloadData,
  TForgotPasswordPayloadData,
  TResetForgotPasswordPayloadData,
  TChangePasswordPayloadData,
};
