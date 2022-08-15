// Importing express router
const router = require('express').Router()
// Importing controller
const controller = require('../controllers/hotelController.js')

/**
 * @method GET
 * This is the root hotels endpoint, it will display all of the hotels 
 * that exist in the database hotels collection
 */
router.get('/', controller.getAllHotels)

/**
 * @method POST
 * This request will create a new hotel and save it to the 
 * database hotel collection
 */
router.post('/', controller.createHotel)

/**
 * @method GET
 * This request will find an existing hotel entry in the database with a 
 * specific/provided ID paramaeter
 */
router.get('/:id', controller.getSingleHotel)

/**
 * @method PUT
 * This request will update an existing hotel entry in the database with new information provided
*/
router.put('/:id', controller.editHotel)

/**
 * @method DELETE
 * This request will delete an existing hotel entry in the database using it's ID
 */
router.delete(':/id', controller.deleteHotel)

// Exporting router
module.exports = router