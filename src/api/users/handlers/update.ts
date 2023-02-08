import { User } from "../../../models/user";
import { IUserHandler } from "../interface";

const updateUser: IUserHandler["update"] = async (req, res) => {
  const { id } = req.params;
  try {
    const updateOneUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateOneUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password: _, ...userWithoutPassword } = updateOneUser.toObject();

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot update the user" });
  }
};

export default updateUser;
