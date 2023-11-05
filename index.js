// import lib
const ejs = require('ejs');
const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')
const flash = require("connect-flash")
const passport = require("passport")
const passportLocal = require('passport-local')
const bodyParser = require('body-parser')
const sequelize = require("sequelize");
const cookieParser = require('cookie-parser')


// connect to db
const db = require("./src/config/db")
// const publicDirectory = path.join(__dirname, './src/public')
// app.use(express.static(publicDirectory))
// console.log(__dirname)



const cfg = require('./src/config/index')
const route = require('./src/routes/index')
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}))

//parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(flash())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
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