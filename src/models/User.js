const db = require('../config/db/connect');
const bcrypt = require('bcrypt');
const { query } = require('express');

const User = function (user) {
    // this.name = user.name;
    // this.password = user.password;
    // this.email = user.email;
};

User.findByEmail = (email, results) => {
    db.query(`SELECT * from authuser WHERE au_user_email = '${email}'`, (err, result) => {
        if (err) {
            results(err, null)
            return;
        }
        if (result.length > 0) {
            results(null, result[0])
            return;
        }
        results(null, null);
    });
}
module.exports = User;