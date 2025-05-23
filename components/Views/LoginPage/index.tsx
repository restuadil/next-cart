"use client";

import { Button } from "@/components/Button";
import { ILogin } from "@/types/auth";
import { AuthValidation } from "@/utils/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILogin>({
    resolver: zodResolver(AuthValidation.LOGIN),
  });
  const onSubmit = async (data: ILogin) => {
    setIsLoading(true);

    if (result?.error) {
      console.log(result);
      setError("identifier", {
        type: "server",
        message: result.error,
      });
    } else {
      router.push("/");
    }
    setIsLoading(false);
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div className="text-red-500 mb-4">{decodeURIComponent(error)}</div>
      )}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Sign in to your account
        </h1>
        <p className="text-slate-500">
          Enter your credentials to access the dashboard
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-gray-400" />
            </div>
            <input
              id="email"
              {...register("identifier")}
              type="email"
              className={`pl-10 w-full p-2 border rounded-md ${
                errors.identifier ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="you@example.com"
              disabled={isLoading}
            />
          </div>
          {errors.identifier && (
            <p className="mt-1 text-sm text-red-600">
              {errors.identifier.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="text-gray-400" />
            </div>
            <input
              id="password"
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className={`pl-10 w-full p-2 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="••••••••"
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-slate-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-slate-700"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
