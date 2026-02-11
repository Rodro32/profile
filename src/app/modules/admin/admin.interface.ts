import { Types } from "mongoose";

export type TGender = "Male" | "Female" | "Others";

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TAdmin = {
  name: TUserName;
  email: string;
  gender: TGender;
  userId: Types.ObjectId;
  dateOfBirth?: Date;
  address: string;
};
