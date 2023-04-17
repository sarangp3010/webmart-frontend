import { API } from "../../middleware/middleware";

const getProducts = (
  search?: string,
  categoryId?: number | string,
  categoryIds?: string[],
): Promise<any> => {
  return API.get("/products", {
    params: {
      search: search || undefined,
      categoryId: categoryId && (categoryId === "All" ? undefined : Number(categoryId)),
      categoryIds: categoryIds,
    },
  });
};

const addProducts = (
  data: any
): Promise<any> => {
  return API.post("/products", data);
};

const updateProduct = (
  data: any,
  productId: string
): Promise<any> => {
  return API.put("/products/" + productId, data)
};

const deleteProduct = (producId: string): Promise<any> => {
  return API.delete("/products/" + producId);
};

const getProductById = (producId: string): Promise<any> => {
  return API.get("/products/" + producId);
};

export { getProducts, addProducts, updateProduct, deleteProduct, getProductById };
