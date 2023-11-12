const db = require('../config/db/connect');
const BookingModel = require('../models/bookingModel')

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
        BookingModel.getAllBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!' })
                throw err
            }
            if (result.length > 0) {
                res.status(200).render('./pages/booking/success',
                    // res.send(
                    {
                        message: 'success',
                        data: result
                    })
            }

        })
    }

    // [GET] /booking/detail
    detail(req, res) {
        res.render('./pages/booking/detail')
    }

    // [GET] /booking/cancellation
    cancel(req, res) {
        BookingModel.getAllBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!' })
                throw err
            }
            if (result.length > 0) {
                res.status(200).render('./pages/booking/cancellation',
                    // res.send(
                    {
                        message: 'success',
                        data: result
                    })
            }
        })
    }

    // [POST] /booking/cancellation
    cancelPost(req, res) {
        BookingModel.cancel(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!' })
                throw err
            }
            if (result) {
                req.session.book_id = null
                res.status(200).json({ message: 'Thành công' })
            }
        })
    }

}

module.exports = new BookingController()