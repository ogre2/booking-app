// Importing model
const Hotel = require('../models/Hotel.js')

/**
 * This function will retrieve all of the hotels in the database and render them
 */
exports.getAllHotels = (async (req, res, next) => {
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
 * This function will create a brand new hotel entry into the database from
 * the given passed parameter information (name, location, address, etc.)
 */
exports.createHotel = (async (req, res, next) => {
    const newHotel = new Hotel(req.body)

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
 * This function will find and retrieve a single hotel entry from the database
 * only if it exists, otherwise it will return a 404 error
 */
exports.getSingleHotel = (async (req, res, next) => {    
    try {
        const findHotel = await Hotel.findById(req.params.id)

        if(!findHotel) {
            res.status(404).json({
                status: 404,
                message: 'Hotel not found!',
                data: null
            })
        }
        else {
            res.status(200).json({
                status: 200,
                message: `Hotel with ID ${req.params.id} is found`,
                data: findHotel
            })
        }
    }
    catch(err) {
        next(err)
    }
})

/**
 * This function will edit an existing hotel entry with new given information
 */
exports.editHotel = (async (req, res, next) => {
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
 * This function will delete an existing hotel record in the database
 */
 exports.deleteHotel = (async (req, res, next) => {
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