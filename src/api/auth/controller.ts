import signUp from "./handlers/signup";
import signIn from "./handlers/signin";
import IAuthController from "./interface";

const controller: IAuthController = { signIn, signUp };

export default controller;
