import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { IJWTExtended, ISessionExtended, IUserExtended } from "@/types/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getProfile, Login } from "./services/auth.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        identifier: { label: "identifier", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Partial<Record<"identifier" | "password", unknown>>
      ): Promise<IUserExtended | null> {
        const identifier =
          typeof credentials?.identifier === "string"
            ? credentials.identifier
            : "";
        const password =
          typeof credentials?.password === "string" ? credentials.password : "";

        if (!identifier || !password) {
          return null;
        }

        const result = await Login({ identifier, password });

        const accessToken = result.data.data;
        const profile = await getProfile(accessToken);
        const user = profile.data.data;

        if (
          accessToken &&
          result.status === 200 &&
          user._id &&
          profile.status === 200
        ) {
          user.accessToken = accessToken;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: ISessionExtended;
      token: IJWTExtended;
    }) {
      session.user = token.user;
      session.accessToken = token.user?.accessToken;

      return session;
    },
  },
});
