import express from "express";
import { projectController } from "./project.controller";
const router = express.Router();


router.post(
  "/create-project",
  projectController.createProject
);

router.get("/", projectController.getAllProject);

router.get("/:id", projectController.getSingleProject);

export const ProjectRoutes = router;
