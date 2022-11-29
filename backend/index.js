require('dotenv').config()
const express = require('express')
//const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express();
//const cookieSession = require('cookie-session')
const connectDB = require('./config/db')
const Category = require('../models/categoryModel')
const Recipe = require('../models/recipeModel')
const User = require('../models/userModel')
connectDB()

const uri = "mongodb+srv://Cameron123:Cameron123@recipecluster.bluem2k.mongodb.net/RecipeApp"

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