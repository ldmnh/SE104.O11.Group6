// import lib
const ejs = require('ejs');
const path = require('path')
const express = require('express')
const mysql = require("mysql")
const dotenv = require('dotenv')
const route = require('./src/routes')
const session = require('express-session')

dotenv.config({ path: './.env' })

// connect to db
const app = express()
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

// const publicDirectory = path.join(__dirname, './src/public')
// app.use(express.static(publicDirectory))
// console.log(__dirname)

//parse URL-encoded bodies
app.use(express.urlencoded({ extend: true }))
//parse json bodies
app.use(express.json())

const { error } = require('console');
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
}
)
const cfg = require('./src/config/index')

// set view engine
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));
app.set('view engine', 'ejs');

//app.use('/', require('./routes/index'))


// use static folder
app.use(express.static(path.join('src', 'public')))
app.use(express.static(path.join(__dirname, '')))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:true,
}))

// route init
route(app)

app.listen(cfg.port, () => {
    console.log(`Website is running at http://${cfg.host}:${cfg.port}`)
})