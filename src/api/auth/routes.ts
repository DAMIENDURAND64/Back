import { Router } from "express";
import signin from "./handlers/signin";
import signup from "./handlers/signup";

const router = Router()

router.post("/signin", signin)
router.post("/signup", signup)


export default router