import { asyncHandler } from "../utils/asyncHandler.js";
import Conversation from "../models/conversation.models.js";
import Message from "../models/message.models.js";

const sendMessage = asyncHandler(async (req, res) => {
  const { messages } = req.body;
  const { id: reciverID } = req.params;
  const senderID = req.user._id;

  let chats = await Conversation.findOne({
    participants: { $all: [senderID, reciverID] },
  });
  if (!chats) {
    chats = await Conversation.create({
      participants: [senderID, reciverID],
    });
  }
  const newMessages = new Message({
    senderID,
    reciverID,
    messages,
    conversationID: chats._id,
  });
  if (newMessages) {
    chats.messages.push(newMessages._id);
  }

  // socket.io
  await Promise.all([chats.save(), newMessages.save()]);
  return res.status(201).send(newMessages);
});

const getMessage = asyncHandler(async (req, res) => {
  const { id: reciverID } = req.params;
  const senderID = req.user._id;

  const chats = await Conversation.findOne({
    participants: {
      $all: [senderID, reciverID],
    },
  }).populate("messages");

  if (!chats) return res.status(200).send([]);
  const message = chats.messages;
  return res.status(200).send(message);
});

export { sendMessage, getMessage };
