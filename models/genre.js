const mongoose = require("mongoose")

const genreSchema = mongoose.Schema({
    genres : {
        type: String,
        required: [true, 'Genre is required !!!'],
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

const Genre = mongoose.model("Genre", genreSchema) // name of our model

module.exports = Genre