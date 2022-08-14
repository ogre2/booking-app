const router = require('express').Router()

router.get('/', (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Auth endpoint'
        })
    }
    catch(err) {
        next(err)
    }
})

router.get('/signup', (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Signup endpoint'
        })
    }
    catch(err) {
        next(err)
    }
})

router.get('/signin', (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Signin endpoint'
        })
    }
    catch(err) {
        next(err)
    }
})

module.exports = router