import { Router } from 'express';
import { searchContacts } from "../controllers/contact.controller.js"
import userAuth from '../middlewares/auth.middleware.js';

const contactRouter = Router();

contactRouter.post("/search", userAuth, searchContacts)

export default contactRouter;