import { BrandValidation } from "@/utils/validation/brand.validation";
import { z } from "zod";

export type IBrand = {
  _id: string;
  name: string;
  logo: string;
};
export type IBrandQuery = z.infer<typeof BrandValidation.QUERY>;
