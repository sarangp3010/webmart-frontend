import { API } from "../../middleware/middleware";

/**
 * Get Products API call
 * @param modificationrequestsId
 * @returns
 */
const getAllModifyRequests = (
    isAdmin: any
): Promise<any> => {
  return API.get("/modificationRequests", { params: {isAdmin: isAdmin}});
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
const addModificationRequests = (
  data: any
): Promise<any> => {
    console.log("Add request API call", data);
  return API.post("/modificationRequests", data);
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
const updateModificaitonRequest = (
  status: any,
  modificationRequestsId: string
): Promise<any> => {
  console.log(status, modificationRequestsId, "---inside service");
  return API.put("/modificationRequests/" + modificationRequestsId, {status})
};

// /**
//  * Delete product API call
//  * @param producId
//  * @returns
//  */
// const deleteCart = (cartId: string): Promise<any> => {
//   // console.log("---cartID", cartId, "---in service");
//   return API.delete("/cart/" + cartId);
// };

// /**
//  * Get product by id API call
//  * @param producId
//  * @returns
//  */
// const getCartById = (cartId: string): Promise<any> => {
//   return API.get("/cart/" + cartId);
// };

export { getAllModifyRequests, addModificationRequests, updateModificaitonRequest };
