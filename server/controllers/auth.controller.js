import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/send.emails.js";
import bcrypt from "bcrypt"

const maxAge = 3 * 24 * 60 * 60 ;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}

const userSignup = async (req, res) => {
    try {

        const { email, password, firstName } = req.body
        if (!email || !password || !firstName) return res.status(400).json({ success: false, message: "Enter all fields" });

        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).json({ success: false, message: "User already exists" });

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
            `<h1>Hi ${newUser.firstName},</h1><p>Welcome to Chat App! We're excited to have you on board. Start connecting with your friends and family today!</p><p>Best regards,<br/>The Chat App Team</p>`
        ).then(() => {
            console.log("Welcome email sent successfully");
        }).catch((err) => {
            console.error("Error sending welcome email:", err);
        });

        res.status(201).json({
            user: {
                email: newUser.email,
                firstName: newUser.firstName,
                userId: newUser._id,
                profileSetup: newUser.profileSetup
            },
            success: true,
            message: "User created successfully"
        });



    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}


const userLogin = async (req,res) => {
    try {
        
        const {email, password} = req.body

        if( !email || !password ){
            return res.status(400).json({
                success: false,
                message: "Enter the required field"
            })
        }

        const user = await userModel.findOne({email})

        if(!user) return res.status(400).json({
            success: false,
            message: "User does not exist"
        })

        const auth = await bcrypt.compare(password, user.password)
        if(!auth) return res.status(400).json({
            success: false,
            message: "Password is Incorrect"
        })

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
                profileSetup: user.profileSetup
            },
            success: true,
            message: "User Successfully Logged In"
        });


    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}
export { userSignup, userLogin }