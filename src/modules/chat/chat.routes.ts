import { Router } from "express";
import { ChatController } from "./chat.controller.js";
import { authenticateUser } from "@/core/middlewares/auth.middleware.js";

const router = Router();
const chatController = new ChatController();

router.use(authenticateUser);

router.post("/send", chatController.sendMessage);

export default router;
