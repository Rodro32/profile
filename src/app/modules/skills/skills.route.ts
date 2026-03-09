import express from "express";
import { SkillController } from "./skills.controller";
const router = express.Router();


router.post(
  "/create-skill",
  SkillController.createProject
);

export const SkillRoutes = router;
