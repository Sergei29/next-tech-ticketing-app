import { z } from "zod";

export const ticketSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(255, { message: "Title must not exceed 255 characters" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(65535, { message: "Description maximum length exceeded" }),
  status: z
    .enum(["OPEN", "STARTED", "CLOSED"], {
      message: "Status value can be OPEN, STARTED or CLOSED",
    })
    .optional(),
  priority: z
    .enum(["LOW", "MEDIUM", "HIGH"], {
      message: "Priority value can be LOW, MEDIUM or HIGH",
    })
    .optional(),
});
