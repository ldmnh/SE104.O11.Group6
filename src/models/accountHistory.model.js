const db = require('../config/db/connect')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const util = require('node:util')
const query = util.promisify(db.query).bind(db)

const accountHistory = function () { }

accountHistory.getDetail = async ({ id, page }, callback) => {
    // let params = [req.session.user.id]
    let getRowBooking = "SELECT COUNT(*) as 'total' FROM view_booking_history WHERE au_user_id = ?"
    let getBookingDetail = 'SELECT * FROM view_booking_history WHERE au_user_id = ?'

    // lấy trạng hiện tại page=?
    // let page = req.query.page ? req.query.page : 1

    //truy vấn tính tổng số dòng trong một bảng
    let rowData = await query(getRowBooking, [id])
    let totalRow = rowData[0].total

    let limit = 5
    // tính số trang thực tế sẽ có
    let totalPage = totalRow > 0 ? Math.ceil(totalRow / limit) : 1
    // Kiểm tra đảm bảo rằng page là số nguyên hợp lệ từ 1 đến totalPage
    page = page > 0 ? Math.floor(page) : 1
    page = page <= totalPage ? Math.floor(page) : totalPage

    let start = (page - 1) * limit
    getBookingDetail +=  " ORDER BY view_booking_history.book_datetime DESC LIMIT " + start + "," + limit;

    db.query(getBookingDetail, [id], function (err, bookingDetails) {
        bookingDetails.forEach(function (booking) {
            booking.book_datetime = booking.book_datetime.getDate() +'/'+ booking.book_datetime.getMonth()+'/'+ booking.book_datetime.getYear()
            booking.book_start_datetime = booking.book_start_datetime.getDate() +'/'+ booking.book_start_datetime.getMonth()+'/'+ booking.book_start_datetime.getYear()
            booking.book_end_datetime = booking.book_end_datetime.getDate() +'/'+ booking.book_end_datetime.getMonth()+'/'+ booking.book_end_datetime.getYear()
            
            booking.book_cost_after_currency = booking.book_cost_after.toFixed(0).replace(/./g, function(c, i, a) {
                            return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
                          });
            booking.book_cost_before_currency = booking.book_cost_before.toFixed(0).replace(/./g, function(c, i, a) {
                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                          });
            
            switch (booking.book_status){
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
        callback(err, bookingDetails, totalRow, totalPage, page, limit)
    })
}

module.exports = accountHistory