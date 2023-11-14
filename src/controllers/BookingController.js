const db = require("../config/db/connect");
const BookingModel = require("../models/bookingModel");

class BookingController {
    // [GET] /booking/information
    information(req, res) {
        const data = {
            acco: req.session.acco,
            rooms: req.session.rooms,
        };

        const nav_tree__data = [
            { text: "Trang chủ", link: "/" },
            { text: "Đặt phòng", link: "/booking" },
            { text: "Thông tin đặt phòng", link: "/booking/information" },
        ];
        res.render("./pages/booking/information", { nav_tree__data, data });
    }

    // [POST] /booking/information
    informationPost(req, res) {
        const {
            book_first_name,
            book_last_name,
            book_num_adult,
            book_num_child,
            book_email,
            book_phone,
            book_note,
        } = req.body;

        req.session.book = {
            book_first_name: book_first_name,
            book_last_name: book_last_name,
            book_num_adult: book_num_adult,
            book_num_child: book_num_child,
            book_email: book_email,
            book_phone: book_phone,
            book_note: book_note,
        };
        res.redirect("/booking/payment");
    }

    // [GET] /booking/payment
    payment(req, res) {
        const nav_tree__data = [
            { text: "Trang chủ", link: "/" },
            { text: "Đặt phòng", link: "/booking" },
            { text: "Phương thức thanh toán", link: "/booking/payment" },
        ];

        res.status(200).render("./pages/booking/payment", { nav_tree__data });
    }

    // [POST] /bookinh/payment
    paymentPost(req, res) {}

    // [GET] /booking/success
    success(req, res) {
        BookingModel.getAllBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }
            if (result.length > 0) {
                res.status(200).render(
                    "./pages/booking/success",
                    // res.send(
                    {
                        message: "success",
                        data: result,
                    }
                );
            }
        });
    }

    // [GET] /booking/detail
    detail(req, res) {
        BookingModel.getAllBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }
            if (result.length > 0) {
                res.status(200).render(
                    "./pages/booking/detail",
                    // res.send(
                    {
                        message: "success",
                        data: result,
                    }
                );
            }
        });
    }

    // [GET] /booking/cancellation
    cancel(req, res) {
        BookingModel.getAllBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }
            if (result.length > 0) {
                res.status(200).render(
                    "./pages/booking/cancellation",
                    // res.send(
                    {
                        message: "success",
                        data: result,
                    }
                );
            }
        });
    }

    // [POST] /booking/cancellation
    cancelPost(req, res) {
        BookingModel.cancel(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }
            if (result) {
                req.session.book_id = null;
                res.status(200).json({ message: "Thành công" });
            }
        });
    }
}

module.exports = new BookingController();
