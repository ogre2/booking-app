const Hotel = require('../models/Hotel.js')
const HotelModel = require('../models/Hotel.js')
const router = require('express').Router()

/**
 * @method get
 * This is the root hotels endpoint, it will display all of the hotels 
 * that exist in the database hotels collection
 */
router.get('/', async (req, res, next) => {
    try {
        const allHotels = await Hotel.find()

        res.status(200).json({
            status: 200,
            message: 'Hotels endpoint',
            hotels: allHotels
        })
    }
    catch(err) {
        next(err)
    }
})

/**
 * @method post
 * This request will create a new hotel and save it to the 
 * database hotel collection
 */
router.post('/', async (req, res, next) => {
    const newHotel = new HotelModel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json({
            status: 200,
            message: `Hotel ${req.body.hotelName} has been created`,
            data: savedHotel
        })
    }
    catch(err) {
        next(err)
    }
})

/**
 * @method get
 * This request will find an existing hotel entry in the database with a 
 * specific/provided ID paramaeter
 */
router.get('/:id', async (req, res, next) => {
    const failed = true
    const err = new Error()

    err.status = 404
    err.message = "Sorry, hotel not found!"

    if(failed) return next(err)
    
    try {
        const findHotel = await Hotel.findById(req.params.id)

        res.status(200).json({
            status: 200,
            message: `Hotel with ID ${req.params.id} is found`,
            data: findHotel
        })
    }
    catch(err) {
        next(err)
    }
})

/**
 * @method put
 * This request will update an existing hotel record in the database
 * with new information provided by the user
 */
router.put('/:id', async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true }
        )
        
        res.status(200).json({
            status: 200,
            message: `Hotel with ID ${req.params.id} has been updated`,
            data: updatedHotel
        })
    }
    catch(err) {
        next(err)
    }
})

/**
 * @method delete
 * This request will delete an existing hotel record in the database
 */
 router.delete('/:id', async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        
        res.status(200).json({
            status: 200,
            message: `Hotel with ID ${req.params.id} has been deleted`
        })
    }
    catch(err) {
        next(err)
    }
})

module.exports = router