const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /recipes')
})

module.exports = router