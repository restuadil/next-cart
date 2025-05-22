import { z } from "zod";

export const BrandValidation = {
  CREATE: z.object({
    name: z.string().min(3),
    logo: z.string().url(),
  }),
  QUERY: z.object({
    search: z.string().optional(),
    page: z.string().optional(),
    limit: z.string().optional(),
  }),
};
