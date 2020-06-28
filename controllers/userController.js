const User = require("../models/user")

exports.createUser = async(req, res, next) => {
    try{
        const newUser = await User.create({...req.body})
        res.json({
            status: "success",
            data: newUser
        })
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readUser = async(req, res, next) => {
    try{
        const allUser = await User.find({})
        res.json({
            status: "success",
            data: allUser
        })
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.updateUser = async(req, res, next) => {
    try{
        const user = await User.findById(req.params.userId) // check we have user id or not

        if(!user){
            throw new Error("There is no user")
        }
        const fields = Object.keys(req.body) //get the field from body
        fields.map(field => user[field] = req.body[field])
        
        user.save()

        res.json({
            status: "success",
            data: user
        })
        next()
    }catch(err){
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.deleteUser = async(req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
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