const db = require("../models")

const { User } = db;

async function currentUser(req, res, next) {
    try {
        let user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        })
        req.currentUser = user
        next()
    } catch {
        next()
    }
}

module.exports = currentUser