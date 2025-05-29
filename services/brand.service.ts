import instance from "@/config/instance";
import { IBrand } from "@/types/brand";
import { IWebResponse } from "@/types/web";
import { AxiosError } from "axios";

export const getAllBrands = async () => {
  try {
    const { data } = await instance.get<IWebResponse<IBrand[]>>("/brands");
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};
