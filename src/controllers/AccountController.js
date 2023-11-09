class AccountController {

    // [GET] /account/information
    information(req, res) {
        res.render('./pages/account/information')
    }

    // [PUT] /account/
    informationPut(req, res) {
        res.send('indexPut')
    }

    // [GET] /account/history
    history(req, res) {
        res.render('./pages/account/history')
    }

    // [GET] /account/payment
    payment(req, res) {
        res.render('./pages/account/payment')
    }

    // [POST] /account/payment/addBank
    addBank(req, res) {
        res.send('addBank')
    }

    // [POST] /account/payment/addDebit
    addDebit(req, res) {
        res.send('addDebit')
    }

    // [POST] /account/payment/delBank
    delBank(req, res) {
        res.send('delBank')
    }

    // [POST] /account/payment/delDebit
    delDebit(req, res) {
        res.send('delDebit')
    }

    // [GET] /account/change-password
    changePassword(req, res) {
        res.render('./pages/account/change-password')
    }

}

module.exports = new AccountController()