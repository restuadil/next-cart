"use client";

import { Button } from "@/components/Button";
import { InputField } from "@/components/InputField";
import { Shapes } from "lucide-react";
import { getCategoryById } from "@/services/category.service";
import { useEffect, useState } from "react";
import { useCategoryForm } from "../action";
import { ICategoryRequest } from "@/types/category";
import { notFound } from "next/navigation";

export default function EditCategoryPage({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, errors, isSubmitting, onSubmit, reset } =
    useCategoryForm("edit", id);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryById(id);
        if (response.status && response.data) {
          reset({ name: response.data.name }); // set form value
        }
      } catch (err) {
        console.error("Failed to fetch category", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id, reset]);

  if (loading) return <p className="mt-10 text-center">Loading...</p>;
  if (errors.root && errors.name) {
    notFound();
  }
  return (
    <form
      className="mx-48 my-20 flex flex-col justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-xl font-semibold">Edit Category</h1>
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
