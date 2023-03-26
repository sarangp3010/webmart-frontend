import { API } from "../../middleware/middleware";

const getBrand = (name: string | undefined | null): Promise<any> => {
  return API.get("/brands/", {
    params: { name: name || undefined },
  });
};

const addBrand = (data: any): Promise<any> => {
  return API.post("/brands/", data);
};

export { getBrand, addBrand };
