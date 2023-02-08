import { Router } from "express";
import auth from "./auth/routes";
import checkToken from "./middlewares/auth/checkToken";

const router = Router();

router.use("/auth", auth);

router.use(checkToken);

export default router;
