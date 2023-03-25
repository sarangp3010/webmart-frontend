import { API } from "../../middleware/middleware";

const getCategory = (type: string | undefined | null): Promise<any> => {
  return API.get("/categories/", {
    params: { type: type || undefined },
  });
};

export { getCategory };
