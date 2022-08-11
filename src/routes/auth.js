const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Auth endpoint'
    })
})

router.get('/signup', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Signup endpoint'
    })
})

router.get('/signin', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Signin endpoint'
    })
})

module.exports = router