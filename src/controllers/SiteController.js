class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /about-us
    about(req, res) {
        res.render('./pages/site/about')
    }

    // [GET] /
    termOfUse(req, res) {
        res.render('./pages/site/terms-of-use')
    }

    privacyPolicy(req, res) {
        res.render('./pages/site/privacy-policy')
    }
}

module.exports = new SiteController()