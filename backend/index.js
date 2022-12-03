require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express();
const cookieSession = require('cookie-session')
const CurrentUser = require('./middleware/currentUser')


app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    sameSite: 'strict',
    //2 hours
    maxAge: 1*60*60*1000
}))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }))
app.use(express.static(path.resolve(__dirname, '../frontend/build')));
app.use(bodyParser.json())
app.use(CurrentUser)

app.use('/api/categories', require('./api/categories'))
app.use('/api/recipes', require('./api/recipes'))
app.use('/api/users', require('./api/users'))


app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})


app.listen(process.env.PORT, () => {
    console.log(`\n** server is running on port ${process.env.PORT}`)
})