const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    title: {type: String}, 
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    image: {type: String}, 
    ingredients: [{type: String}], 
    equipment: [{type: String}], 
    instructions: [{type: String}], 
    description: {type: String}
})

module.exports = mongoose.model('Recipe', recipeSchema)