"use client";

import { Eye, EyeClosed, Lock } from "lucide-react";
import {
  FieldError,
  UseFormRegister,
  Path,
  FieldValues,
} from "react-hook-form";
import { useState } from "react";
import { Button } from "../Button";
import { cn } from "@/utils/cn";

interface PasswordFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  placeholder?: string;
  disabled?: boolean;
  error?: FieldError;
  register: UseFormRegister<T>;
}

export const PasswordField = <T extends FieldValues>({
  label,
  name,
  placeholder = "••••••••",
  disabled = false,
  error,
  register,
}: PasswordFieldProps<T>) => {
  const classes = cn(
    "w-full rounded-md border p-2 pl-10",
    error ? "border-red-500" : "border-gray-300",
    disabled && "bg-gray-100"
  );
  console.log(classes);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Lock className="text-gray-400" size={18} />
        </div>

        <input
          id={name}
          {...register(name)}
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full rounded-md border p-2 pl-10",
            error ? "border-red-500" : "border-gray-300",
            disabled ? "bg-gray-100" : ""
          )}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="current-password"
        />

        <Button
          type="button"
          variant="outline"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeClosed className="text-gray-400" size={18} />
          ) : (
            <Eye className="text-gray-400" size={18} />
          )}
        </Button>
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};
