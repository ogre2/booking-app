// Importing express router
const router = require('express').Router()
// Importing controller
const controller = require('../controllers/roomController.js')

/**
 * @method GET
 * This method will return all users in the database
 */
router.get('/', controller.getAllRooms)

// Exporting router
module.exports = router