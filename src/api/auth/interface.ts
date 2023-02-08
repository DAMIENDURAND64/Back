import { TUser, User } from "./../../models/user";
import { RequestHandler } from "express";
import ResponseError from "../responseError";

type TUserWithoutPassword = Omit<TUser, "password">;

type TLoginBody = {
  email: string;
  password: string;
};

interface IAuthController {
  signUp: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TUser,
    null
  >;
  signIn: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TLoginBody,
    null
  >;
}

export default IAuthController;
