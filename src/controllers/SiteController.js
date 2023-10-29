class SiteController {
    // [GET] /
    index(req, res) {
        res.send('trang chu')
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

}

module.exports = new SiteController()