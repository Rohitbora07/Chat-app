import { getAllMessages } from "../controllers/messages.controller.js"
import { Router } from 'express';
import userAuth from "../middlewares/auth.middleware.js";

const messagesRouter = Router();

messagesRouter.post("/get-all-messages", userAuth, getAllMessages)

export default messagesRouter