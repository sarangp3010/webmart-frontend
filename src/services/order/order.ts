import { API } from "../../middleware/middleware";

const createProduct = (
  data: any
): Promise<any> => {
  return API.post("/order/", data);
};

export { createProduct };
