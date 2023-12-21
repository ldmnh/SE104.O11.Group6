/**
 * @file This file contains the Accommodation model which is responsible for handling database operations related to user authentication.
 * @name Accommodation Model
 * @requires ../config/db/connect
 * @exports Accommodation
 */
const db = require('../config/db/connect');

function Accommodation() { }


Accommodation.getAccoById = ({ id }, callback) => {
    const sql = `
        SELECT
            acco_id,
            acco_star,
            acco_name,
            acco_type,
            acco_exac_location,
            acco_location_link
        FROM accommodation
        WHERE acco_id = ${id};`;
    db.query(sql, (err, result) => {
        callback(err, result);
    });
}


module.exports = Accommodation;