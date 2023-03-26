import { API } from "../../middleware/middleware";

/**
 * Add delivery info API call
 * @param name
 * @param email
 * @param houseNumber
 * @param county
 * @param city
 * @param country
 * @param addressType
 * @returns
 */
const addAddress = (data: any): Promise<any> => {
  return API.post("/orderAddress", data.params);
};

const addCard = (data: any): Promise<any> => {
    return API.post("/userCards", data.body);
  };


export { addAddress, addCard };
