import axios from "axios";
import { env } from "./env";
import { auth } from "@/auth";
import { getSession } from "next-auth/react";
import { ISessionExtended } from "@/types/auth";

const isServer = typeof window === "undefined";

const instance = axios.create({
  baseURL: env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60 * 1000,
});

if (isServer) {
  instance.interceptors.request.use(async (config) => {
    const session = await auth();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  });
} else {
  instance.interceptors.request.use(
    async (config) => {
      const session: ISessionExtended | null = await getSession();
      if (session && session.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
}

export default instance;
