const db = require("../models")

const { User } = db;

async function currentUser(req, res, next) {
    try {
        console.log("session")
        console.log(req.session)
        console.log(req.session._id)
        let user = await User.findById(req.session._id)
        req.currentUser = user
        next()
    } catch {
        next()
    }
}

module.exports = currentUser