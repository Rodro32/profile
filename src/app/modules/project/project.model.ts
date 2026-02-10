import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    githubLink: {
      type: String,
    },

    liveLink: {
      type: String,
    },

    status: {
      type: String,
      enum: ["active", "completed", "archived"],
      default: "active",
    },

    category: {
      type: String,
      enum: ["fullstack", "frontend", "backend"],
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
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

export const Project = model<TProject>("Project", projectSchema);
