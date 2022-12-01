const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

router.post('/', async(req, res)=>{
    let { password, ...rest } = req.body;
    const user = await db.User.create({
        email: req.body.email,
        passwordDigest: await bcrypt.hash(password,10)
    })
    res.json(user)
})


router.post('/authenication', async (req, res) => {
    let user = await db.User.findOne({email: req.body.email})
    if(!user || !await bcrypt.compare(req.body.password, user.password)){
        res.status(404).json({
            message: 'wrong user info'
        })
    }
    else{
        req.session._id = user._id
        res.json({user})
    }
})

router.get('/profile', async(req, res) => {
    res.json(req.currentUser)
})

module.exports = router