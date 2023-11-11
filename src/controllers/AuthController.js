const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authModel = require('../models/Auth.model')

class AuthController {

    // [GET] /auth/register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/auth/register', { title })
    }

    // [POST] /auth/register
    registerPost(req, res) { 
        authModel.checkRegister(req, res)
        // const {
        //     au_user_last_name,
        //     au_user_first_name,
        //     au_user_email,
        //     au_user_pass: NewPassword
        // } = req.body

        // db.query('SELECT au_user_email FROM authuser WHERE au_user_email = ?', [au_user_email], async (err, result) => {
        //     if (err) throw err;
        //     if (result[0]) return res.status(404).json({
        //         msg: "error",
        //         message: "Email đã được sử dụng"
        //     })
        //     else {
        //         const au_user_pass = bcrypt.hash(NewPassword, 8)
        //         db.query('INSERT INTO authuser SET ?', {
        //             au_user_last_name: au_user_last_name,
        //             au_user_first_name: au_user_first_name,
        //             au_user_email: au_user_email,
        //             au_user_pass: au_user_pass
        //         }, async (error, results) => {
        //             if (error) throw error;
        //             return res.status(200).json({
        //                 msg: "success",
        //                 message: "Register successfully"
        //             })                    
        //         })
        //     }
        // })
    }

    // [GET] /auth/login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/auth/login', { title })
    }

    // [POST] /auth/login
    loginPost(req, res) {
        

    }

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