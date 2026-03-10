import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { MessageController } from "./message.controller";
import { MessageValidation } from "./message.validation";

const router = express.Router();

router.post(
  "/create-message",
  validateRequest(MessageValidation.createMessageValidationSchema),
  MessageController.createMessage
);

router.get("/", MessageController.getAllMessages);

router.get("/:id", MessageController.getSingleMessage);

router.delete("/:id", MessageController.deleteMessage);

export const MessageRoutes = router;