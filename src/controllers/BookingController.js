const db = require('../config/db/connect');

class BookingController {

    // [GET] /booking/information
    information(req, res) {
        const nav_tree__data = [
            { name: 'Trang chủ', link: '/' },
            { name: 'Thông tin đặt phòng', link: '/booking/information' }
        ]
        res.render('./pages/booking/information', { nav_tree__data })
    }

    // [POST] /booking/information
    informationPost(req, res) {
        res.send('booking-infoPost')
    }

    // [GET] /booking/payment
    payment(req, res) {
        const nav_tree__data = [
            { name: 'Trang chủ', link: '/' },
            { name: 'Phương thức thanh toán', link: '/booking/payment' }
        ]
        res.render('./pages/booking/payment', { nav_tree__data })
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