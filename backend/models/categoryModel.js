const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    title: {
        type: String
    }
}, {
    recipes: [{type: mongoose.Schema.Types.ObjectId, ref: "Recipe"}]
}
)

module.exports = mongoose.model('Category', categorySchema)

/// Go to controller and 
/// const Category = require('../models/categoryModel')