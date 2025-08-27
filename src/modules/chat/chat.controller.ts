import { Request, Response } from "express";

import asyncWrapper from "@/core/utils/async.util.js";
import { ChatService } from "./chat.service.js";
import { StatusCodes } from "http-status-codes";
import { PayLoadRequest } from "@/core/types/types.js";
import { ChatDTO } from "./chat.dtos.js";

export class ChatController {
  private chatService = new ChatService();

  sendMessage = asyncWrapper(async (req: PayLoadRequest, res: Response) => {
    const { uid: sender_id } = req.user!;
    const { receiver_id, text } = req.body;

    const chatData = { sender_id, receiver_id, text } as ChatDTO;

    const messageId = await this.chatService.sendMessage(chatData);

    res
      .status(StatusCodes.OK)
      .json({ status: "success", message: "Message sent", data: messageId });
  });
}
