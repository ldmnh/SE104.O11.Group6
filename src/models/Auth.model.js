const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authModel = function () {};

authModel.checkRegister = function (req, res) {
    const {
        au_user_last_name,
        au_user_first_name,
        au_user_email,
        au_user_pass: NewPassword
    } = req.body

    const checkEmail = 'SELECT au_user_email FROM authuser WHERE au_user_email = ?'
    const insertUser = 'INSERT INTO authuser SET ?'

    db.query(checkEmail, [au_user_email], async (err, result) => {
        if (err) throw err;
        if (result[0]) return res.status(404).json({
            msg: "error",
            message: "Email đã được sử dụng"
        })
        else {
            const au_user_pass = bcrypt.hash(NewPassword, 8)
            db.query(insertUser, {
                au_user_last_name: au_user_last_name,
                au_user_first_name: au_user_first_name,
                au_user_email: au_user_email,
                au_user_pass: au_user_pass
            }, async (error, results) => {
                if (error) throw error;
                return res.status(200).json({
                    msg: "success",
                    message: "Register successfully"
                })                    
            })
        }
    })
}

module.exports = authModel;