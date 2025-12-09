import { z } from "zod";

export const FeadBackSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have First And Last and must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.email(),
  question: z
    .string()
    .min(25, "Question must have at least 25 characters")
    .max(500, "Question must have at most 500 characters"),
});

export type FeadbackFormValues = z.infer<typeof FeadBackSchema>;
