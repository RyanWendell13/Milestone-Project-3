const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {type: String, require: true},
    author: {type: Number, require: true},
    image: {type: String, require: true},
    ingredients: {type: [String], require: true},
    equipment: {type: [String], require: true},
    intructions: {type: [String], require: true}
        
})

module.exports = mongoose.model('Recipe', recipeSchema)