const db = require('../config/db/connect')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const accountHistory = function () { }

accountHistory.getDetail = function ({ id }, callback) {
    const getBookingDetail = `
        SELECT *
        FROM view_booking_history
        WHERE au_user_id = ${id}`;

    db.query(getBookingDetail, (err, bookingDetails) => {
        bookingDetails?.forEach((booking) => {
            booking.book_datetime = booking.book_datetime.getDate() + '/' + booking.book_datetime.getMonth() + '/' + booking.book_datetime.getYear()
            booking.book_start_datetime = booking.book_start_datetime.getDate() + '/' + booking.book_start_datetime.getMonth() + '/' + booking.book_start_datetime.getYear()
            booking.book_end_datetime = booking.book_end_datetime.getDate() + '/' + booking.book_end_datetime.getMonth() + '/' + booking.book_end_datetime.getYear()

            booking.book_cost_after_currency = booking.book_cost_after.toFixed(0).replace(/./g, function (c, i, a) {
                return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
            });
            booking.book_cost_before_currency = booking.book_cost_before.toFixed(0).replace(/./g, function (c, i, a) {
                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
            });

            switch (booking.book_status) {
                case -1:
                    booking.book_status_msg = 'Đã hủy'
                    break

                case 0:
                    booking.book_status_msg = 'Chưa sử dụng'
                    break

                case 1:
                    booking.book_status_msg = 'Đã sử dụng'
                    break

                default:
                    booking.book_status_msg = 'Đang xử lý'
                    break
            }

            switch (booking.book_is_paid) {
                case 0:
                    booking.book_is_paid_msg = 'Chưa thanh toán'
                    break

                case 1:
                    booking.book_is_paid_msg = 'Đã thanh toán'
                    break

                default:
                    booking.book_is_paid_msg = 'Đang xử lý'
                    break
            }
        })
        callback(err, bookingDetails)
    })
}

module.exports = accountHistory