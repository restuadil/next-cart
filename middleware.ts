import { auth } from "@/auth";
import { NextResponse } from "next/server";

// TODO need to handle jwt expired
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAdmin = req.auth?.user?.role === "admin";
  const isAuthRoute = req.nextUrl.pathname.startsWith("/auth");
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (!isLoggedIn && isAdminRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  if (isLoggedIn && !isAdmin && isAdminRoute) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
