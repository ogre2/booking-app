const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('path')

dotenv.config({ path: path.join(__dirname, './.env') })
colors.enable()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DBURI)
        console.log(`[server] connected to MongoDB`.blue)
    }
    catch(error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log(`[server] disconnected to MongoDB`.yellow)
})

module.exports = {
    'PORT': process.env.PORT || 5000,
    colors,
    dbConnect
}