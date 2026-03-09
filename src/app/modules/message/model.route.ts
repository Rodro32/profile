import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { MessageController } from "./message.controller";
import { MessageValidation } from "./message.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(MessageValidation.createMessageValidationSchema),
  MessageController.createMessage
);

router.get("/", MessageController.getAllMessages);

router.patch("/:id", MessageController.markMessageRead);

router.delete("/:id", MessageController.deleteMessage);

export const MessageRoutes = router;