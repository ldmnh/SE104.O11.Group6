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

    // [GET] /forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/forgot-password.ejs', { title })
    }

    // [GET] /reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/reset-password.ejs', { title })
    }

    account(req, res) {
        res.render('./pages/account-page.ejs')
    }

    bookingHistory(req, res) {
        res.render('./pages/account-page/booking-history.ejs')
    }

    paymentAccount(req, res) {
        res.render('./pages/account-page/payment-account.ejs')
    }
    changePassword(req, res) {
        res.render('./pages/account-page/change-password.ejs')
    }

    // [GET] /about-us
    about(req, res) {
        const nav_tree__data = [
            { text: 'Trang chủ', link: '/' },
            { text: 'Giới thiệu', link: '/about-us' },
        ]
        res.render('./pages/about-us.ejs', { nav_tree__data })
    }

}

module.exports = new SiteController()