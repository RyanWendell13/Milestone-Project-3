const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    title: {type: String, requrie: true},
    recipes: {type: [Number], require: flase}
        
})

module.exports = mongoose.model('Category', recipeSchema)