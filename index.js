// import lib
const ejs = require('ejs')
const path = require('path')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

// run express
const app = express()

// import config
const cfg = require('./src/config/index')

// import routes
const route = require('./src/routes/index')

// use session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
}))

// use cors
app.use(cors({
    origin: `http://${cfg.host}:${cfg.port}`,
}))

// set view engine
app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// use static folder
app.use(express.static(path.join('src', 'public',)))

// parse URL-encoded bodies
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

// use route
route(app)

app.listen(cfg.port, () => {
    console.log(`Website is running at http://${cfg.host}:${cfg.port}`)
})