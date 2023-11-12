const db = require('../config/db/connect')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const accountHistory = function () { }

accountHistory.getDetail = function (req, res, callback) {
    const getBookingDetail = 'SELECT * FROM view_booking_history WHERE au_user_id = ?'
    const params = [req.session.userId]
    db.query(getBookingDetail, [params], function (err, bookingDetail) {
        bookingDetail.forEach(function (booking) {
            booking.book_datetime = booking.book_datetime.toDateString()
            booking.book_start_datetime = booking.book_start_datetime.toDateString()
            booking.book_end_datetime = booking.book_end_datetime.toDateString()
        })

        callback(err, bookingDetail)
    })
}

module.exports = accountHistory