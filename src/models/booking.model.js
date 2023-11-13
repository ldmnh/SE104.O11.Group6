const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const bookingModel = function () {};

bookingModel.getDetail = function (req, res, callback) {
    const getBooking = 'SELECT * FROM view_booking_history WHERE book_id = ? AND au_user_id = ?'
    const getBookingDetails = 'SELECT * FROM view_booking_detail WHERE book_id = ?'

    const params = [req.params.detail]
    const params2 = [req.session.userId]

    db.query(getBooking, [params, params2], (err, booking) => {
        if (err) {
            res.status(500).json({
                message: 'Lỗi truy vấn getBooking',
            });
            throw err;
        }

        db.query(getBookingDetails, params, (err, bookingDetails) =>{
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn getBooking',
                });
                throw err;
            }

            callback(err, booking, bookingDetails)
        })
    })
}

module.exports = bookingModel;