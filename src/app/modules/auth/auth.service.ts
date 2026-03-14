import { User } from "../users/users.model";
import { TLoginUser } from "./auth.interface";

const loginUser = async (payload: TLoginUser) => {
  const { id, password } = payload;

  const user = await User.findOne({ id });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Password is incorrect");
  }

  return user;
};

export const AuthServices = {
  loginUser,
};