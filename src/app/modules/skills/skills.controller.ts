import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillServices } from "./skills.service";
import httpStatus from "http-status";

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

const getAllSkill = catchAsync(async (_req: Request, res: Response) => {
  const result = await skillServices.getAllSkillFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await skillServices.getSingleSkillFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "skill retrieved successfully",
    data: result,
  });
});

export const SkillController = {
  createProject,
  getAllSkill,
  getSingleSkill,
}