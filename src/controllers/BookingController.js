class BookingController {

    // [GET] /booking/info
    information(req, res) {
        // res.render('./pages/booking/info')
        res.send("booking-info")
    }

    // [POST] /booking/info
    informationPost(req, res) {
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
    success(req, res) {
        // res.render('./pages/booking/success')
        res.send("booking-success")
    }

    // [GET] /booking/result-detail
    detail(req, res) {
        // res.render('./pages/booking/result-detail')
        res.send("booking-detail")
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