require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Recipe = require('./recipes')
module.exports.User = require('./user')
module.exports.Category = require('./category')
