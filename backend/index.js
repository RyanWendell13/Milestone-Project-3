require('dotenv').config()
require('colors')
const server = require('./api/server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`\n** server is running on port ${PORT}`.cyan))