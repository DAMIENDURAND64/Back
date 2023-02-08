import register from "./handlers/register";
import login from "./handlers/login";
import IAuthController from "./interface";

const controller: IAuthController = { login, register };

export default controller;
