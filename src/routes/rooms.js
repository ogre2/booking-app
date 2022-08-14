const router = require('express').Router()

router.get('/', (req, res, next) => {
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

module.exports = router