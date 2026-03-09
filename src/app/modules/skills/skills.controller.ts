import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillServices } from "./skills.service";

const createProject = catchAsync(async (req:Request, res:Response) => {

  const skill = req.body.data
  
    const result = await skillServices.createSkillIntoDB(skill);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "skill created successfully",
      data: result,
    });
});

export const SkillController = {
  createProject,
}