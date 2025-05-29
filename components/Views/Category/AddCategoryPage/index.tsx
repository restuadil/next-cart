"use client";

import { Button } from "@/components/Button";
import { InputField } from "@/components/InputField";
import { ICategoryRequest } from "@/types/category";
import { Shapes } from "lucide-react";
import { useCategoryForm } from "../action";

export default function AddCategoryPage() {
  const { errors, handleSubmit, isSubmitting, register, onSubmit } =
    useCategoryForm("add");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-48 my-20 flex flex-col justify-center gap-4"
    >
      <h1 className="text-center text-xl font-semibold">Add Category</h1>
      {errors.root && (
        <p className="text-center text-sm text-red-500">
          {errors.root.message}
        </p>
      )}
      <InputField<ICategoryRequest>
        label="Category Name"
        name="name"
        placeholder="Enter category name"
        icon={Shapes}
        register={register}
        error={errors.name}
        disabled={isSubmitting}
        type="text"
      />
      <Button type="submit" variant="primary" isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
