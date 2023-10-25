class SiteController {
    // [GET] /
    index(req, res) {
        res.send('trang chu')
    }

    // [GET] /register
    register(req, res) {
        res.render('./pages/register.ejs')
    }

    // [GET] /login
    login(req, res) {
        res.render('./pages/login.ejs')
    }
    // [GET] /footer
    footer(req, res) {
        res.render('./pages/footer.ejs')
    }
}

module.exports = new SiteController()