import { TSkill } from "./skills.interface";
import { Skill } from "./skills.model";

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  console.log(result);
  return result;
};

// const getSingleMessageFromDB = async (id: string) => {
//   const result = await Message.findById(id);
//   return result;
// };

export const skillServices = {
  createSkillIntoDB,
}