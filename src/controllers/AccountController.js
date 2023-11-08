class AccountController {

    // [GET] /account/
    information(req, res) {
        res.render('./pages/account/index')
    }

    // [PUT] /account/
    informationPut(req, res) {
        res.send("indexPut")
    }

    // [GET] /account/booking-history
    history(req, res) {
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