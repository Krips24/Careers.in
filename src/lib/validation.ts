import { z } from "zod";

export const jobFilterSchema = z.object({
  input: z.string().optional(),
  jobType: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;
