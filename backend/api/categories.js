const router = require('express').Router()
const db = require("../models")

router.get('/', (req,res) => {
    db.Category.find()
    .then(r => {
        Promise.all(r.map(async c => {
            let recipes = await db.Recipe.find({categories: c._id})
            return{
                title: c.title,
                recipes: recipes
            }
        })).then(categories => {
            res.json(categories)
        })
        
    })
})


module.exports = router