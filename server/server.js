import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/auth.route.js";
import connectCloudinary from "./config/cloudinary.js";
import contactRouter from "./routes/contacts.routes.js";
import setUpSocket from "./socket.js";
import messagesRouter from "./routes/messages.routes.js";

dotenv.config();
const app = express();
connectCloudinary();

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
app.use("/api/contacts", contactRouter);
app.use("/api/messages", messagesRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

setUpSocket(server)