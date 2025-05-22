import type { NextAuthConfig } from "next-auth";
import { env } from "./config/env";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 },
  secret: env.AUTH_SECRET,
} as NextAuthConfig;
