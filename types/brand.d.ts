import { BrandValidation } from "@/utils/validation/brand.validation";
import { z } from "zod";

export type IBrand = z.infer<typeof BrandValidation.CREATE>;
export type IBrandQuery = z.infer<typeof BrandValidation.QUERY>;
