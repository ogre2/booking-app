const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Hotels endpoint'
    })
})

module.exports = router