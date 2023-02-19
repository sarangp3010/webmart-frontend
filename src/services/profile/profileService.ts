import { API } from "../../middleware/middleware";

/**
 * get profile api call
 * @returns
 */
export const getProfileDataAPI = (): Promise<any> => {
  return API.get("/users/profile/me");
};
