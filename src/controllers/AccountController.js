class AccountController {

    // [GET] /account/
    index(req, res) {
        res.render('./pages/account/index')
    }

    // [GET] /account/booking-history
    bookingHistory(req, res) {
        res.render('./pages/account/booking-history')
    }

    // [GET] /account/payment
    paymentAccount(req, res) {
        res.render('./pages/account/payment')
    }

    // [GET] /account/change-password
    changePassword(req, res) {
        res.render('./pages/account/change-password')
    }

}

module.exports = new AccountController()