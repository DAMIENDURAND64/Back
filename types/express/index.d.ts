import { JwtPayload } from "jsonwebtoken";
import { TUserWithoutPassword } from "../../src/api/auth/interface";

declare global {
  namespace Express {
    export interface Request {
      user: TUserWithoutPassword;
    }
  }
}
