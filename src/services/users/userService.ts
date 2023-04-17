import { API } from "../../middleware/middleware";

export const getUser = (
  userType: string,
  search: any
): Promise<any> => {
  return API.get("/users/all", {
    params: { userType: userType || undefined, search: search || undefined },
  });
};

export const deleteUser = (userId: string): Promise<any> => {
  return API.delete("/users/" + userId);
};
