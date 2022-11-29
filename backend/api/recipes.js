const router = require('express').Router()
const db = require("../models")
const recipes = require('../models/recipes')


router.get('/',(req, res) => {
    db.Recipe.find()
    .then((recipes) => {
        res.render('recipes/index', { recipes })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Recipe.create(req.body)
    .then(() => {
        res.redirect('/recipes')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('recipe/new')
})
router.get('/:id', (req, res) => {
    res.send('GET /recipe/:id stub')
})

router.put('/:id', (req, res) => {
    res.send('PUT /recipe/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /recipe/:id stub')
})



module.exports = router