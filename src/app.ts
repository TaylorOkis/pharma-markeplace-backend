import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import notFound from "./core/middlewares/notFound.middleware.js";
import errorMiddleware from "./core/middlewares/error.middleware.js";
import routerV1 from "./routes/v1/routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello, Welcome! This API is running perfectly.");
});

app.use("/api/v1", routerV1);

app.use(notFound);
app.use(errorMiddleware);

export default app;
