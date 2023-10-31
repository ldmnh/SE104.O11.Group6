class AccountController {

    // [GET] /account
    index(req, res) {
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

module.exports = new AccountController()