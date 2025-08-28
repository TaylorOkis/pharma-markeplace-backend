import { Router } from "express";
import { authRoutes } from "@/modules/auth/index.js";
import { chatRoutes } from "@/modules/chat/index.js";
import { productRoutes } from "@/modules/product/index.js";

const routerV1 = Router();

routerV1.use("/auth", authRoutes);
routerV1.use("/chat", chatRoutes);
routerV1.use("/product", productRoutes);

export default routerV1;
