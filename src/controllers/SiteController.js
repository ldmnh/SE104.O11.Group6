class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /about-us
    about(req, res) {
        res.render('./pages/site/about')
    }
    // [GET] /footer
    footer(req, res) {
        res.render('./pages/footer.ejs')
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

    payment(req, res) {
        res.render('./pages/order-payment.ejs')
    }

}

module.exports = new SiteController()