const db = require('../config/db/connect');
const session = require('express-session');

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
        const { book_first_name, book_last_name, book_email, book_phone, book_note } = req.body;
        req.session.book_first_name = book_first_name;
        req.session.book_last_name = book_last_name;
        req.session.book_email = book_email;
        req.session.book_phone = book_phone;
        req.session.book_note = book_note;

        res.redirect('/booking/payment');
    }

    // [GET] /booking/payment
    payment(req, res) {
        const nav_tree__data = [
            { name: 'Trang chủ', link: '/' },
            { name: 'Phương thức thanh toán', link: '/booking/payment' }
        ]
        
        res.status(200).render('./pages/booking/payment', { nav_tree__data })
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