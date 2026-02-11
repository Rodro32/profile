import express from "express";
import { projectController } from "./project.controller";
const router = express.Router();


router.post(
  "/create-project",
  projectController.createProject
);

export const ProjectRoutes = router;
