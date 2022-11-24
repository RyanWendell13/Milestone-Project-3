require('dotenv').config()
const express = require('express')
//const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express();
//const cookieSession = require('cookie-session')

app.use('/recipes', require('./api/recipes'))


app.get('/',(req, res) =>{
    res.send('Helllo world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`\n** server is running on port ${process.env.PORT}`)
})