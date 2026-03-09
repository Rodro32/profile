import { Types } from "mongoose";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "blockchain"
  | "tools";

export type SkillLevel = "beginner" | "intermediate" | "advanced";

export type TSkill = {
  
  name: string;
  category: SkillCategory;
  level: SkillLevel;

  isDeleted?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
};