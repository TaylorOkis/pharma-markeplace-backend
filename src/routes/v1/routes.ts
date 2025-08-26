import { Router } from "express";
import { authRoutes } from "@/modules/auth/index.js";

const routerV1 = Router();

routerV1.use("/auth", authRoutes);

export default routerV1;
