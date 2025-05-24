import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  type: "text" | "email";
  placeholder: string;
  disabled?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  error?: FieldErrors<T>;
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
}
export const InputField = <T extends FieldValues>({
  type,
  placeholder,
  disabled,
  icon: Icon,
  error,
  register,
  name,
  label,
}: InputFieldProps<T>) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium"
        id={name}
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="text-gray-400" />
          </div>
        )}
        <input
          id={name}
          {...register(name)}
          type={type}
          className={cn(
            "w-full rounded-md border p-2 pl-10",
            error ? "border-red-500" : "border-gray-300"
          )}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message as ReactNode}
        </p>
      )}
    </div>
  );
};
