import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IRegister } from "@/types/auth";
import { AuthValidation } from "@/utils/validation/auth.validation";
import { Register } from "@/services/auth.service";

export const useRegister = () => {
  const router = useRouter();
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
    if (result.success === false) {
      setError("root", {
        type: "server",
        message: result.message,
      });
    } else {
      router.push("/login");
    }
    setIsLoading(false);
  };

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit,
  };
};
