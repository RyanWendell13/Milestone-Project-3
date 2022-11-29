const router = require('express').Router()
const db = require("../models")

router.get('/new', (req, res) => {
    res.render('recipe/new')
})

router.get('/:id', (req, res) => {
    db.Recipe.findOne({ _id: req.params.id })
    .populate('recipes')
    .then(recipe => {
        res.render('recipes/show', { recipe })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.delete('/:id', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect(`/recipes`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})



module.exports = router