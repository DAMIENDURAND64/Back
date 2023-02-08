import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../../models/user";
import IAuthController from "../interface";

const signUp: IAuthController["signUp"] = async (req, res) => {
  const { password, lastName, firstName, email } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const userModel = new User({
      lastName: lastName,
      firstName: firstName,
      email: email,
      password: hashedPassword,
    });

    const newUser = (await userModel.save()).toObject();

    const { password: removedPassword, ...userWithoutPassword } = newUser;

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default signUp;
