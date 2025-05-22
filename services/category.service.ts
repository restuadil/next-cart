import instance from "@/config/instance";
import { ICategory } from "@/types/category";
import { IWebResponse } from "@/types/web";

export const getAllCategories = async () => {
  const response = await instance.get<IWebResponse<ICategory[]>>("/categories");
  return response.data;
};
