import z from "zod";

export const projectValidationSchema = z.object({
  body:z.object({
    title:z.string({error:'title is required'}),
    description: z.string().min(1).optional(),
    githubLink: z.string().optional(),
    liveLink: z.string().optional(),
    status: z.enum(["active", "completed", "archived"]).optional(),
    category: z.enum(["fullstack", "frontend", "backend"]).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    isDeleted: z.boolean().optional(),
  })
})

export const projectValidation = {
  projectValidationSchema,
}