const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    title: {
        type: String
    }
}, {
    author: [{type: mongoose.Schema.Types.ObjectId, ref: "Author"}]
},{
    image: {
        type: String
    }
} , {
    ingredients: [{
        type: String
    }]
} , {
    equipment: [{
        type: String
    }]
} , {
    instructions: [{
        type: String
    }]
}
)

/// Go to controller and 
/// const User = require('../models/recipeModel')