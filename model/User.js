import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true],
        minlength:[2, "tiim ner gej haa bsi"],
        maxlength:[20, "arail urt bishu"],
    },
    email:{
        type:String,
        required:[true, "zaavl baih ystoi"],
    },
    password:{
        type:String,
        required:[true],

    },
    bio: {
        type:String,
    },
    story:{
        type:Array,
    },
    profile:{
        type:String,
        required:[true]
    },
    posts:{
        type:Array
    },
    postLink: {
        type:Array,
        required:[true],
    },
    followings:{
        type:Number
    },
    followers:{
        type:Number
    }
});


UserSchema.path("username").validate((firstName) => {
    return !/[0-9]/.test(username);
  }, "ner dotor too yvj bnaa");

  UserSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text); // Assuming email has a text attribute
 }, 'hudal email')

const User = mongoose.model("User", UserSchema)

export default User