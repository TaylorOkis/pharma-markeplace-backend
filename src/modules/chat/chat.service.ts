import { generateChatId } from "@/core/utils/chatId.util.js";
import { ChatRepository } from "./chat.repository.js";
import { ChatDTO } from "./chat.dtos.js";

export class ChatService {
  private chatRepository = new ChatRepository();

  async sendMessage(chat: ChatDTO) {
    let chatId, chatDoc;
    chatId = generateChatId(chat.sender_id, chat.receiver_id);
    chatDoc = await this.chatRepository.getChat(chatId);

    if (!chatDoc.exists) {
      await this.chatRepository.setChat(chatId, chat);
    }

    const messageRef = await this.chatRepository.send(chatId, chat);

    return messageRef.id;
  }
}
