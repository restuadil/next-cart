import { z } from "zod";

export const CategoryValidation = {
  CREATE: z.object({
    name: z.string().min(3),
  }),
  QUERY: z.object({
    search: z.string().optional(),
    page: z.string().optional(),
    limit: z.string().optional(),
  }),
};
