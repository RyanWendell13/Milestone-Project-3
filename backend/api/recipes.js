const router = require('express').Router()
const db = require("../models")


router.get('/',(req, res) => {
    res.send('GET /recipe stub')
})

router.post('/', (req, res) => {
    res.send('POST /recipe stub')
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