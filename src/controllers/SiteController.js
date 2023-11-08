class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /about-us
    about(req, res) {
        res.render('./pages/site/about-us')
    }
}

module.exports = new SiteController()