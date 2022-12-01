const router = require('express').Router()
const db = require("../models")


router.get('/:id', (req, res) => {
    db.Recipe.find(req.params.id)
    .populate('recipes')
    .then(recipe => {
        res.json(recipe)
    })
    .catch(err => {
        console.log('err', err)
        res.redirect("/error404")
    })
})

router.delete('/:id', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/')
    })
    .catch(err => {
        console.log('err', err)
        // res.render('error404')
    })
})

router.post("/new", (req, res) => {
    db.User.findOne({username: req.body.username})
    .then(u => {
        db.Recipe.create({
            title: req.body.title,
            author: u._id,
            image: req.body.image,
            ingredients: req.body.ingredients,
            equipment: req.body.equipment,
            instructions: req.body.instructions,
            description: req.body.description
        })
        .then(res.redirect("/"))
    })  
})


module.exports = router