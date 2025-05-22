"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { useState } from "react";
import { IRegister } from "@/types/auth";
import { AuthValidation } from "@/utils/validation/auth.validation";
import { Register } from "@/services/auth.service";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IRegister>({
    resolver: zodResolver(AuthValidation.REGISTER),
  });

  const onSubmit = async (data: IRegister) => {
    setIsLoading(true);
    const result = await Register(data);
    console.log(result);
    if (result.success) {
      router.push("/auth/login");
    } else {
      if (result.errors) {
        Object.entries(result.errors).forEach(([field, messages]) => {
          setError(field as keyof IRegister, {
            type: "server",
            message: Array.isArray(messages) ? messages[0] : messages,
          });
        });
      }
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="text-gray-400" />
          </div>
          <input
            id="name"
            {...register("fullName")}
            type="text"
            className={`pl-10 w-full p-2 border rounded-md ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
            disabled={isLoading}
          />
        </div>
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>
      {/* username */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Username
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="text-gray-400" />
          </div>
          <input
            id="username"
            {...register("username")}
            type="text"
            className={`pl-10 w-full p-2 border rounded-md ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
            disabled={isLoading}
          />
        </div>
        {errors.username && (
          <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
        )}
      </div>

      {/* Email Field */}
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
            {...register("email")}
            type="email"
            className={`pl-10 w-full p-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
            disabled={isLoading}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
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
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        isLoading={isLoading}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterPage;
