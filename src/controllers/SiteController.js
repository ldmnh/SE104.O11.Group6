const SiteModel = require('../models/site.model')

class SiteController {

    // [GET] /
    index(req, res) {
        SiteModel.hintSearch({ }, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn!!!',
                });
                throw err;
            }
            // res.status(200).json({
            res.status(200).render('./pages/site/index', {
                user: req.session.user,
                dataSearch: result,
            })
        })
    }

    // [GET] /about
    about(req, res) {
        res.render('./pages/site/about', { user: req.session.user })
    }

    // [GET] /error404
    error404(req, res) {
        res.render('./pages/site/error404.ejs')
    }

    // [GET] /term-of-use
    termOfUse(req, res) {
        res.render('./pages/site/terms-of-use', { user: req.session.user })
    }

    // [GET] /privacy-policy
    privacyPolicy(req, res) {
        res.render('./pages/site/privacy-policy', { user: req.session.user })
    }

}

module.exports = new SiteController()
