import { TMessage } from "./message.interface";
import { Message } from "./message.model";

const createMessageIntoDB = async (payload: TMessage) => {
  const result = await Message.create(payload);
  return result;
};

const getAllMessagesFromDB = async () => {
  const result = await Message.find();
  return result;
};


// const deleteMessageFromDB = async (id: string) => {
//   const result = await Message.findByIdAndDelete(id);
//   return result;
// };

export const MessageService = {
  createMessageIntoDB,
  getAllMessagesFromDB,
};