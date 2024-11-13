import { OK } from "@/constants/http-status-codes";
import { catchErrors } from "@/utils/catch-errors";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

const router = express.Router();

router.get(
  "/health-check",
  catchErrors(async (req: Request, res: Response, next: NextFunction) => {
    // throw new Error("TEST ERROR");
    res.status(OK).json({
      message: "Health check ! Everything is fine.",
    });
  })
);

export default router;
