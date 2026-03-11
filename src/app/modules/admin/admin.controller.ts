import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AdminServices } from "./admin.service";

import { Request, Response } from "express";


const getAllAdmins = catchAsync(async (_req: Request, res: Response) => {
  const result = await AdminServices.getAllAdminFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin retrieved successfully",
    data: result,
  });
});

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await AdminServices.getSingleAdminsFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin is retrieved successfully",
    data: result,
  });
});

export const AdminControllers = {
  getSingleAdmin,
  getAllAdmins,
};