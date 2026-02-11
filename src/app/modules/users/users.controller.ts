import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./users.service";





// const createVendor = catchAsync(async (req:Request, res:Response) => {
//   const { password, userData } = req.body;
//   console.log(password, userData);

//   const result = await UserServices.createVendorIntoDB(userData);

//   return res.status(201).json({
//     success: true,
//     message: "Vendor created successfully",
//     data: result,
//   });
// });

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const { password, data } = req.body; 
  console.log(password, data);

  const result = await UserServices.createAdminIntoDb(password, data);

  return res.status(201).json({
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});


export const UserControllers = {
  // createVendor,
  createAdmin,
}



