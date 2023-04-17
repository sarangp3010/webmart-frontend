import { API } from "../../middleware/middleware";

const getCategory = (type: string | undefined | null): Promise<any> => {
  return API.get("/categories/", {
    params: { type: type || undefined },
  });
};

const addCategory = (
  data: any
): Promise<any> => {
  return API.post("/categories", data);
};

const updateCategory = (
  data: any,
  categoryId: string
): Promise<any> => {
  return API.put("/categories/" + categoryId, data)
};

const deleteCategory = (categoryId: string): Promise<any> => {
  return API.delete("/categories/" + categoryId);
};

const getCategoryById = (categoryId: string): Promise<any> => {
  return API.get("/categories/" + categoryId);
};

export { getCategory, deleteCategory, getCategoryById, addCategory, updateCategory };
