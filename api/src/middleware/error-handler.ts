import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import { z, ZodError } from "zod";

// local modules
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "@/constants/http-status-codes";

const handleZodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  res.status(BAD_REQUEST).json({
    message: error.message,
    errors,
  });
};

const errorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`PATH ${req.path}`, error);

  if (error instanceof ZodError) {
    return handleZodError(res, error);
  }

  // sending the response
  res.status(INTERNAL_SERVER_ERROR).json({
    message:
      "ERROR! Something went wrong. Might be some internal server error.",
  });
};

export default errorHandler;
