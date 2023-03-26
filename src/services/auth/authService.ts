import { API } from "../../middleware/middleware";
import {
  TLoginPayloadData,
  TSignupPayloadData,
  TForgotPasswordPayloadData,
  TResetForgotPasswordPayloadData,
  TChangePasswordPayloadData,
} from "../../store/auth/auth.types";

/**
 * login api call
 * @param values
 * @returns
 */
export const authLogin = (values: TLoginPayloadData): Promise<any> => {
  return API.post("/auth/signin", { ...values });
};

/**
 * login api call
 * @param values
 * @returns
 */
export const authSignup = (values: TSignupPayloadData): Promise<any> => {
  return API.post("/auth/signup", { ...values });
};

/**
 *forgot password api call
 * @param values
 * @returns
 */
export const authForgotPassword = (
  values: TForgotPasswordPayloadData
): Promise<any> => {
  return API.post("/users/forget-password", values);
};

export const authResetForgotPassword = (
  values: TResetForgotPasswordPayloadData
): Promise<any> => {
  return API.post("/users/update-password", values);
};

/**
 * change password api call
 * @param values
 * @returns
 */
export const authChangePassword = (
  values: TChangePasswordPayloadData
): Promise<any> => {
  return API.patch("/users/change-password", values);
};

/**
 * email verification api call
 * @param token
 * @returns
 */
export const authEmailVerification = (token: string | null): Promise<any> => {
  return API.post("/users/verify-email", { token: token });
};

export const becomeSeller = (
  values: TForgotPasswordPayloadData
): Promise<any> => {
  return API.post("/users/become-seller", values);
};
