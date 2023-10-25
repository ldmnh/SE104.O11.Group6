// import lib
const ejs = require('ejs');
const path = require('path')
const express = require('express')
const mysql = require("mysql")
const dotenv = require('dotenv')
const session = require('express-session')

dotenv.config({ path: './.env' })

// connect to db

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

// const publicDirectory = path.join(__dirname, './src/public')
// app.use(express.static(publicDirectory))
// console.log(__dirname)



const { error } = require('console');
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
}
)

const app = express()
const cfg = require('./src/config/index')
const route = require('./src/routes')
//parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
//parse json bodies
app.use(express.json())


// set view engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//app.use('/', require('./routes/index'))


// use static folder
app.use(express.static(path.join('src', 'public')))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}))

// route init
route(app)

app.listen(cfg.port, () => {
    console.log(`Website is running at http://${cfg.host}:${cfg.port}`)
})