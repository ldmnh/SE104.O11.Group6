const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class AuthController {

    // [GET] /auth/register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/auth/register', { title })
    }

    // [POST] /auth/register
    registerPost(req, res) { 
        const {
            au_user_last_name,
            au_user_first_name,
            au_user_email,
            au_user_pass: NewPassword
        } = req.body

        console.log(req.body)

        db.query('SELECT au_user_email FROM authuser WHERE au_user_email = ?', [au_user_email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.status(404).json({
                msg: "error",
                message: "Email đã được sử dụng"
            })
            else {
                const au_user_pass = bcrypt.hash(NewPassword, 8)
                db.query('INSERT INTO authuser SET ?', {
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

    // [GET] /auth/login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/auth/login', { title })
    }

    // [POST] /auth/login
    loginPost(req, res) {
        const { email, password } = req.body
        console.log(req.body)
        // Execute SQL query that'll select the account from the database based on the specified username and password
        db.query('SELECT * FROM authuser WHERE au_user_email = ?', [email], async (err, result) => {
            console.log(result);
            if (err) throw err;
            if (!result[0]) {
                return res.json({
                    status: "error",
                    error: "Email không tồn tại."
                })
            }
            else {
                if ((password === result[0].au_user_pass)) {
                    req.session.loggedin = true;
                    req.session.user = req.body;
                    return res.json({
                        status: 'success',
                        success: 'Thành công'
                    })
                }
                else {
                    return res.json({
                        status: "error1",
                        error: "Mật khẩu không chính xác."
                    })
                }
            }
        })    }

    // [GET] /auth/forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/auth/forgot', { title })
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) { }

    // [GET] /auth/reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/auth/reset', { title })
    }

    // [POST] /auth/reset-password
    resetPost(req, res) { }

    // [GET] /auth/logout
    logout(req, res) {
        res.redirect('/')
    }

    // [GET] /auth/change
    // change(req, res) {
    //     const title = 'Đổi mật khẩu'
    //     res.render('./pages/account/change-password', { title })
    // }

}

module.exports = new AuthController()