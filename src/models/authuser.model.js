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

AuthUser.checkRegister = function (req, res) {
    const {
        au_user_last_name,
        au_user_first_name,
        au_user_email,
        au_user_pass: NewPassword
    } = req.body

    console.log(req.body)

    const checkEmail = 'SELECT au_user_email FROM authuser WHERE au_user_email = ?'
    const insertUser = 'INSERT INTO authuser SET ?'

    db.query(checkEmail, [au_user_email], async (err, result) => {
        if (err) throw err
        if (result[0]) return res.status(500).json({
            msg: 'error',
            message: 'Email đã được sử dụng'
        })
        else {
            const au_user_pass = bcrypt.hash(NewPassword, 8)
            db.query(insertUser, {
                au_user_last_name: au_user_last_name,
                au_user_first_name: au_user_first_name,
                au_user_email: au_user_email,
                au_user_pass: au_user_pass
            }, async (error, results) => {
                if (error) throw error
                return res.status(200).json({
                    msg: 'success',
                    message: 'Register successfully'
                })
            })
        }
    })
}

AuthUser.checkEmail = ({ email }, callback) => {
    const sql = `
        SELECT au_user_email
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

AuthUser.getInfoByEmail = ({ email }, callback) => {
    const sql = `
        SELECT
            au_user_first_name, 
            au_user_last_name,
            au_user_email,
            au_user_avt_url,
            au_user_birthday,
            au_user_sex
        FROM AUTHUSER
        WHERE au_user_email = ?`
    db.query(sql, [email], (err, result) => {
        callback(err, result)
    })
}

AuthUser.putInfoByEmail = ({
    email, first_name, last_name, birthday, sex
}, callback) => {
    const sql = `
        UPDATE AUTHUSER 
        SET au_user_first_name = ?,
            au_user_last_name = ?,
            au_user_birthday = ?,
            au_user_sex = ?
        WHERE au_user_email = ?`
    const values = [
        first_name, last_name, birthday, sex, email
    ]

    db.query(sql, values, (err, result) => {
        callback(err, result)
    })
}

AuthUser.putChangePassByEmail = ({ email, oldPass, newPass }, callback) => {
    const sql = `
        UPDATE AUTHUSER
        SET au_user_password = ?
        WHERE au_user_email = ?
            AND au_user_password = ?`
    const values = [newPass, email, oldPass]
    db.query(sql, values, (err, result) => {
        callback(err, result)
    })
}

AuthUser.putResetPassByEmail = ({ email, password }, callback) => {
    const sql = `
        UPDATE AUTHUSER
        SET au_user_pass = ?
        WHERE au_user_email = ?`
    const values = [password, email]
    db.query(sql, values, (err, result) => {
        callback(err, result)
    })
}

AuthUser.getBankCardsByEmail = ({ email }, callback) => {
    const sql = `
        SELECT
            bank_name,
            bank_num,
        FROM BANKCARD AS B
        INNER JOIN (
            SELECT au_user_id
            FROM AUTHUSER
            WHERE au_user_email = ?
        ) AS A
            ON B.au_user_id = A.au_user_id`
    db.query(sql, [email], (err, result) => {
        callback(err, result)
    })
}

AuthUser.getDebitCardsByEmail = ({ email }, callback) => {
    const sql = `
        SELECT
            debit_num,
        FROM DEBITCARD AS D
        INNER JOIN (
            SELECT au_user_id
            FROM AUTHUSER
            WHERE au_user_email = ?
        ) AS A
            ON D.au_user_id = A.au_user_id`
    db.query(sql, [email], (err, result) => {
        callback(err, result)
    })
}

module.exports = AuthUser