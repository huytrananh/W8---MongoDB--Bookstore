const mongoose = require("mongoose")
const Author = require("./author")
const Genre = require("./genre")

// const bookSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Name is required !!!'],
//     },
//     genres: {
//         type: String,
//         required: [true, "Genres is required !!!"],
//     },
//     price: Number,
//     author: String
// },{
//     // timestamps: true,
// })

// // userSchema.pre("save", async function (next){
// //     if(!this.isModified("password")) return next()
// //     throw new Error("You cannot change the password !")
// // })

// const Book = mongoose.model("Book", bookSchema) // name of our model

// module.exports = Book

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Book must have a title"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Book must have a description"],
    trim: true
  },
  author: Object,
  genres: Array
})

bookSchema.pre("save", async function (next) {
    this.author = await Author.findById(this.author)
    const promises = this.genres.map(async id => await Genre.findById(id));
    this.genres = await Promise.all(promises);
    next()
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book