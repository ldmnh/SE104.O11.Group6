// import lib
const ejs = require('ejs');
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

// connect to db
const db = require('./src/config/db/connect');

const app = express()
const cfg = require('./src/config/index')
const route = require('./src/routes/index')

// set view engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// use static folder
app.use(express.static(path.join('src', 'public')))

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/api", require("./src/middleware/authMiddleware"))

// route init
route(app)

app.listen(cfg.port, () => {
    console.log(`Website is running at http://${cfg.host}:${cfg.port}`)
})