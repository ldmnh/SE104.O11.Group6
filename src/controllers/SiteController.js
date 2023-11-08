
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
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/site/login', { title })
    }

    // [GET] /about
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