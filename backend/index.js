require('dotenv').config()
const mongoose = require("mongoose");
const db = require('./models')
const express = require('express')
//const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express();
//const cookieSession = require('cookie-session')
const connectDB = require('./config/db')
const currentUser = require('./middleware/currentUser')

connectDB()



app.use('/recipes', require('./api/recipes'))
app.use(currentUser)


app.get('/',(req, res) =>{
    res.send('Helllo world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// async function connect() {
//     try {
//         await mongoose.connect();
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error(error)
//     }
// }

// connect()

app.listen(process.env.PORT, () => {
    console.log(`\n** server is running on port ${process.env.PORT}`)
})