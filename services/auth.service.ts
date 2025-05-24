import instance from "@/config/instance";
import { ILogin, IRegister } from "@/types/auth";
import { IWebResponse } from "@/types/web";
import { AxiosError } from "axios";
import { AuthError } from "next-auth";

export const Register = async (payload: IRegister) => {
  try {
    const { data } = await instance.post<IWebResponse<null>>(
      "/auth/register",
      payload
    );
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      return error.message;
    }
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};
export const Login = (payload: ILogin) => {
  try {
    const response = instance.post("/auth/login", payload);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};
export const getProfile = (token: string) =>
  instance.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
