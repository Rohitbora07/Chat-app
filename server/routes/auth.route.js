import {userSignup} from "../controllers/auth.controller.js"
import Router from "express";

const userRouter = Router();

userRouter.post("/signup", userSignup);

export default userRouter;