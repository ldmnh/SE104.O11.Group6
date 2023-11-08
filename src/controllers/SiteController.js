const db = require('../config/db/connect');

class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /about-us
    about(req, res) {
        const nav_tree__data = [
            { name: 'Trang chủ', link: '/' },
            { name: 'Giới thiệu', link: '/about' }
        ]
        res.render('./pages/site/about', { nav_tree__data })
    }
}

module.exports = new SiteController()