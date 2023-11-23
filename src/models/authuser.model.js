/**
 * @file This file contains the AuthUser model which is responsible for handling database operations related to user authentication.
 * @name AuthUser Model
 * @requires ../config/db/connect
 * @exports AuthUser
 */
const db = require('../config/db/connect')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function AuthUser() { }

AuthUser.checkRegister = function (req, callback) {
    const {
        au_user_last_name,
        au_user_first_name,
        au_user_email,
        au_user_pass
    } = req.body

    console.log(req.body)

    const checkEmail = 'SELECT au_user_email FROM authuser WHERE au_user_email = ?'
    const insertUser = 'INSERT INTO authuser SET ?'

    db.query(checkEmail, [au_user_email], async (err, result) => {
        if (err) callback(1, 0, 0)
        if (result[0]) callback(0, 1, 0)
        else {
            // const au_user_pass = bcrypt.hash(NewPassword, 8)
            let hashedPassword = await bcrypt.hash(au_user_pass, 8);
            console.log(hashedPassword);
            db.query(insertUser, {
                au_user_last_name: au_user_last_name,
                au_user_first_name: au_user_first_name,
                au_user_email: au_user_email,
                au_user_pass: hashedPassword
            }, (error, results) => {
                if (error) callback(1, 0, 0)
                callback(0, 0, 1)
            })
        }
    })
}

AuthUser.checkEmail = ({ email }, callback) => {
    const sql = `
        SELECT *
        FROM AUTHUSER
        WHERE au_user_email = ?`
    db.query(sql, [email], (err, result) => {
        callback(err, result)
    })
}

AuthUser.checkAccount = ({ email, password }, callback) => {
    const sql = `
        SELECT au_user_email
        FROM AUTHUSER
        WHERE au_user_email = ?
            AND au_user_password = ?`
    db.query(sql, [email, password], (err, result) => {
        callback(err, result)
    })
}

AuthUser.getInfoById = ({ id }, callback) => {
    const sql = `
        SELECT *
        FROM VIEW_AUTHUSER
        WHERE au_user_id = ?`;
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
}

AuthUser.putInfoById = ({ id, first_name, last_name, birthday, sex }, callback) => {
    const sql = `
        UPDATE AUTHUSER 
        SET au_user_first_name = ?,
            au_user_last_name = ?,
            au_user_birthday = ?,
            au_user_sex = ?
        WHERE au_user_id = ?;`
    const values = [
        first_name, last_name, birthday, sex, id
    ]

    db.query(sql, values, (err, result) => {
        callback(err, result)
    })
}

// AuthUser.putChangePassById = ({ id, oldPassHashed, newPassHashed }, callback) => {
//     const sql = `
//         UPDATE AUTHUSER
//         SET au_user_pass = ?
//         WHERE au_user_id = ?
//             AND au_user_pass = ?;`;
//     const values = [newPassHashed, id, oldPassHashed]
//     db.query(sql, values, (err, result) => {
//         callback(err, result)
//     })
// }

AuthUser.putResetPassByEmail = async ({ email, password }, callback) => {
    const hashedPass = await bcrypt.hash(password, 8)
    const sql = `
        UPDATE AUTHUSER
        SET au_user_pass = ?
        WHERE au_user_email = ?;`;
    const values = [hashedPass, email]
    db.query(sql, values, (err, result) => {
        callback(err, result)
    })
}

AuthUser.getBankCardsById = ({ id }, callback) => {
    const sql = `
        SELECT
            bank_id,
            bank_name,
            bank_num,
            CONCAT('*', SUBSTRING(bank_num, -4)) AS bank_num_hide
        FROM BANKCARD AS B
        WHERE B.au_user_id = ?;`;
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
}

AuthUser.getDebitCardsById = ({ id }, callback) => {
    const sql = `
        SELECT
            debit_id,
            debit_num,
            CONCAT('*', SUBSTRING(debit_num, -4)) AS debit_num_hide
        FROM DEBITCARD AS D
        WHERE D.au_user_id = ?;`;
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
}

AuthUser.findByEmail = (email, results) => {
    db.query(
        `SELECT * from authuser WHERE au_user_email = '${email}'`,
        (err, result) => {
            if (err) {
                results(err, null);
                return;
            }
            if (result.length > 0) {
                results(null, result[0]);
                return;
            }
            results(null, null);
        }
    );
};

module.exports = AuthUser