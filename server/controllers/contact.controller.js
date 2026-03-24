import userModel from "../models/user.model.js";

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

export {searchContacts}