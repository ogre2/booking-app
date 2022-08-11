const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true
    },
    hotelType: {
        type: String,
        required: true
    },
    hotelCity: {
        type: String,
        required: true
    },
    hotelAddress: {
        type: String,
        required: true
    },
    distanceToCityCenter: {
        type: String,
        required: true
    },
    hotelPhotos: {
        type: [String]
    },
    hotelDescription: {
        type: String,
        required: true
    },
    hotelRating: {
        type: Number,
        min: 0,
        max: 5
    },
    numberOfRooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Hotel', HotelSchema)