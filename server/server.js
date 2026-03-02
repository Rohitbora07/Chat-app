import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;  

// Middleware
app.use(cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());


// Routes
app.use("/api/auth", userRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});