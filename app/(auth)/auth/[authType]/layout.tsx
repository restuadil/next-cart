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
    <div className="min-h-screen bg-slate-50 flex h-[100vh]">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-500 to-green-600 items-center justify-center p-12">
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
          <h2 className="text-white text-2xl font-bold mt-8">
            {isLogin ? "Welcome Back!" : "Join Us Today"}
          </h2>
          <p className="text-green-100 mt-2">
            {isLogin
              ? "Sign in to manage your products and inventory"
              : "Create an account to get started"}
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
          <div className="flex justify-center mb-8">
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
                  className="text-green-600 font-medium hover:text-green-700"
                >
                  Sign up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-green-600 font-medium hover:text-green-700"
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
