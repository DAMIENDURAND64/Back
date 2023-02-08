import bcrypt from "bcryptjs";
import { User } from "../../../models/user";
import IAuthController from "../interface";

const signIn: IAuthController["signIn"] = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).send({ message: "The username does not exist" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({ message: "The password is invalid" });
    }
    res.send({ message: "The username and password combination is correct!" });
  } catch (error) {
    res.status(500).send({ message: error });
    next(error);
  }
};
export default signIn;
