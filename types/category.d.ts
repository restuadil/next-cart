import { CategoryValidation } from "@/utils/validation/category.validation";
import { z } from "zod";

export type ICategory = {
  id: string;
  name: string;
};
export type ICategoryQuery = z.infer<typeof CategoryValidation.QUERY>;
