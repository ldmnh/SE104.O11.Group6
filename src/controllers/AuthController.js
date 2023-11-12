const db = require('../config/db/connect');
const User = require('../models/User')
const bcrypt = require('bcrypt');
class AuthController {

    // [GET] /auth/register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/auth/register', { title })
    }

    // [POST] /auth/register
    registerPost(req, res) {
        res.send("registerPost")
    }

    // [GET] /auth/login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/auth/login', { title })
    }

    // [POST] /auth/login
    loginPost(req, res) {
        const { email, password } = req.body;
        User.findByEmail(email, (err, user) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!' })
                throw err
            }
            if (!user) {
                return res.status(404).json({
                    status: "error",
                    error: "Email không tồn tại!"
                })
            } else {
                // bcrypt.compare(password, user.au_user_pass, (err, result) => {
                // if (result == true) {
                if ((password === user.au_user_pass)) {
                    req.session.loggedin = true;
                    req.session.user = user;
                    return res.status(200).json({
                        status: 'success',
                        success: 'Thành công',
                        data: user
                    })
                    // res.redirect('/')
                } else {
                    return res.status(401).json({
                        status: "error1",
                        error: "Mật khẩu không chính xác!"
                    })
                }
                // })
            }
        })
    }

    // [GET] /auth/forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/auth/forgot', { title })
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) {
        res.send("forgotPost")
    }

    // [GET] /auth/reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/auth/reset', { title })
    }

    // [POST] /auth/reset-password
    resetPost(req, res) {
        res.send("resetPost")
    }

    // [GET] /auth/logout
    logout(req, res) {
        res.redirect('/')
    }

    // [POST] /auth/change
    changePost(req, res) {
        // const title = 'Đổi mật khẩu'
        // res.render('./pages/account/change-password', { title })
        res.send("changePost")
    }

}

module.exports = new AuthController()