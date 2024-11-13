import express from "express";

// controllers
import { registerHandler } from "@/modules/auth/auth.controllers";

const authRouter = express.Router();

// register
authRouter.post("/auth/register", registerHandler);

export default authRouter;
