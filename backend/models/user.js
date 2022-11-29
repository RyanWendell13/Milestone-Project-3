import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    recipes: [{type: mongoose.Schema.Type.RecipeId, ref: 'Recipe'}]
})

module.exports = mongoose.model('User', userSchema)