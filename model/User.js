import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    bio: String,
    story:Array,
    profile: String,
    posts: Number,
    postLink: Array,
    followings:Number,
    followers: Number,
});



const User = mongoose.model("User", UserSchema)

export default User