const db = require('../config/db/connect');

const SiteModel = function () { }

SiteModel.hintSearch = ({ }, callback) => {
    const sql = `SELECT city_name FROM city`;
    db.query(sql, (err, result) => {
        callback(err, result);
    })
}


module.exports = SiteModel