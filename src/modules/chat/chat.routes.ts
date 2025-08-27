import { Router } from "express";
import { ChatController } from "./chat.controller.js";

const router = Router();
const chatController = new ChatController();

router.post("/send", chatController.sendMessage);

export default router;
