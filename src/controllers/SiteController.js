const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/site/register', { title })
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
        res.render('./pages/site/login', { title })
    }

    // [GET] /about-us
    about(req, res) {
        res.render('./pages/site/about-us')
    }

    // [GET] /forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/site/forgot-password', { title })
    }

    // [GET] /reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/site/reset-password', { title })
    }

    // [GET] /search-results
    search(req, res) {
        const title = 'Kết quả tìm kiếm'
        res.render('./pages/site/search-results', { title })
    }

}

module.exports = new SiteController()