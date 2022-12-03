const router = require('express').Router()
const db = require("../models")

router.get('/:id', (req, res) => {
    db.Recipe.findById(req.params.id)
    .then(async recipe => {
        let user = await db.User.findById(recipe.author)
        let temp = {title: recipe.title, author: user.username, description: recipe.description, image: recipe.image, ingredients: recipe.ingredients, equipment: recipe.equipment, instructions: recipe.instructions}
        res.json(temp)
    })
    .catch(err => {
        console.log('err', err)
        res.redirect("/error404")
    })
})

router.post('/:id/delete', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json(req.params.id)
    })
    .catch(err => {
        console.log('err', err)
    })
})

router.post("/new", async (req, res) => {
    let categories = await db.Category.find({title: {$in: req.body.categories}})
    categories = categories.map(c => {
        return c._id;
    })
    
    db.User.findOne({username: req.currentUser.username})
    .then(u => {
        db.Recipe.create({
            title: req.body.title,
            author: u._id,
            image: req.body.image,
            categories: categories,
            ingredients: req.body.ingredients,
            equipment: req.body.equipment,
            instructions: req.body.instructions,
            description: req.body.description
        })
        .then(r => {
            res.redirect("/")
        })
    })
})


module.exports = router