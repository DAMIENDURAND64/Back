import { User } from "../../../models/user";
import { IUserHandler } from "./../interface";

const getAll: IUserHandler["getAll"] = async (req, res) => {
  try {
    const users = await User.find();

    if (users) {
      const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user.toObject();

        return rest;
      });
      res.status(200).json(usersWithoutPassword);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAll;
