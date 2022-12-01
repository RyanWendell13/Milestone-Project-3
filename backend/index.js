require('dotenv').config()
const express = require('express')
//const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express();
//const cookieSession = require('cookie-session')
const connectDB = require('./config/db')
const Category = require(' ../backend/models/categoryModel')
const Recipe = require('../backend/models/recipeModel')
const User = require('../backend/models/userModel')
connectDB()



app.use('/recipes', require('./api/recipes'))


app.get('/',(req, res) =>{
    res.send('Helllo world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error)
    }
}

connect()

app.listen(process.env.PORT, () => {
    console.log(`\n** server is running on port ${process.env.PORT}`)
})