import { ILogin } from "@/types/auth";
import { AuthValidation } from "@/utils/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const router = useRouter();
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
    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    console.log(result);
    if (result?.error) {
      setError("identifier", {
        type: "server",
        message: result.error,
      });
    } else {
      router.push("/");
    }
    setIsLoading(false);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,

    isLoading,
  };
};
