const db = require('../config/db/connect');
const { query } = require('express');
const session = require('express-session')
const BookingModel = function () { }
BookingModel.getAllBooking = function (req, res, callback) {
    // if (!req.session.user.au_user_email) {
    //     res.status(404).json({ message: 'Khong tim thay email!' })
    //     return
    // }
    req.session.book_id = 'boo000000001'
    const sql = `SELECT acco_exac_location, city_name, book_start_datetime, 
    DAYOFWEEK(book_start_datetime) AS book_start_dayofweek,
        RIGHT('0' + CAST(DAY(book_start_datetime) AS VARCHAR(2)), 2) AS book_start_day,
        RIGHT('0' + CAST(MONTH(book_start_datetime) AS VARCHAR(2)), 2) AS book_start_month,
        CAST(YEAR(book_start_datetime) AS VARCHAR(4)) AS book_start_year,
        DAYOFWEEK(book_end_datetime) AS book_end_dayofweek,
        RIGHT('0' + CAST(DAY(book_end_datetime) AS VARCHAR(2)), 2) AS book_end_day,
        RIGHT('0' + CAST(MONTH(book_end_datetime) AS VARCHAR(2)), 2) AS book_end_month,
        CAST(YEAR(book_end_datetime) AS VARCHAR(4)) AS book_end_year,
        ABS(DATEDIFF(book_start_datetime, book_end_datetime)) AS book_num_day,
        acco_name, acco_star, 
    book_end_datetime, book_final_cost, book_num_room, book_email, room_class, booking.book_id FROM booking, bookingdetail, roomtype, accommodation, city WHERE booking.book_id= bookingdetail.book_id AND bookingdetail.room_id=roomtype.room_id AND roomtype.acco_id=accommodation.acco_id AND city.city_id = accommodation.city_id AND booking.book_id = '${req.session.book_id}' `
    db.query(sql, async (err, result) => {
        callback(err, res, result)
    })
}
BookingModel.cancel = function (req, res, callback) {
    // req.session.book_id = 'boo000000001'
    const option = req.body.option
    let value
    let sql = `UPDATE booking SET rea_id = ?, book_status = -1 WHERE book_id = ?`
    if (option == 'Tôi đã tìm được lựa chọn chỗ nghỉ thay thế')
        value = 'rea000000001'
    if (option == 'Chỗ nghỉ yêu cầu hủy')
        value = 'rea000000002'
    if (option == 'Số lượng hoặc nhu cầu của tôi có thay đổi')
        value = 'rea000000003'
    if (option == 'Đổi ngày hoặc điểm đến')
        value = 'rea000000004'
    if (option == 'Lý do cá nhân/chuyến đi bị hủy')
        value = 'rea000000005'
    if (option == 'Không phải các lý do trên')
        value = 'rea000000006'
    db.query(sql, [value, req.session.book_id], async (err, result) => {
        callback(err, res, result)
    })

}

module.exports = BookingModel