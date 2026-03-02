import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
    },
    userName:{
        type: String
    },
    profileImage:{
        type: String,
    },
    profileSetup:{
        type: Boolean,
        default: false
    },
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model("User", userSchema);