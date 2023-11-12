// import lib
const ejs = require('ejs');
const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const cfg = require('./src/config/index')
const route = require('./src/routes/index')
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
}))

//parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('secret'))

// set view engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//app.use('/', require('./routes/index'))


// use static folder
app.use(express.static(path.join('src', 'public')))

// route init
route(app)

app.listen(cfg.port, () => {
    console.log(`Website is running at http://${cfg.host}:${cfg.port}`)
})