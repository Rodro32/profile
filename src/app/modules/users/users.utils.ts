import { User } from "./users.model";

export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};
export const generateAdminId = async () => {
  const lastAdmin = await User.findOne({ role: "admin" })
    .sort({ id: -1 }) // sort by id, not createdAt
    .lean();

  let newId = "A-0001";

  if (lastAdmin?.id) {
    const lastNumber = Number(lastAdmin.id.split("-")[1]);
    const nextNumber = (lastNumber + 1).toString().padStart(4, "0");
    newId = `A-${nextNumber}`;
  }

  return newId;
};