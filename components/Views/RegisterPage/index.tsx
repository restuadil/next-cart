"use client";

import { Mail, User } from "lucide-react";
import { useRegister } from "./useRegister";
import { Button } from "@/components/Button";
import { InputField } from "@/components/InputField";
import { IRegister } from "@/types/auth";
import { PasswordField } from "@/components/PasswordField";

const RegisterPage = () => {
  const { errors, handleSubmit, isLoading, register, onSubmit } = useRegister();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}

      {errors.root && (
        <p className="mt-1 text-sm text-red-600">{errors.root.message}</p>
      )}
      <InputField<IRegister>
        label="Full Name"
        register={register}
        name="fullName"
        placeholder="John Doe"
        type="text"
        disabled={isLoading}
        error={errors.fullName}
        icon={User}
      />
      {/* username */}
      <InputField<IRegister>
        label="Username"
        register={register}
        name="username"
        placeholder="johndoe"
        type="text"
        disabled={isLoading}
        error={errors.username}
        icon={User}
      />

      {/* Email Field */}
      <InputField<IRegister>
        label="Email"
        register={register}
        name="email"
        placeholder="0p2D1@example.com"
        type="email"
        disabled={isLoading}
        error={errors.email}
        icon={Mail}
      />

      {/* Password Field */}
      <PasswordField<IRegister>
        label="Password"
        name="password"
        placeholder="••••••••"
        disabled={isLoading}
        error={errors.password}
        register={register}
      />

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
