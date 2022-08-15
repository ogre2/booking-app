// Importing model
const User = require('../models/User')
// Importing bcrypt
const bcrypt = require('bcryptjs')
// Importing error handler
const errorHandler = require('../utils/error')

/**
 * This function will retrieve the root auth endpoint
 */
exports.rootAuth = (async (req, res, next) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Auth endpoint',
            endpoints: {
                'Sign up': '/api/auth/signup',
                'Sign in': '/api/auth/signin'
            }
        })
    }
    catch(err) {
        next(err)
    }
})

/**
 * This function will retrieve the auth endpoint for user sign up
 */
exports.authSignUp = (async (req, res, next) => {
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

exports.registerUser = (async (req, res, next) => {
    try {
        // Generating encryption
        let salt = bcrypt.genSaltSync(10)
        // Hashing the user password
        let hash = bcrypt.hashSync(req.body.password, salt)

        // Creating the new user object
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            emailAddress: req.body.emailAddress,
            password: hash
        })

        // Registering the user
        await newUser.save()

        // Destructuring user object
        const { password, isAdmin, ...userDetails } = newUser._doc

        // Display user details upon successful registration
        res.status(200).json({
            status: 200,
            message: 'New user created',
            data: userDetails
        })
    }
    catch(err) {
        next(err)
    }
})

/**
 * This function will retrieve the auth endpoint for user sign in
 */
exports.signInUser = (async (req, res, next) => {
    try {
        // Finding the user
        const user = await User.findOne({
            userName: req.body.userName
        })

        // Checking if the user exists
        if(!user) return next(errorHandler.createError(404, 'User not found!'))

        // Comparing provided password and password on database
        const passwordChecker = await bcrypt.compare(req.body.password, user.password)

        // Checking if the passwords match
        if(!passwordChecker) return next(errorHandler.createError(401, 'Password does not match'))

        // Destructuring return user data
        const { password, isAdmin, ...userInfo } = user._doc

        // Display user on successful sign in
        res.status(200).json({
            status: 200,
            userInfo
        })
    }
    catch(err) {
        next(err)
    }
})