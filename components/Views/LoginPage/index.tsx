"use client";
import { Button } from "@/components/Button";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useLogin } from "./useLogin";
import { InputField } from "@/components/InputField";
import { ILogin } from "@/types/auth";

const LoginPage = () => {
  const {
    errors,
    register,
    handleSubmit,
    onSubmit,
    isLoading,
    showPassword,
    setShowPassword,
  } = useLogin();
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="mb-2 text-2xl font-bold text-slate-800">
          Sign in to your account
        </h1>
        <p className="text-slate-500">
          Enter your credentials to access the dashboard
        </p>
      </div>

      <div className="space-y-4">
        <InputField<ILogin>
          type="text"
          placeholder="Email or Username"
          disabled={isLoading}
          icon={Mail}
          error={errors.identifier}
          register={register}
          name="identifier"
          label="Email or Username"
        />

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="text-gray-400" />
            </div>
            <input
              id="password"
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className={`w-full rounded-md border p-2 pl-10 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="••••••••"
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
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
              className="h-4 w-4 rounded border-slate-300 text-green-600 focus:ring-green-500"
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
