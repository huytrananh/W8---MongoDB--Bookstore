const mongoose = require("mongoose")

const authorSchema = mongoose.Schema({
    author: {
        type: String,
        required: [true, 'Author is required !!!'],
    },
    // email: {
    //     type: String,
    //     required: [true, "Email is required !!!"],
    //     trim: true
    // },
    // password:{
    //     type: String,
    //     required: [true, "Password is required !!!"],
    //     trim: true,
    // },
    // gender: {
    //     type: String,
    //     trim: true
    // }
},{
    // timestamps: true,
})

// userSchema.pre("save", async function (next){
//     if(!this.isModified("password")) return next()
//     throw new Error("You cannot change the password !")
// })

const Author = mongoose.model("Author", authorSchema) // name of our model

module.exports = Author