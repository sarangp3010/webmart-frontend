import { API } from "../../middleware/middleware";

const createProduct = (
  data: any
): Promise<any> => {
  return API.post("/order/", data);
};


const getAllOrder = (
  data: any
): Promise<any> => {
  return API.get("/orders/",
  {
    params: { search: data?.search }
  });
};

const getOrderById = (
  orderId: string
): Promise<any> => {
  return API.get(`/order/${orderId}`);
};

export { createProduct, getAllOrder, getOrderById };
