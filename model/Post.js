import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    username: String,
    context: String,
    date: String,
    pictures: Array,
    profile: String,
    comments: Number,
    likes: Number,
    picContext:String,
});



const Post = mongoose.model("Post", PostSchema)

export default Post