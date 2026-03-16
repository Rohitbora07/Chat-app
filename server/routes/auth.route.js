import {userSignup, userLogin, userLogout, sendVerificationOtp, verifyUserAccount, sendresetOtp, resetPassword, createUserProfile, checkAuth} from "../controllers/auth.controller.js"
import Router from "express";
import userAuth from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();

userRouter.post("/signup", userSignup);
userRouter.post("/send-verification-otp", userAuth, sendVerificationOtp);
userRouter.post("/verify-account", userAuth, verifyUserAccount);
userRouter.post("/logout", userLogout);
userRouter.post("/login", userLogin);
userRouter.post("/send-reset-password-otp", sendresetOtp);
userRouter.post("/reset-password", resetPassword);
userRouter.post("/update-profile", userAuth, upload.single("profileImage"), createUserProfile);
userRouter.get("/check-auth", userAuth, checkAuth);

export default userRouter;