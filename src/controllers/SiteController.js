const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class SiteController {

    // [GET] /
    index(req, res) {
        res.send('trang chu')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/register.ejs', { title })
    }

    // [POST] /register
    submitRegister(req, res) {
        const {
            au_user_last_name,
            au_user_first_name,
            au_user_email,
            au_user_pass: NewPassword
        } = req.body

        console.log(req.body)

        db.query('SELECT au_user_email FROM authuser WHERE au_user_email = ?', [au_user_email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({
                status: "error",
                error: "Email đã được sử dụng"
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
                    return res.json({
                        status: "success",
                        success: "Register successfully"
                    })
                    //res.redirect('/');
                })
            }
        })
    }


    // [GET] /login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/login.ejs', { title })
    }

    // [GET] /forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/forgot-password.ejs', { title })
    }

    // [GET] /reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/reset-password.ejs', { title })
    }

}

module.exports = new SiteController()