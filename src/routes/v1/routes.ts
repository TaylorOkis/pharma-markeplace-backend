import { Router } from "express";
import { authRoutes } from "@/modules/auth/index.js";
import { chatRoutes } from "@/modules/chat/index.js";

const routerV1 = Router();

routerV1.use("/auth", authRoutes);
routerV1.use("/chat", chatRoutes);

export default routerV1;
