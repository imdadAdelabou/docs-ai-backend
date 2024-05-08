import { Router } from "express";
import { update, updateUserPricing } from "../controllers/user.js";

const userRouter = Router();

userRouter.put("/", update);
userRouter.put("/pricing", updateUserPricing);

export default userRouter;
