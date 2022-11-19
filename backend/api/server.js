const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const dataRouter = require('../routes/data')

const server = express()
server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.use('/api/v1/data',dataRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'This is api running',
        time: new Date().toLocaleTimeString(),
    })
})

module.exports = server
