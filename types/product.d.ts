import { ProductValidation } from "@/utils/validation/product.validation";
import { z } from "zod";

export type IProductRequest = z.infer<typeof ProductValidation.CREATE>;
export interface IProduct extends IProductRequest {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
