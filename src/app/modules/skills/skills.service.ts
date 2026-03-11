import { TSkill } from "./skills.interface";
import { Skill } from "./skills.model";

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  console.log(result);
  return result;
};

const getAllSkillFromDB = async () => {
  const result = await Skill.find();
  return result;
};

const getSingleSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id);
  return result;
};

export const skillServices = {
  createSkillIntoDB,
  getAllSkillFromDB,
  getSingleSkillFromDB,
}