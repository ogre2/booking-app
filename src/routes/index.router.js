// Importing express router
const router = require('express').Router()
// Importing controller 
const controller = require('../controllers/indexController')

/**
 * @method GET
 * This method will get the index app endpoint
 */
router.get('/', controller.getIndex)

// Exporting router
module.exports = router