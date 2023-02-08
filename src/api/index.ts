import { Router } from "express";
import auth from "./auth/routes";
import users from "./users/routes";
import checkToken from "./middlewares/auth/checkToken";

const router = Router();

router.use("/auth", auth);

router.use(checkToken);
router.use("/users", users);

export default router;
