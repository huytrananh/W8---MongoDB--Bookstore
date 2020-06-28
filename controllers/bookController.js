const Book = require("../models/book")

exports.createBook = async(req, res, next) => {
    try{
        const newBook = await Book.create({...req.body})
        res.status(201).json({
            status: "success",
            data: newBook
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readBook = async(req, res, next) => {
    try{
        const allBook = await Book.find({})
        res.json({
            status: "success",
            data: allBook
        })
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.updateBook = async(req, res, next) => {
    try{
        const book = await Book.findById(req.params.bookId) // check we have user id or not
        if(!book){
            throw new Error("There is no book")
        }
        const fields = Object.keys(req.body) //get the field from body
        fields.map(field => book[field] = req.body[field])
        
        await book.save() // why we should have await

        res.json({
            status: "success",
            data: book
        })
        next()
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.deleteBook = async(req, res, next) => {
    try {
        await Book.findByIdAndDelete(req.params.bookId);
        res.status(204).json({
          status: "success",
          data: null
        })
    }catch (err) {
        res.status(404).json({
          status: "fail",
          message: err.message
        })
    }
}