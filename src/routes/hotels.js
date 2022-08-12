const Hotel = require('../models/Hotel.js')
const HotelModel = require('../models/Hotel.js')
const router = require('express').Router()

/**
 * @method get
 * This is the root hotels endpoint, it will display all of the hotels 
 * that exist in the database hotels collection
 */
router.get('/', async (req, res) => {
    const allHotels = await Hotel.find()

    res.status(200).json({
        status: 200,
        message: 'Hotels endpoint',
        hotels: allHotels
    })
})

/**
 * @method post
 * This request will create a new hotel and save it to the 
 * database hotel collection
 */
router.post('/', async (req, res) => {
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
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

/**
 * @method get
 * This request will find an existing hotel entry in the database with a 
 * specific/provided ID paramaeter
 */
router.get('/:id', async (req, res) => {
    try {
        const findHotel = await Hotel.findById(req.params.id)

        if(findHotel) {
            res.status(200).json({
                status: 200,
                message: `Hotel with ID ${req.params.id} is found`,
                data: findHotel
            })
        }
        else {
            res.status(404).json({
                status: 404,
                message: `Hotel with ID ${req.params.id} does not exist`
            })
        }
    }
    catch(err) {
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

/**
 * @method put
 * This request will update an existing hotel record in the database
 * with new information provided by the user
 */
router.put('/:id', async (req, res) => {
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
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

/**
 * @method delete
 * This request will delete an existing hotel record in the database
 */
 router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        
        res.status(200).json({
            status: 200,
            message: `Hotel with ID ${req.params.id} has been deleted`
        })
    }
    catch(err) {
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

module.exports = router