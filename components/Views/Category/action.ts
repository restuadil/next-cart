"use client";

import { addCategory, editCategory } from "@/services/category.service";
import { ICategoryRequest } from "@/types/category";
import { CategoryValidation } from "@/utils/validation/category.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const useCategoryForm = (action: "add" | "edit", id?: string) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<ICategoryRequest>({
    resolver: zodResolver(CategoryValidation.CREATE),
  });
  const onSubmit = async (data: ICategoryRequest) => {
    try {
      const result =
        action === "edit" && id
          ? await editCategory(id, data)
          : await addCategory(data);

      if (result.status === true) {
        reset();
        router.push("/admin/categories");
      } else {
        setError("root", {
          type: "server",
          message: result.message || `Failed to ${action} category`,
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError("name", {
          type: "server",
          message:
            typeof error.response?.data === "string"
              ? error.response.data
              : JSON.stringify(error.response?.data),
        });
      }
    }
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit, reset };
};
