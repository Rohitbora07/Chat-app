import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userAuth = async (req,res, next) => {
    try {

        const token = req.cookies.token;
        if(!token) return res.status(401).json({success: false, message: "Unauthorized - No token provided"});
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.userId).select("-password");

        if(!user) return res.status(401).json({success: false, message: "Unauthorized - User not found"});

        req.user = user;
        next();

    } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export default userAuth;