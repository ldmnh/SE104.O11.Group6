class BookingController {

    // [GET] /booking/information
    information(req, res) {
        res.render('./pages/booking/information')
    }

    // [POST] /booking/information
    informationPost(req, res) {
        res.send('booking-infoPost')
    }

    // [GET] /booking/payment
    payment(req, res) {
        res.render('./pages/booking/payment')
    }

    // [POST] /booking/payment
    paymentPost(req, res) {
        res.send("booking-paymentPost")
    }

    // [GET] /booking/success
    success(req, res) {
        res.render('./pages/booking/success')
    }

    // [GET] /booking/detail
    detail(req, res) {
        res.render('./pages/booking/detail')
    }

    // [GET] /booking/cancel
    cancel(req, res) {
        res.render('./pages/booking/cancellation')
    }

    // [POST] /booking/cancel
    cancelPost(req, res) {
        res.send('cancelPost')
    }

}

module.exports = new BookingController()