import { RequestHandler } from "express";
import { TUser } from "../../models/user";
import ResponseError from "../../utils/responseError";

export type TUserWithoutPassword = Omit<TUser, "password">;

export interface IUserHandler {
  getAll: RequestHandler<null, TUserWithoutPassword[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    null
  >;
}
