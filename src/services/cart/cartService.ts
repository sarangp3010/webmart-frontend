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
  quantity: any,
  cartId: string
): Promise<any> => {
  console.log(quantity, "---inside service");
  return API.put("/cart/" + cartId, quantity)
};

/**
 * Delete product API call
 * @param producId
 * @returns
 */
const deleteCart = (cartId: string): Promise<any> => {
  // console.log("---cartID", cartId, "---in service");
  return API.delete("/cart/" + cartId);
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
