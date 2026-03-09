import { TSkill } from "./skills.interface";
import { Skill } from "./skills.model";

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  console.log(result);
  return result;
};

export const skillServices = {
  createSkillIntoDB,
}