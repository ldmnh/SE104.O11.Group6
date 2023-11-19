const db = require("../config/db/connect");
const { query } = require("express");
const session = require("express-session");
const BookingModel = function () {};
BookingModel.cancel = function (req, res, callback) {
    req.session.book_id = 1;
    const option = req.body.option;
    let value;
    let sql = `UPDATE booking SET rea_id = ?, book_status = -1 WHERE book_id = ?`;
    if (option == "Tôi đã tìm được lựa chọn chỗ nghỉ thay thế") value = 1;
    if (option == "Chỗ nghỉ yêu cầu hủy") value = 2;
    if (option == "Số lượng hoặc nhu cầu của tôi có thay đổi") value = 3;
    if (option == "Đổi ngày hoặc điểm đến") value = 4;
    if (option == "Lý do cá nhân/chuyến đi bị hủy") value = 5;
    if (option == "Không phải các lý do trên") value = 6;
    db.query(sql, [value, req.session.book_id], async (err, result) => {
        callback(err, res, result);
    });
};

module.exports = BookingModel;
