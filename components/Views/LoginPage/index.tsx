"use client";
import { Button } from "@/components/Button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useLogin } from "./useLogin";
import { InputField } from "@/components/InputField";
import { ILogin } from "@/types/auth";
import { PasswordField } from "@/components/PasswordField";

const LoginPage = () => {
  const { errors, register, handleSubmit, onSubmit, isLoading } = useLogin();
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

        <PasswordField<ILogin>
          label="Password"
          name="password"
          placeholder="••••••••"
          disabled={isLoading}
          error={errors.password}
          register={register}
        />

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
