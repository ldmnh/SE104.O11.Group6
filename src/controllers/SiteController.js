class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /about
    about(req, res) {
        res.render('./pages/site/about')
    }

    // [GET] /error404
    error404(req, res) {
        res.render('./pages/site/error404.ejs')
    }

    // [GET] /term-of-use
    termOfUse(req, res) {
        res.render('./pages/site/terms-of-use')
    }

    // [GET] /privacy-policy
    privacyPolicy(req, res) {
        res.render('./pages/site/privacy-pocily')
    }

}

module.exports = new SiteController()
