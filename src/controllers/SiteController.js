const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class SiteController {

    // [GET] /
    index(req, res) {
        res.render("./pages/site/index");
    }

    // [GET] /about-us
    about(req, res) {
        const nav_tree__data = [
            { text: 'Trang chủ', link: '/' },
            { text: 'Giới thiệu', link: '/about' }
        ]
        res.render('./pages/site/about', { nav_tree__data })
    }

    // [GET] /terms-of-use
    termOfUse(req, res) {
        res.render('./pages/site/term-of-use')
    }

    privacyPolicy(req, res) {
        res.render('./pages/site/privacy-pocily')
    }

}

module.exports = new SiteController();
