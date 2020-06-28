const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required !!!'],
    },
    email: {
        type: String,
        required: [true, "Email is required !!!"],
        trim: true
    },
    password:{
        type: String,
        required: [true, "Password is required !!!"],
        trim: true,
    },
    gender: {
        type: String,
        trim: true
    }
},{
    // timestamps: true,
})

// userSchema.pre("save", async function (next){
//     if(!this.isModified("password")) return next()
//     throw new Error("You cannot change the password !")
// })

const User = mongoose.model("User", userSchema) // name of our model

module.exports = User