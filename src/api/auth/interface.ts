import { TUser, User } from "./../../models/user";
import { RequestHandler } from "express";
import ResponseError from "../../utils/responseError";

export type TUserWithoutPassword = Omit<TUser, "password">;

type TLoginBody = {
  email: string;
  password: string;
};

interface IAuthController {
  register: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TUser,
    null
  >;
  login: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TLoginBody,
    null
  >;
}

export default IAuthController;
