import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

export default async function AuthLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ authType: "login" | "register" }>;
}) {
  const { authType } = await params;
  const isLogin = authType === "login";

  return (
    <div className="flex h-[100vh] min-h-screen bg-slate-50">
      {/* Left Side - Illustration */}
      <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-green-500 to-green-600 p-12 lg:flex">
        <div className="max-w-md">
          <Image
            priority
            src={assets.auth_ilustration}
            alt="Auth Illustration"
            width={500}
            height={500}
            className="object-contain"
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className="mt-8 text-2xl font-bold text-white">
            {isLogin ? "Welcome Back!" : "Join Us Today"}
          </h2>
          <p className="mt-2 text-green-100">
            {isLogin
              ? "Sign in to manage your products and inventory"
              : "Create an account to get started"}
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">
          <div className="mb-8 flex justify-center">
            <Link href="/">
              <Image
                priority
                src={assets.logo}
                alt="NextCart Logo"
                width={120}
                height={40}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>

          {children}

          <div className="mt-6 text-center text-sm text-slate-500">
            {isLogin ? (
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/register"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Sign up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
