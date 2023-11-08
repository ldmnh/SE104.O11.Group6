class BookingController {

    // [GET] /booking/info
    info(req, res) {
        res.render('./pages/booking/info')
    }

    // [POST] /booking/info
    infoPost(req, res) {
        res.send("infoPost")
    }

    // [GET] /booking/payment
    payment(req, res) {
        res.render('./pages/booking/payment')
    }

    // [POST] /booking/payment
    paymentPost(req, res) {
        res.send("paymentPost")
    }

    // [GET] /booking/result
    result(req, res) {
        res.render('./pages/booking/result')
    }

    // [GET] /booking/result-detail
    resultDetail(req, res) {
        res.render('./pages/booking/result-detail')
    }

    // [POST] /booking/cancel
    cancelPost(req, res) {
        res.send("cancelPost")
    }

    // [GET] /booking/cancel
    cancel(req, res) {
        res.render('./pages/booking/cancel')
    }

}

module.exports = new BookingController()