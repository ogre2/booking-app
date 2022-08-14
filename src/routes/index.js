const router = require('express').Router()

router.get('/', (req, res) => {
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
})

module.exports = router