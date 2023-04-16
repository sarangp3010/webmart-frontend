import { API } from "../../middleware/middleware";

export const getCustomerReportsAPI = (
  search: string | null,
  page: number | null,
  perPage: number | null
): Promise<any> => {
  return API.get("/reports/customers", {
    params: {
      search: search || undefined,
      page: page || undefined,
      perPage: perPage || undefined,
    },
  });
};

export const getOrderReportsAPI = (
  search: string | null,
  startDate: Date | string | null,
  endDate: Date | string | null,
  page: number | null,
  perPage: number | null
): Promise<any> => {
  return API.get("/reports/orders", {
    params: {
      search: search || undefined,
      startDate: startDate || undefined,
      endDate: endDate || undefined,
      page: page || undefined,
      perPage: perPage || undefined,
    },
  });
};

export const getProductReportsAPI = (
  search: string | null,
  page: number | null,
  perPage: number | null
): Promise<any> => {
  return API.get("reports/product", {
    params: {
      search: search || undefined,
      page: page || undefined,
      perPage: perPage || undefined,
    },
  });
};
