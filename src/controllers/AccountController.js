class AccountController {

    // [GET] /account/
    index(req, res) {
        res.render('./pages/account/index')
    }

    // [PUT] /account/
    indexPut(req, res) {
        res.send("indexPut")
    }

    // [GET] /account/booking-history
    bookingHistory(req, res) {
        res.render('./pages/account/booking-history')
    }

    // [GET] /account/payment
    payment(req, res) {
        res.render('./pages/account/payment')
    }

    // [POST] /account/payment/addBank
    addBank(req, res) {
        res.send("addBank")
    }

    // [POST] /account/payment/addDebit
    addDebit(req, res) {
        res.send("addDebit")
    }

    // [POST] /account/payment/delBank
    delBank(req, res) {
        res.send("delBank")
    }

    // [POST] /account/payment/delDebit
    delDebit(req, res) {
        res.send("delDebit")
    }

}

module.exports = new AccountController()