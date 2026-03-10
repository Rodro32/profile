import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  console.log(result);
  return result;
};

const getAllProjectFromDB = async () => {
  const result = await Project.find();
  return result;
};

export const projectServices = {
  createProjectIntoDB,
  getAllProjectFromDB,
}