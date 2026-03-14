import { Types } from "mongoose";

export type TGender = "Male" | "Female" | "Others";

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TAdmin = {
  name: TUserName;
  id:string,
  userId: Types.ObjectId;
  email: string;
  gender: TGender;
  dateOfBirth?: Date;
  address: string;
};
