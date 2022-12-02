const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

router.post('/new', async(req, res)=>{
    console.log(req.body)
    const user = await db.User.create({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password,10)
    })
    res.json(user)
})


router.post('/authenication', async (req, res) => {
    let user = await db.User.findOne({username: req.body.username})
    if(!user || !await bcrypt.compare(req.body.password, user.password)){
        
        res.json({
            message: 'wrong user info'
        })
    }
    else{
        req.session._id = user._id
        res.json(user)
    }
})

router.get('/profile', async(req, res) => {
    res.json(req.currentUser)
})

module.exports = router