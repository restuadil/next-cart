import instance from "@/config/instance";
import { IWebResponse } from "@/types/web";
import { IProduct } from "@/types/product";
import { AxiosError } from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await instance.get<IWebResponse<IProduct[]>>("/products");
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};
