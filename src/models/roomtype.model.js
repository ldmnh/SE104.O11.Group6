/**
 * @file This file contains the RoomType model which is responsible for handling database operations related to user authentication.
 * @name RoomType Model
 * @requires ../config/db/connect
 * @exports RoomType
 */
const db = require('../config/db/connect');

function RoomType() { }

RoomType.getRoomsByIds = ({ ids }, callback) => {
    const sql = `
        SELECT
            room_cost AS room_cost_before,
            room_cost * 0.1 AS room_cost_tax,
        FROM roomtype
        WHERE acco_id in (${ids.join(',')});`;
    db.query(sql, (err, result) => {
        callback(err, result);
    });
}

module.exports = RoomType;