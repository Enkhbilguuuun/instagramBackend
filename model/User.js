import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true, "zaavl baih ystoi"],
    },
    password:{
        type:String,
        required:[true],

    },
});


//   UserSchema.path('email').validate(function (email) {
//     var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return emailRegex.test(email.text); // Assuming email has a text attribute
//  }, 'hudal email')

const User = mongoose.model("User", UserSchema)

export default User