// packages
import type { Request, Response } from "express";

//
import { catchErrors } from "@/utils/catch-errors";
import { RegisterSchema } from "@/modules/auth/auth.schemas";

export const registerHandler = catchErrors(async (req, res) => {
  // validate schema
  /*  const register = RegisterSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });
 */
  // call service
  // return response
});
