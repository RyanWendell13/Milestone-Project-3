require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    // mongodb: process.env.DBROUTE,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Recipe = require('./recipeModel')
module.exports.User = require('./userModel')
module.exports.Category = require('./categoryModel')

