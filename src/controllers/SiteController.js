const SearchModel = require('../models/search.model')

class SiteController {

    // [GET] /
    index(req, res) {
        // res.status(200).json({
        res.status(200).render('./pages/site/index', {
            user: req.session.user,
        })
    }

    // [GET] /hint_search
    hintSearch(req, res) {
        const searchKey = req.body.searchKey
        SearchModel.hintSearch(searchKey, (err, result) => {
            if (result[0]) {
                res.status(200).json({
                    status: 'ok',
                    result: result
                })
            }             
        })
    }

    // [GET] /about
    about(req, res) {
        res.render('./pages/site/about', {
            user: req.session.user
        })
    }

    // [GET] /error404
    error404(req, res) {
        res.render('./pages/site/error404.ejs')
    }

    // [GET] /term-of-use
    termOfUse(req, res) {
        res.render('./pages/site/terms-of-use', {
            user: req.session.user
        })
    }

    // [GET] /privacy-policy
    privacyPolicy(req, res) {
        res.render('./pages/site/privacy-policy', {
            user: req.session.user
        })
    }

}

module.exports = new SiteController()