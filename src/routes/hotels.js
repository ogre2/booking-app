const mongoose = require('mongoose')
const HotelModel = require('../models/Hotel.js')
const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Hotels endpoint'
    })
})

router.post('/', async (req, res) => {
    const newHotel = new HotelModel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json({
            status: 200,
            message: `Hotel ${req.body.hotelName} created`
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