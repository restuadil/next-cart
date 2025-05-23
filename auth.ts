import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { getProfile } from "./services/auth.service";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const { accessToken } = credentials as {
            accessToken: string;
            refreshToken: string;
          };

          const response = await getProfile(accessToken);
          const user = response.data;

          if (!user) {
            return null;
          }

          return {
            ...user,
            accessToken,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
});
