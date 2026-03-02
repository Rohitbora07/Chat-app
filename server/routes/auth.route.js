import {userSignup, userLogin} from "../controllers/auth.controller.js"
import Router from "express";

const userRouter = Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);

export default userRouter;