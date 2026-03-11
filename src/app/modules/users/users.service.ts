
import { TAdmin } from "../admin/admin.interface";
import { Admin } from "../admin/admin.model";
import { TUser } from "./users.interface";
import { User } from "./users.model";



const createAdminIntoDb = async (password: string, payload: TAdmin) => {
  const userData: Partial<TUser> = {};
  console.log(userData);
  
  userData.role = "admin";
  userData.password = password;
  userData.email = payload.email;
  userData.id = "286";
  const newUser = await User.create(userData);
  if (!newUser) {
    throw new Error("user created failed");
  }

  payload.userId = newUser._id;

  const createNewAdmin = await Admin.create(payload);
  return createNewAdmin;
};



// const createVendorIntoDB = async (password: string, payload: TOrganization) => {
//   const userData: Partial<TUser> = {};
//   console.log(userData);
  
//   userData.role = "vendor";
//   userData.password = password;
//   userData.id = "90";
//   const newUser = await User.create(userData);
//   if (!newUser) {
//     throw new Error("user created failed");
//   }

//   payload.user = newUser._id;

//   const createOrganization = await Organization.create(payload);
//   return createOrganization;
// };

export const UserServices = {
  // createVendorIntoDB,
  createAdminIntoDb,
};

