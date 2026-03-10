import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectServices } from "./project.service";
import httpStatus from "http-status";

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

const getAllProject = catchAsync(async (_req: Request, res: Response) => {
  const result = await projectServices.getAllProjectFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await projectServices.getSingleProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message retrieved successfully",
    data: result,
  });
});

export const projectController = {
  createProject,
  getAllProject ,
  getSingleProject,
}