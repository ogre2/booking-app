/**
 * This function will return the index API endpoint
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getIndex = (req, res, next) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Index endpoint',
            allEndPoints: {
                'Auth': '/api/auth',
                'Rooms': '/api/rooms',
                'hotels': '/api/hotels',
                'users': '/api/users'
            }
        })
    }
    catch(err) {
        next(err)
    }
}