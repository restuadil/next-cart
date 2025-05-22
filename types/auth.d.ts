import { AuthValidation } from "@/utils/validation/auth.validation";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { z } from "zod";

export interface ISessionExtended extends Session {
  accessToken?: string;
}
declare module "next-auth" {
  interface Session {
    user?: {
      accessToken: string;
      email: string;
      fullName: string;
      role: string;
      username: string;
      _id: string;
    };
    accessToken?: string;
  }
}
export interface IUserExtended extends User {
  accessToken?: string;
  role?: string;
}

export interface IJWTExtended extends JWT {
  user?: IUserExtended;
}
export interface ILogin {
  identifier: string;
  password: string;
}

export type IRegister = z.infer<typeof AuthValidation.REGISTER>;

export interface IActivation {
  code: string;
}
