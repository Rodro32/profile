import { Schema, Types } from "mongoose";

export type TUser = {
  name:string,
  id: string;
  email:string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'vendor';
  isDeleted ?: boolean ;
}