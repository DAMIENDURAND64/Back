import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { User } from "../../../models/user";
import getSecretKey from "../../../utils/auth";
import IAuthController from "../interface";

const login: IAuthController["login"] = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
      .setOptions({ sanitizeFilter: true })
      .exec();
    if (!user) {
      return res.status(404).send({ message: "The username does not exist" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(403).send({ message: "The password is invalid" });
    }

    const secret = getSecretKey();

    // password match
    const { password: _, ...userWithoutPassword } = user.toObject();
    const token = sign({ ...userWithoutPassword }, secret);

    res.setHeader("authorization", `Bearer ${token}`);

    return res.status(200).json({
      ...userWithoutPassword,
    });
  } catch (error) {
    res.status(500).send({ message: error });
    next(error);
  }
};
export default login;
