import { CategoryValidation } from "@/utils/validation/category.validation";
import { z } from "zod";

export interface ICategory {
  _id: string;
  name: string;
}
export type ICategoryRequest = z.infer<typeof CategoryValidation.CREATE>;
export type ICategoryQuery = z.infer<typeof CategoryValidation.QUERY>;
