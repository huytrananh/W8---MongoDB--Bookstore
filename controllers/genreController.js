const Genre = require("../models/genre")

exports.createGenre = async(req, res, next) => {
    try{
        const newGenre = await Genre.create({...req.body})
        res.json({
            status: "success",
            data: newGenre
        })
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readGenre = async(req, res, next) => {
    try{
        const allGenre = await Genre.find({})
        res.json({
            status: "success",
            data: allGenre
        })
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.updateGenre = async(req, res, next) => {
    try{
        const genre = await Genre.findById(req.params.genreId) // check we have user id or not
        if(!genre){
            throw new Error("There is no genre")
        }
        const fields = Object.keys(req.body) //get the field from body
        fields.map(field => genre[field] = req.body[field])
        
        genre.save()

        res.json({
            status: "success",
            data: genre
        })
        next()
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.deleteGenre = async(req, res, next) => {
    try {
        await Genre.findByIdAndDelete(req.params.genreId);
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