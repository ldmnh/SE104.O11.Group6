
const db = require('../config/db');
// const User = require('../models/loginServer');
// const { validationResult } = require('express-validator');
const { query } = require('express');
// const loginService = require('../models/loginServer')
// const { check } = require('express-validator')

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

    // [GET] /login
    showLoginForm(req, res) {
        const title = 'Đăng nhập'
        res.render("./pages/site/login.ejs", { title })
        // errors: req.flash("errors")
    };

    // [POST] /login
    login(req, res) {
        const { email, password } = req.body;
        db.query(
            'SELECT * FROM authuser WHERE au_user_email = ? AND au_user_pass = ?',
            [email, password],
            function (error, results, fields) {
                if (error) throw error;
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.email = email;
                    res.redirect('/');
                } else {
                    const conflictError = 'Email hoặc mật khẩu không chính xác';
                    res.send(conflictError);
                    // res.render('./pages/site/login.ejs', { title, email, password, conflictError });
                }
            }
        );
    }

    // [GET] /about
    about(req, res) {
        res.render('./pages/site/about-us')
    }

    // [GET] /forgot-password
    showForgotForm(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/site/forgot-password', { title })
    }

    // [POST] /forgot-password
    forgot(req, res, next) {
        const { email } = req.body;
        db.query(
            'SELECT * FROM authuser WHERE au_user_email = ?',
            [email],
            (err, result, fields) => {
                if (err) throw err;
                if (result.length > 0) {
                    res.status(200).json({ message: 'Email đã được gửi' });
                    next();
                } else {
                    res.status(404).json({ message: 'Email không tồn tại' });
                }
            }
        );
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