class BookingController {

    // [GET] /booking/info
    info(req, res) {
        // res.render('./pages/booking/info')
        res.send("booking-info")
    }

    // [POST] /booking/info
    infoPost(req, res) {
        res.send("booking-infoPost")
    }

    // [GET] /booking/payment
    payment(req, res) {
        // res.render('./pages/booking/payment')
        res.send("booking-payment")
    }

    // [POST] /booking/payment
    paymentPost(req, res) {
        res.send("booking-paymentPost")
    }

    // [GET] /booking/result
    result(req, res) {
        // res.render('./pages/booking/result')
        res.send("booking-result")
    }

    // [GET] /booking/result-detail
    resultDetail(req, res) {
        // res.render('./pages/booking/result-detail')
        res.send("booking-result-detail")
    }

    // [POST] /booking/cancel
    cancelPost(req, res) {
        res.send("cancelPost")
    }

    // [GET] /booking/cancel
    cancel(req, res) {
        // res.render('./pages/booking/cancel')
        res.send("booking-cancel")
    }

}

module.exports = new BookingController()