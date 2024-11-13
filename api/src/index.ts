// packages
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";

//
import swaggerDoc from "@/swagger.json";

// routes
import healthCheck from "@/modules/health-check";

// custom middleware
import errorHandler from "@/middleware/error-handler";
import authRouter from "@/modules/auth/auth.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// base middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

// SWAGGER DOCS PATH
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// routes
app.use("/api/v1", healthCheck);
app.use("/api/v1", authRouter);

// custom middlewares
app.use(errorHandler);

// app listener
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
  console.log(`Access swagger docs on http://localhost:${PORT}/api-docs`);
});
