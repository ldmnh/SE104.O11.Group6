const mysql = require("mysql")
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})
const { error } = require('console');

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
}
)

module.exports = db