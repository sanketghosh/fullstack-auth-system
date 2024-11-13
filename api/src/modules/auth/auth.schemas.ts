import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "An email is required.",
    }),
    password: z
      .string()
      .min(6, {
        message: "Minimum 6 characters needed in password.",
      })
      .max(255, {
        message: "Max 255 characters are allowed.",
      }),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Minimum 6 characters needed in password.",
      })
      .max(255, {
        message: "Max 255 characters are allowed.",
      }),
    userAgent: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match with confirm password.",
    path: ["confirmPassword"],
  });
