import { z } from "zod";

export const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Skill name is required" }),

    category: z.enum([
      "frontend",
      "backend",
      "database",
      "devops",
      "blockchain",
      "tools",
    ]),

    level: z.enum(["beginner", "intermediate", "advanced"]),

    isDeleted: z.boolean().optional(),
  }),
});



export const SkillValidation = {
  createSkillValidationSchema,
};