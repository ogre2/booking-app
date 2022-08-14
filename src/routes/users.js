const router = require('express').Router()

router.get('/', (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Users endpoint'
        })
    }
    catch(err) {
        next(err)
    }
})

module.exports = router