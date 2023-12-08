const db = require('../config/db/connect')
const util = require('node:util')
const query = util.promisify(db.query).bind(db)
const index = require('../models/index.model')

const accountHistory = function () { }


accountHistory.getDetail = async ({ id, page }, callback) => {
    let getRowBooking = "SELECT COUNT(*) as 'total' FROM view_booking_history WHERE au_user_id = ?"
    let getBookingDetail = 'SELECT * FROM view_booking_history WHERE au_user_id = ?'

    // lấy trạng hiện tại page=?

    // truy vấn tính tổng số dòng trong một bảng
    let rowData = await query(getRowBooking, [id])
    let totalRow = rowData[0].total

    let limit = 5

    // tính số trang thực tế sẽ có
    let totalPage = totalRow > 0 ? Math.ceil(totalRow / limit) : 1
    
    // Kiểm tra đảm bảo rằng page là số nguyên hợp lệ từ 1 đến totalPage
    page = page > 0 ? Math.floor(page) : 1
    page = page <= totalPage ? Math.floor(page) : totalPage

    let start = (page - 1) * limit
    getBookingDetail += " ORDER BY view_booking_history.book_datetime DESC LIMIT " + start + "," + limit;

    db.query(getBookingDetail, [id], function (err, bookingDetails) {
        bookingDetails.forEach(function (booking) {
            booking.book_datetime = index.toDDMMYYYY(new Date(booking.book_datetime))
            booking.book_start_datetime = index.toDDMMYYYY(new Date(booking.book_start_datetime))
            booking.book_end_datetime = index.toDDMMYYYY(new Date(booking.book_end_datetime))

            booking.book_cost_after_currency = index.toCurrency(Number(booking.book_cost_after))
            booking.book_cost_before_currency = index.toCurrency(Number(booking.book_cost_before))

            booking.book_status_mean = index.bookStatus(booking.book_status)
            booking.book_is_paid_mean = index.bookIsPaid(booking.book_is_paid)
        })
        callback(err, bookingDetails, totalRow, totalPage, page, limit)
    })
}

module.exports = accountHistory