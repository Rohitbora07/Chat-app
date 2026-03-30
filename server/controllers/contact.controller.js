import userModel from "../models/user.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";
const searchContacts = async(req, res) => {
    try {

        const { searchTerm } = req.body
        if( searchTerm === undefined || searchTerm === null ){
            return res.status(400).json({ success: false, message: "Search term is required" });
        }

        const sanitizedSearchTerm = searchTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

        const regex = new RegExp(sanitizedSearchTerm, 'i');

        const contacts = await userModel.find({
            $and: [{ _id: { $ne: req.user._id } },],
            $or: [
                { firstName: regex },
                { lastName: regex },
                { userName: regex },
                { email: regex }
            ]
        }).select('firstName lastName userName email profilePicture');

        return res.status(200).json({ success: true, contacts });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message });
    }
};

const getContactsForDMList = async (req, res) => {
    try{
        const userId = new mongoose.Types.ObjectId(req.user.id)
        
        const contacts = await Message.aggregate([
            {
                $match: {
                    $or: [
                        { sender: userId },
                        { receiver: userId }
                    ]
                },
            },
            {
                $sort: { timestamp: -1 }
            },
            {
                $group: {
                    _id: {
                        $cond:{
                            if: { $eq: ["$sender", userId] },
                            then: "$receiver",
                            else: "$sender"
                        },
                    },
                    lastMessageTime : { $first: "$timestamp" }
                },
            },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "contactInfo"
                },
            },
            {
                $unwind: "$contactInfo"
            },
            {
                $project: {
                    _id: 1,
                    lastMessageTime: 1,
                    email: "$contactInfo.email",
                    firstName: "$contactInfo.firstName",
                    lastName: "$contactInfo.lastName",
                    userName: "$contactInfo.userName",
                    profileImage: "$contactInfo.profileImage"
                },
            },
            {
                $sort: { lastMessageTime: -1 }
            }
        ])
        return res.status(200).json({ success: true, contacts })
    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, message: err.message });
    }
}

export {searchContacts, getContactsForDMList}