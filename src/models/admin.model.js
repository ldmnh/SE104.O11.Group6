const db = require('../config/db/connect');
const bcrypt = require("bcryptjs");
const index = require('../models/index.model')

function adminModel() { }


adminModel.login = (req, callback) => {
    const { admin_login, admin_password } = req.body
    const adminLogin = 'SELECT * FROM admin WHERE admin_nickname = ?'
    db.query(adminLogin, [admin_login], async (err, admin) => {
        if (err) callback(1, 0, 0, 0)
        if (!admin[0]) {
            callback(0, 1, 0, 0)
        } else if (await bcrypt.compare(admin_password, admin[0].admin_pass)) {
            req.session.admin = {
                id: admin[0].admin_id,
                name: admin[0].admin_nickname,
            };
            callback(0, 0, 0, 1)
        } else {
            callback(0, 0, 1, 0)
        }
    })
}

adminModel.getTotalRoomType = function (callback) {
    const getTotalRoomType = "SELECT COUNT(*) AS 'count_room' FROM roomtype"
    db.query(getTotalRoomType, (err, getTotalRoomType) => {
        if (err) {
            throw err
        }
        callback(parseInt(getTotalRoomType[0].count_room))
    })
}

adminModel.getTotalBooking = function (callback) {
    const getTotalBooking = "SELECT COUNT(*) AS 'count_book' FROM booking"
    db.query(getTotalBooking, (err, getTotalBooking) => {
        if (err) {
            throw err
        }
        callback(parseInt(getTotalBooking[0].count_book))
    })
}

adminModel.getTotalRating = function (callback) {
    const getTotalRating = "SELECT COUNT(*) AS 'count_rating' FROM rating"
    db.query(getTotalRating, (err, getTotalRating) => {
        if (err) {
            throw err
        }
        callback(parseInt(getTotalRating[0].count_rating))
    })
}

adminModel.getLastestBooking = function (callback) {
    const getLastestBooking = "SELECT * FROM view_booking_admin ORDER BY book_datetime DESC LIMIT 0,3"
    db.query(getLastestBooking, (err, getLastestBooking) => {
        if (err) {
            throw err
        }
        getLastestBooking.forEach(function (book) {
            book.book_datetime_format = index.toDDMMYYYY(new Date(book.book_datetime))
            book.book_start_datetime_format = index.toDDMMYYYY(new Date(book.book_start_datetime))
            book.book_end_datetime_format = index.toDDMMYYYY(new Date(book.book_end_datetime))
        })
        callback(getLastestBooking)
    })
}

adminModel.getLastestRating = function (callback) {
    const getLastestRating = "SELECT * FROM view_rating_admin ORDER BY rating_datetime DESC LIMIT 0,3"
    db.query(getLastestRating, (err, getLastestRating) => {
        if (err) {
            throw err
        }
        getLastestRating.forEach(function (rating) {
            rating.rating_datetime_format = index.toDDMMYYYY(new Date(rating.rating_datetime))
        })

        callback(getLastestRating)
    })
}

adminModel.getChart = function (callback) {
    const getChart = "SELECT * FROM view_chart_dashboard ORDER BY month"
    db.query(getChart, (err, chart) => {
        if (err) {
            throw err
        }
        callback(chart)
    })
}

module.exports = adminModel;