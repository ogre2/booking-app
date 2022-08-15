// Importing express router
const router = require('express').Router()
// Importing controller
const controller = require('../controllers/authController')

/**
 * @method GET
 * This method will get the root user authentication endpoint
 */
router.get('/', controller.rootAuth)

/**
 * @method GET
 * This method will get the user sign up endpoint
 */
router.get('/signup', controller.authSignUp)

/**
 * @method POST
 * This method will register a new user to the database
 */
router.post('/signup', controller.registerUser)

/**
 * @method POST
 * This method will sign in an existing user
 */
router.post('/signin', controller.signInUser)

// Exporting router
module.exports = router