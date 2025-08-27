import { admin, db } from "@/config//firebase.js";
import { ChatDTO } from "./chat.dtos.js";

export class ChatRepository {
  async getChat(chatId: string) {
    return await db.collection("chats").doc(chatId).get();
  }

  async setChat(chatId: string, chat: ChatDTO) {
    return await db
      .collection("chats")
      .doc(chatId)
      .set({
        participants: [chat.sender_id, chat.receiver_id],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        lastMessage: chat.text,
      });
  }

  async send(chatId: string, chat: ChatDTO) {
    return await db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add({
        senderId: db.collection("users").doc(chat.sender_id),
        text: chat.text,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
  }
}
