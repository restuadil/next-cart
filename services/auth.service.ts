import instance from "@/config/instance";
import { ILogin, IRegister } from "@/types/auth";

export const Register = async (payload: IRegister) => {
  try {
    const response = await instance.post("/auth/register", payload);
    return response.data;
  } catch (error: unknown) {
    console.log(error);
  }
};
export const Login = (payload: ILogin) => instance.post("/auth/login", payload);
export const getProfile = (token: string) =>
  instance.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
