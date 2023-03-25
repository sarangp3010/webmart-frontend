import { API } from "../../middleware/middleware";

/**
 * Get Products API call
 * @param cartsId
 * @returns
 */
const getCarts = (
): Promise<any> => {
  return API.get("/cart");
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
const addCarts = (
  data: any
): Promise<any> => {
  return API.post("/cart", data);
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
const updateCart = (
  data: any,
  productId: string
): Promise<any> => {
  return API.put("/cart/" + productId, data)
};

/**
 * Delete product API call
 * @param producId
 * @returns
 */
const deleteCart = (producId: string): Promise<any> => {
  return API.delete("/cart/" + producId);
};

/**
 * Get product by id API call
 * @param producId
 * @returns
 */
const getCartById = (cartId: string): Promise<any> => {
  return API.get("/cart/" + cartId);
};

export { getCarts, addCarts, updateCart, deleteCart, getCartById };
