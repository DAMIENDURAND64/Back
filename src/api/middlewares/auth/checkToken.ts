import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import getSecretKey from "../../../utils/auth";
import { TUserWithoutPassword } from "../../auth/interface";

const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(403).json({ message: "You need to login first !" });
  }

  const secret = getSecretKey();

  const decodedToken = jwt.verify(token, secret);

  if (typeof decodedToken === "string") {
    throw new Error(decodedToken);
  }
  console.log(user);

  req.user = decodedToken as TUserWithoutPassword;

  next();
};

export default checkToken;
