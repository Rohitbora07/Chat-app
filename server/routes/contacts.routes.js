import { Router } from 'express';
import { searchContacts, getContactsForDMList } from "../controllers/contact.controller.js"
import userAuth from '../middlewares/auth.middleware.js';

const contactRouter = Router();

contactRouter.post("/search", userAuth, searchContacts)
contactRouter.get("/get-contacts-for-dm-list", userAuth, getContactsForDMList)

export default contactRouter;