import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { db } from "./config/firebase.js";
import notFound from "./core/middlewares/notFound.middleware.js";
import errorMiddleware from "./core/middlewares/error.middleware.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello, Welcome! This API is running perfectly.");
});

app.use(notFound);
app.use(errorMiddleware);

export default app;
