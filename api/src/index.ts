import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
// import swaggerDoc from "./swagger.json";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// base middlewares
app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }),
);
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// SWAGGER DOCS PATH
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
