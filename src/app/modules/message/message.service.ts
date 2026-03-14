import { sendMessage } from "../../utils/sendMessage";
import { TMessage } from "./message.interface";
import { Message } from "./message.model";

const createMessageIntoDB = async (payload: TMessage) => {
  const result = await Message.create(payload);

  const html = `
    <h2>New Portfolio Message</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Message:</strong> ${payload.message}</p>
  `;

  // send email notification to yourself
  await sendMessage(process.env.EMAIL_USER as string, html);

  return result;
};


const getAllMessagesFromDB = async () => {
  const result = await Message.find();
  return result;
};

const getSingleMessageFromDB = async (id: string) => {
  const result = await Message.findById(id);
  return result;
};

const deleteMessageFromDB = async (id: string) => {
  const result = await Message.findByIdAndDelete(id);
  return result;
};


export const MessageService = {
  createMessageIntoDB,
  getAllMessagesFromDB,
  deleteMessageFromDB,
  getSingleMessageFromDB,
};