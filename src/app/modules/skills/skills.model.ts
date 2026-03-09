import { Schema, model } from "mongoose";
import { TSkill } from "./skills.interface";

const skillSchema = new Schema<TSkill>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "frontend",
        "backend",
        "database",
        "devops",
        "blockchain",
        "tools",
      ],
      required: true,
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Skill = model<TSkill>("Skill", skillSchema);