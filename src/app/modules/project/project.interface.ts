import { Model, Types } from "mongoose";

export type ProjectStatus = "active" | "completed" | "archived";

export type TProject = {
  title: string;
  description: string;

  githubLink?: string;
  liveLink?: string;
  
  status?: ProjectStatus;

  category?: "fullstack" | "frontend" | "backend" ;

  startDate?: Date;
  endDate?: Date;

  isDeleted?: boolean;
}


