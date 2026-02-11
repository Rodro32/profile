import { Schema, Types } from "mongoose";

export type TUser = {
  id: string;
  email:string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'vendor';
  isDeleted ?: boolean ;
}