import { API } from "../../middleware/middleware";

export const getCustomerReportsAPI = (search: string | null): Promise<any> => {
  return API.get("/reports/customers", {
    params: {
      search: search || undefined ,
    },
  });
};

export const getOrderReportsAPI = (search: string | null): Promise<any> => {
  return API.get("/reports/orders", {
    params: {
      search,
    },
  });
};

export const getProductReportsAPI = (search: string | null): Promise<any> => {
  return API.get("reports/product", {
    params: {
      search,
    },
  });
};
