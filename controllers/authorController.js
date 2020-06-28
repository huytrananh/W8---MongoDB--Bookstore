const Author = require("../models/author")

exports.createAuthor = async(req, res, next) => {
    try{
        const newAuthor = await Author.create({ name: req.body.name })
        res.status(201).json({
            status: "success",
            data: {newAuthor}
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readAuthor = async(req, res, next) => {
    try{
        const allAuthor = await Author.find({})
        res.json({
            status: "success",
            data: allAuthor
        })
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.updateAuthor = async(req, res, next) => {
    try{
        const author = await Author.findByIdAndUpdate(
          req.params.authorId, 
          { name: req.body.name }, 
          { new: true }
        )
        res.status(200).json({
          status: "success",
          data: { author }
        })
      }catch (err) {
        res.status(400).json({
          status: "fail",
          message: err.message
        })
      }

    // try{
    //     const author = await Author.findById(req.params.authorId) // check we have user id or not
    //     if(!author){
    //         throw new Error("There is no user")
    //     }
    //     const fields = Object.keys(req.body) //get the field from body
    //     fields.map(field => user[field] = req.body[field])
        
    //     author.save()

    //     res.json({
    //         status: "success",
    //         data: author
    //     })
    //     next()
    // }catch(err){
    //     res.json({
    //         status: "fail",
    //         message: err.message
    //     })
    // }
}

exports.deleteAuthor = async(req, res, next) => {
    // try {
    //     await Author.findByIdAndDelete(req.params.authorId);
    //     res.status(204).json({
    //       status: "success",
    //       data: null
    //     })
    // }catch (err) {
    //     res.status(404).json({
    //       status: "fail",
    //       message: err.message
    //     })
    // }

    try{
        await Author.findByIdAndDelete(req.params.authorId);
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