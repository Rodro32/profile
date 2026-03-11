import express from "express";
import { SkillController } from "./skills.controller";
const router = express.Router();


router.post(
  "/create-skill",
  SkillController.createProject
);

router.get("/", SkillController.getAllSkill);

router.get("/:id", SkillController.getSingleSkill);

export const SkillRoutes = router;
