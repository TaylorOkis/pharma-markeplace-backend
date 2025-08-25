import express, { Request, Response } from "express";
import cors from "cors";
import notFound from "./core/middlewares/notFound.middleware";
import errorMiddleware from "./core/middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello, Welcome! This API is running perfectly.");
});

app.use(notFound);
app.use(errorMiddleware);

export default app;
