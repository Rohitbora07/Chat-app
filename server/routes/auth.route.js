import {userSignup, userLogin, userLogout} from "../controllers/auth.controller.js"
import Router from "express";

const userRouter = Router();

userRouter.post("/signup", userSignup);
userRouter.post("/logout", userLogout);
userRouter.post("/login", userLogin);

export default userRouter;