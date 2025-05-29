import instance from "@/config/instance";
import { ICategory, ICategoryRequest } from "@/types/category";
import { IWebResponse } from "@/types/web";
import { AxiosError } from "axios";

export const getAllCategories = async () => {
  try {
    const { data } =
      await instance.get<IWebResponse<ICategory[]>>("/categories");
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};
export const getCategoryById = async (id: string) => {
  try {
    const { data } = await instance.get<IWebResponse<ICategory>>(
      `/category/${id}`
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};
export const addCategory = async (category: ICategoryRequest) => {
  try {
    const { data } = await instance.post<IWebResponse<ICategory>>(
      "/category",
      category
    );
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const { data } = await instance.delete<IWebResponse<ICategory>>(
      `/category/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};

export const editCategory = async (id: string, category: ICategoryRequest) => {
  try {
    const { data } = await instance.put<IWebResponse<ICategory>>(
      `/category/${id}`,
      category
    );
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};
