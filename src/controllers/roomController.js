// Importing model
// const User = require('../models/User.js')

/**
 * This function will retrieve all of the hotels in the database and render them
 */
exports.getAllRooms = (async (req, res, next) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Rooms endpoint'
        })
    }
    catch(err) {
        next(err)
    }
})
