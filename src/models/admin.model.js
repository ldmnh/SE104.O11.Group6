const db = require('../config/db/connect');

function adminModel() {}

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
        callback(getLastestBooking)
    })
}

adminModel.getLastestRating = function (callback) {
    const getLastestRating = "SELECT * FROM view_rating_admin ORDER BY rating_datetime DESC LIMIT 0,3"
    db.query(getLastestRating, (err, getLastestRating) => {
        if (err) {
            throw err
        }
        callback(getLastestRating)
    })
}

adminModel.getChartBooking = function (callback) {
    const getChartBooking = "SELECT MONTH(book_datetime), COUNT(*) AS 'count_book' FROM view_booking_admin GROUP BY MONTH(book_datetime) ORDER BY MONTH(book_datetime)"
    db.query(getChartBooking, (err, getChartBooking) => {
        if (err) {
            throw err
        }
        callback(getChartBooking)
    })
}

adminModel.getChartRating = function (callback) {
    const getChartRating = "SELECT MONTH(rating_datetime), COUNT(*) AS 'count_rating', AVG(rating_point) AS 'count_avg' FROM view_rating_admin GROUP BY MONTH(rating_datetime) ORDER BY MONTH(rating_datetime)"
    db.query(getChartRating, (err, getChartRating) => {
        if (err) {
            throw err
        }
        callback(getChartRating)
    })
}

module.exports = adminModel;