const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String
    }
}, {
    password: {
        type: String
    }
}, {
    recipes: [{type: mongoose.Schema.Types.ObjectId, ref: "Recipe"}]
})

module.exports = mongoose.model('User', userSchema)

/// Go to controller and 
/// const User = require('../models/userModel')