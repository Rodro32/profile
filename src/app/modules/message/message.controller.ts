import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MessageService } from "./message.service";

const createMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.createMessageIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Message sent successfully",
    data: result,
  });
});

const getAllMessages = catchAsync(async (_req: Request, res: Response) => {
  const result = await MessageService.getAllMessagesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Messages retrieved successfully",
    data: result,
  });
});


// const deleteMessage = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await MessageService.deleteMessageFromDB(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Message deleted successfully",
//     data: result,
//   });
// });

export const MessageController = {
  createMessage,
  getAllMessages,
};