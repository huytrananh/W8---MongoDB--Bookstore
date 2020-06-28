const bodyParser = require('body-parser')
// ... 
require("dotenv").config({ path: ".env" });
const mongoose=require("mongoose")
const express = require("express")
const app = express()
const router = express.Router()
const {createUser, readUser, updateUser, deleteUser} = require("./controllers/userController");
const { readBook, createBook, updateBook, deleteBook } = require('./controllers/bookController');
const { readAuthor, createAuthor, updateAuthor, deleteAuthor } = require('./controllers/authorController');
const { createGenre, readGenre, updateGenre, deleteGenre } = require('./controllers/genreController');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use router
app.use(router)

// User
router.route("/user").get(readUser)
router.route("/user").post(createUser)
router.route("/user/:userId").put(updateUser)
router.route("/user/:userId").delete(deleteUser)

// Genre
router.route("/genre").get(readGenre)
router.route("/genre").post(createGenre)
router.route("/genre/:genreId").put(updateGenre)
router.route("/genre/:genreId").delete(deleteGenre)

// Book
router.route("/book").get(readBook)
router.route("/book").post(createBook)
router.route("/book/:bookId").put(updateBook)
router.route("/book/:bookId").delete(deleteBook)

// Author
router.route("/author").get(readAuthor)
router.route("/author").post(createAuthor)
router.route("/author/:authorId").put(updateAuthor)
router.route("/author/:authorId").delete(deleteAuthor)

// 
mongoose.connect(process.env.DB_LOCAL, { 
    // some options to deal with deprecated warning, you don't have to worry about them.
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true 
    }
).then(()=> console.log("connected to database"))

app.listen(process.env.PORT, () => {
    console.log("Server running on: " + process.env.PORT)
})