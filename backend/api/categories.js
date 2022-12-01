const router = require('express').Router()
const db = require("../models")

router.get('/', (req,res) => {
    db.Category.find()
    .then(r => {
        res.json(r)
    })
})


module.exports = router