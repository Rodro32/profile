import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectServices } from "./project.service";

const createProject = catchAsync(async (req:Request, res:Response) => {

  const projects = req.body.data
  
    const result = await projectServices.createProjectIntoDB(projects);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project created successfully",
      data: result,
    });
});

export const projectController = {
  createProject,
}