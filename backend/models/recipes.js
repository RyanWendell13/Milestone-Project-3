const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    id: Number
})

module.exports = mongoose.model('Recipe', recipeSchema)