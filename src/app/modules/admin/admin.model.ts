import { model, Schema } from "mongoose";
import { TAdmin } from "./admin.interface";

const AdminSchema = new Schema<TAdmin>({
  name: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
});

export const Admin = model("Admin", AdminSchema);
