const express = require('express')
const http = require('http')
const cors = require('cors')
const helmet = require('helmet')
const config = require('./config')
const app = express()
const server = http.createServer(app)

const indexRouter = require('./routes/index.js')
const authRouter = require('./routes/auth.js')
const usersRouter = require('./routes/users.js')
const roomsRouter = require('./routes/rooms.js')
const hotelsRouter = require('./routes/hotels.js')

config.colors.enable()

app.set('case sensitive routing', true)
app.set('json spaces', 2)

app.use(express.json({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/', indexRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/rooms', roomsRouter)
app.use('/api/hotels', hotelsRouter)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Something went wrong!'

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage
    })
})

server.listen(process.env.PORT, () => {
    config.dbConnect()
    console.log(`[server] running on port: ${process.env.PORT}`.white)
})