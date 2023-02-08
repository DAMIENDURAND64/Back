import { User } from "../../../models/user";
import { IUserHandler } from "../interface";

const deleteUser: IUserHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOneUser = await User.findByIdAndDelete({ id });

    if (!deleteOneUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default deleteUser;
