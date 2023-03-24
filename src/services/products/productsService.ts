import { API } from "../../middleware/middleware";

/**
 * Get Products API call
 * @param search
 * @param categoryId
 * @param orderType
 * @returns
 */
const getProducts = (
  search?: string,
  categoryId?: number | string,
  categoryIds?: string[],
  orderType?: number
): Promise<any> => {
  return API.get("/products", {
    params: {
      search: search || undefined,
      categoryId: categoryId && (categoryId === "All" ? undefined : Number(categoryId)),
      categoryIds: categoryIds,
      orderType: orderType || undefined,
    },
  });
};

/**
 * Add product API call
 * @param name
 * @param orderType
 * @param status
 * @param logo
 * @param details
 * @returns
 */
const addProducts = (
  data: any
): Promise<any> => {
  return API.post("/products", data);
};

/**
 * Update product API call
 * @param productId
 * @param name
 * @param status
 * @param logo
 * @param details
 * @returns
 */
const updateProduct = (
  data: any,
  productId: string
): Promise<any> => {
  return API.put("/products/" + productId, data)
};

/**
 * Delete product API call
 * @param producId
 * @returns
 */
const deleteProduct = (producId: string): Promise<any> => {
  return API.delete("/products/" + producId);
};

/**
 * Get product by id API call
 * @param producId
 * @returns
 */
const getProductById = (producId: string): Promise<any> => {
  return API.get("/products/" + producId);
};

export { getProducts, addProducts, updateProduct, deleteProduct, getProductById };
