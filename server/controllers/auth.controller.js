import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/send.emails.js";
import bcrypt from "bcrypt";
import otpTemplate from "../emails/templates/otpTemplate.js";
import welcomeTemplate from "../emails/templates/welcomeTemplate.js";
import accVerifiedTemplate from "../emails/templates/accVerifiedTemplate.js";
import resetPassOtpTemplate from "../emails/templates/resetPassOtpTemplate.js";
import passResetTemplate from "../emails/templates/passResetTemplate.js";

const maxAge = 3 * 24 * 60 * 60;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_SECRET, {
        expiresIn: maxAge,
    });
};

const userSignup = async(req, res) => {
    try {
        const { email, password, firstName } = req.body;
        if (!email || !password || !firstName)
            return res.status(400).json({ success: false, message: "Enter all fields" });

        const existingUser = await userModel.findOne({ email });
        if (existingUser)
            return res.status(400).json({ success: false, message: "User already exists" });

        const newUser = new userModel({ email, password, firstName });
        await newUser.save();
        res.cookie("token", createToken(newUser.email, newUser._id), {
            httpOnly: true,
            maxAge: maxAge * 1000,
            secure: true,
            sameSite: "None",
        });

        sendEmail(
                newUser.email,
                "Welcome to Chat App!",
                welcomeTemplate(newUser.firstName),
            )
            .then(() => {
                console.log("Welcome email sent successfully");
            })
            .catch((err) => {
                console.error("Error sending welcome email:", err);
            });

        res.status(201).json({
            user: {
                email: newUser.email,
                firstName: newUser.firstName,
                userId: newUser._id,
                profileSetup: newUser.profileSetup,
            },
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const userLogin = async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Enter the required fields" });
        }

        const user = await userModel.findOne({ email });

        if (!user)
            return res.status(400).json({ success: false, message: "User does not exist", });

        const auth = await bcrypt.compare(password, user.password);
        if (!auth)
            return res.status(400).json({ success: false, message: "Password is Incorrect" });

        res.cookie("token", createToken(user.email, user._id), {
            httpOnly: true,
            maxAge: maxAge * 1000,
            secure: true,
            sameSite: "None",
        });

        res.status(201).json({
            user: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                userId: user._id,
                profileSetup: user.profileSetup,
            },
            success: true,
            message: "User Successfully Logged In",
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const userLogout = async(req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            maxAge: maxAge * 1000,
            secure: true,
            sameSite: "None",
        });

        return res.status(200).json({
            success: true,
            message: "User Successfully Logged Out",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message });
    }
};

const sendVerificationOtp = async(req, res) => {
    try {
        const userId = req.user._id;
        if (!userId) return res.status(400).json({ success: false, message: "User ID is required" });

        // finding user using id which is recieved by authUser middleware
        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        if (user.isAccountVerified) return res.status(400).json({ success: false, message: "Account is already verified" });

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 10 * 60 * 1000;
        await user.save();

        sendEmail(
            user.email,
            "Verify Your Email - OTP",
            otpTemplate(user.firstName, otp),
            ).then(() => { console.log("Verification email sent successfully"); })
            .catch((err) => { console.error("Error sending verification email:", err); });

        return res.status(200).json({ success: true, message: "Verification OTP sent to email" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message });
    }
};


const verifyUserAccount = async(req, res) => {

    try {
        const { otp } = req.body;
        const userId = req.user._id;
        if (!otp) return res.status(400).json({ success: false, message: "OTP is required" });
        if (!userId) return res.status(400).json({ success: false, message: "User ID is required" });

        // finding user using id which is recieved by authUser middleware
        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });
        if (user.isAccountVerified) return res.status(400).json({ success: false, message: "Account is already verified" });

        if (user.verifyOtp !== otp) return res.status(400).json({ success: false, message: "Invalid OTP" });
        if (user.verifyOtpExpireAt < Date.now()) return res.status(400).json({ success: false, message: "OTP has expired" });

        user.isAccountVerified = true;
        user.verifyOtp = null;
        user.verifyOtpExpireAt = null;
        await user.save();

        sendEmail(
            user.email,
            "Your Account is Verified",
            accVerifiedTemplate(user.firstName)
        )

        return res.status(200).json({ success: true, message: "Account verified successfully" });
    } catch (error) {
        console.error("Error verifying account:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

const sendresetOtp = async(req, res) => {

    try {
        
        const { email } = req.body;
        if (!email) return res.status(400).json({ success: false, message: "Email is required" });
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 10 * 60 * 1000;
        await user.save();

        sendEmail(
            user.email,
            "Reset Password OTP",
            resetPassOtpTemplate(user.firstName, otp)
        );

        return res.status(200).json({ success: true, message: "Reset password OTP sent to email", otp: user.resetOtp });

    } catch (error) {
        console.error("Error sending reset password OTP:", error);
        return res.status(500).json({ success: false, message: error.message });
    }

}


const resetPassword = async(req, res) => {
    try {
        
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) return res.status(400).json({ success: false, message: "Email, OTP and new password are required" });
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });  

        if (user.resetOtp !== otp) return res.status(400).json({ success: false, message: "Invalid OTP" });
        if (user.resetOtpExpireAt < Date.now()) return res.status(400).json({ success: false, message: "OTP has expired" });

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetOtp = null;
        user.resetOtpExpireAt = null;
        await user.save();

        sendEmail(
            user.email,
            "Your Password has been Reset",
            passResetTemplate(user.firstName)
        );
        return res.status(200).json({ success: true, message: "Password reset successfully" });

    } catch (error) {
        console.error("Error resetting password:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

export { userSignup, userLogin, userLogout, sendVerificationOtp, verifyUserAccount, sendresetOtp, resetPassword };