import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none hover:opacity-75",
      fullWidth && "w-full",
      className
    );

    const variantStyles = cn({
      // Primary
      "bg-green-500 text-white hover:bg-primary-700 focus-visible:ring-primary-500 shadow text-slate-50":
        variant === "primary",
      // Secondary
      "bg-gray-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500 shadow":
        variant === "secondary",
      // Danger
      "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow":
        variant === "danger",
      // Ghost
      "bg-transparent text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-500":
        variant === "ghost",
      // Outline
      "bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500":
        variant === "outline",
    });

    const sizeStyles = cn({
      "px-3 py-1.5 text-xs": size === "sm",
      "px-4 py-2 text-sm": size === "md",
      "px-6 py-3 text-base": size === "lg",
    });

    const iconSize = cn({
      "h-4 w-4": size === "sm",
      "h-5 w-5": size === "md",
      "h-6 w-6": size === "lg",
    });

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles, sizeStyles)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg
              className={cn("animate-spin mr-2", iconSize)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {children}
          </span>
        ) : (
          <>
            {leftIcon && (
              <span className={cn("mr-2", iconSize)}>{leftIcon}</span>
            )}
            {children}
            {rightIcon && (
              <span className={cn("ml-2", iconSize)}>{rightIcon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
