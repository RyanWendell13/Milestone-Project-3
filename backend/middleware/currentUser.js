const db = require("../models")

const { User } = db;

async function currentUser(req, res, next) {
    try {
        let user = await User.findById(req.session._id)
        req.currentUser = user
        next()
    } catch {
        next()
    }
}
module.exports = currentUser