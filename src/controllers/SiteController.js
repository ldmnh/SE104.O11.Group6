class SiteController {
    // [GET] /
    index(req, res) {
        res.render('./pages/index.ejs')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/register.ejs', { title })
    }

    // [GET] /login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/login.ejs', { title })
    }

    about_us(req, res) {
        res.render('./pages/about-us.ejs')
    }

    about_us(req, res) {
        res.render('./pages/about-us.ejs')
    }

}

module.exports = new SiteController()