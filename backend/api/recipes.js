const router = require('express').Router()
const db = require("../models")


router.get('/:id', (req, res) => {
    db.Recipe.findById(req.params.id)
    .populate("author")
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
        res.redirect("/")
    })
    .catch(err => {
        console.log('err', err)
        // res.render('error404')
    })
})

router.post("/new", async (req, res) => {
    console.log(req.currentUser)
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
    })
    
})


module.exports = router