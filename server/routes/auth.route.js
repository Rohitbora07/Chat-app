import {userSignup, userLogin, userLogout, sendVerificationOtp} from "../controllers/auth.controller.js"
import Router from "express";
import userAuth from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/signup", userSignup);
userRouter.post("/send-verification-otp", userAuth, sendVerificationOtp);
userRouter.post("/logout", userLogout);
userRouter.post("/login", userLogin);

export default userRouter;