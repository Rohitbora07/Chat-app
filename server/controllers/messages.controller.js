import Message from "../models/message.model.js";

export const getAllMessages = async (req, res) => {
    try{
        const user1 = req.user._id || req.user.id || req.userId
        const user2 = req.body.id
        if( !user1 || !user2 ){
            return res.status(400).json({ success: false, message: "Both user IDs are required" });
        }
        const messages = await Message.find({
            $or: [
                { sender: user1, receiver: user2 },
                { sender: user2, receiver: user1 }
            ]
        }).sort({ timestamp: 1 })
        return res.status(200).json(messages)
    }catch(err){
        console.log(err)
        return res.status(500).json({ success: false, message: err.message })
    }
}