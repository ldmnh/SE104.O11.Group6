/**
 * @file This file contains the Booking model which is responsible for handling database operations related to user authentication.
 * @name Booking Model
 * @requires ../config/db/connect
 * @exports Booking
 */
const db = require('../config/db/connect');

function Booking() { }

Booking.postInfo = ({
    acco_id, au_user_id, book_datetime, book_start_datetime,
    book_end_datetime, book_num_adult, book_num_child, book_cost_before,
    book_cost_after, book_first_name, book_last_name, book_email,
    book_phone, book_note, pay_id, cancel, book_status, book_is_paid
}, callback) => {
    const sql = `
        INSERT INTO BOOKING (
            acco_id, au_user_id, book_datetime, book_start_datetime,
            book_end_datetime, book_num_adult, book_num_child, book_cost_before,
            book_cost_after, book_first_name, book_last_name, book_email,
            book_phone, book_note, pay_id, cancel, book_status, book_is_paid
        ) VALUES (
            ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?, ?, ?
        );`
    db.query(sql, [
        acco_id, au_user_id, book_datetime, book_start_datetime,
        book_end_datetime, book_num_adult, book_num_child, book_cost_before,
        book_cost_after, book_first_name, book_last_name, book_email,
        book_phone, book_note, pay_id, cancel, book_status, book_is_paid
    ], (err, result) => {
        callback(err, result)
    })
}

Booking.postInfoDetailByIds = ({
    book_id, room_id, book_room_cost_before, book_room_cost_after, book_num_room
}, callback) => {
    const sql = `
        INSERT INTO BOOKING_DETAIL (
            book_id, room_id, book_room_cost_before,
            book_room_cost_after, book_num_room
        ) VALUES (
            ?, ?, ?,
            ?, ?
        );`
    db.query(sql, [
        book_id, room_id, book_room_cost_before,
        book_room_cost_after, book_num_room
    ], (err, result) => {
        callback(err, result)
    })
}

module.exports = Booking;