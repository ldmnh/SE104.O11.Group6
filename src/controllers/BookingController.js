const index = require("../models/index.model");
const accommodation = require("../models/accommodation.model");
const authuser = require("../models/authuser.model");
const booking = require("../models/booking.model");

class BookingController {
    // [GET] /booking/information
    information(req, res) {
        const check_in = new Date(req.session.search?.check_in);
        const check_out = new Date(req.session.search?.check_out);
        const days = Math.ceil((check_out - check_in) / (1000 * 60 * 60 * 24));

        accommodation.getAccoById(
            {
                id: req.session.acco?.id,
            },
            (err, result) => {
                if (err) throw err;

                if (result.length > 0) {
                    req.session.acco.star = result[0].acco_star;
                    req.session.acco.name = result[0].acco_name;
                    req.session.acco.type = result[0].acco_type;
                    req.session.acco.exac_location =
                        result[0].acco_exac_location;
                    req.session.acco.location_link = result[0].acco_location_link;

                    const data = {
                        acco: req.session.acco,
                        search: {
                            check_in: index.toXDDMMYYYY(check_in),
                            check_out: index.toXDDMMYYYY(check_out),
                        },
                        rooms: req.session.rooms,
                        book: {
                            total_room: req.session.rooms.reduce(
                                (sum, room) => sum + room.num ?? 0,
                                0
                            ),
                            cost_before: index.toCurrency(
                                req.session.rooms.reduce(
                                    (sum, room) =>
                                        sum +
                                        room.cost_before *
                                        room.num *
                                        days ?? 0,
                                    0
                                )
                            ),
                            cost_after: index.toCurrency(
                                req.session.rooms.reduce(
                                    (sum, room) =>
                                        sum +
                                        room.cost_after * room.num * days ??
                                        0,
                                    0
                                )
                            ),
                        },
                        days,
                    };

                    res.status(200).render("./pages/booking/information", {
                        // res.status(200).json({
                        user: req.session.user,
                        data,
                    });
                } else {
                    throw new Error("Không tìm thấy khách sạn!!!");
                }
            }
        );
    }

    // [POST] /booking/information
    informationPost(req, res) {
        const { first_name, last_name, email, phone, note } = req.body;

        req.session.book = {
            first_name,
            last_name,
            email,
            phone,
            note,
        };

        res.redirect("/booking/payment");
    }

    // [GET] /booking/payment
    payment(req, res) {
        const check_in = new Date(req.session.search?.check_in);
        const check_out = new Date(req.session.search?.check_out);
        const days = Math.ceil((check_out - check_in) / (1000 * 60 * 60 * 24));

        if (!req.session.rooms) {
            res.status(404).redirect("/error404");
            return;
        }

        authuser.getBankCardsById(
            {
                id: req.session.user?.id,
            },
            (err, result) => {
                if (err) throw err;

                if (result.length > 0) {
                    req.session.user.bank_cards = result;
                } else {
                    req.session.user.bank_cards = [];
                }

                const data = {
                    acco: req.session.acco,
                    search: {
                        check_in: index.toXDDMMYYYY(check_in),
                        check_out: index.toXDDMMYYYY(check_out),
                    },
                    rooms: req.session.rooms,
                    book: {
                        total_room: req.session.rooms.reduce(
                            (sum, room) => sum + room.num,
                            0
                        ),
                        cost_before: index.toCurrency(
                            req.session.rooms.reduce(
                                (sum, room) =>
                                    sum + room.cost_before * room.num * days ??
                                    0,
                                0
                            )
                        ),
                        cost_after: index.toCurrency(
                            req.session.rooms.reduce(
                                (sum, room) =>
                                    sum + room.cost_after * room.num * days ??
                                    0,
                                0
                            )
                        ),
                    },
                    bank_cards: req.session.user?.bank_cards,
                    debit_cards: req.session.user?.debit_cards,
                    days,
                };
                res.status(200).render("./pages/booking/payment", {
                    user: req.session.user,
                    data,
                });
                // res.status(200).json({ data })
            }
        );
    }

    // [POST] /booking/payment
    paymentPost(req, res) {
        const { pay_id } = req.body; // Phương thức thanh toán 1: tiền mặt, 2: thẻ ngân hàng, 3: thẻ tín dụng

        req.session.book.pay_id = parseInt(pay_id);
        const check_in = new Date(req.session.search?.check_in);
        const check_out = new Date(req.session.search?.check_out);
        const days = Math.ceil((check_out - check_in) / (1000 * 60 * 60 * 24));

        booking.postInfo(
            {
                acco_id: req.session.acco?.id,
                au_user_id: req.session.user?.id,
                book_datetime: new Date(),
                book_start_datetime: new Date(req.session.search?.check_in),
                book_end_datetime: new Date(req.session.search?.check_out),
                book_num_adult: req.session.search?.adult,
                book_num_child: req.session.search?.child,
                book_cost_before: req.session.rooms.reduce(
                    (sum, room) => sum + room.cost_before * days,
                    0
                ),
                book_cost_after: req.session.rooms.reduce(
                    (sum, room) => sum + room.cost_after * days,
                    0
                ),
                book_first_name: req.session.book?.first_name,
                book_last_name: req.session.book?.last_name,
                book_email: req.session.book?.email,
                book_phone: req.session.book?.phone,
                book_note: req.session.book?.note,
                pay_id: req.session.book?.pay_id,
                cancel_cost: 0,
                book_status: 0,
                book_is_paid: req.session.book?.pay_id == 1 ? 0 : 1,
            },
            (err, result) => {
                if (err) throw err;

                // console.log(result);
                req.session.book.id = result.insertId;

                booking.postInfoDetailByIds(
                    {
                        book_id: req.session.book?.id,
                        rooms: req.session.rooms,
                    },
                    (err, result) => {
                        if (err) throw err;
                        res.redirect("/booking/success");
                    }
                );
            }
        );
    }

    // [GET] /booking/success
    success(req, res) {
        booking.getAllBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }
            req.session.rooms = null;
            req.session.acco = null;
            if (result.length > 0) {
                booking.countBookingRoom(
                    req,
                    res,
                    function (err, res, result1) {
                        if (err) {
                            res.status(500).json({ message: "Lỗi truy vấn!" });
                            throw err;
                        }

                        res.status(200).render("./pages/booking/success", {
                            message: "success",
                            user: req.session.user,
                            data: result,
                            datax: result1,
                        });
                    }
                );
            }
        });
    }

    // [GET] /booking/detail
    bookingDetail(req, res) {
        // console.log(req.session.book?.id);
        const book_id = req.query.book_id
            ? req.query.book_id
            : req.session.book?.id;
        const id = req.session.user.id;
        booking.getDetailBooking(
            { id, book_id },
            function (err, booking, bookingDetails) {
                if (err) {
                    res.render("./pages/site/error404");
                    throw err;
                } else if (!booking) {
                    res.render("./pages/site/error404");
                } else {
                    res.status(200).render("./pages/booking/detail", {
                        // res.status(200).json({
                        user: req.session.user,
                        booking: booking,
                        bookingDetails: bookingDetails,
                    });
                }
            }
        );
    }

    // [GET] /booking/cancellation
    cancel(req, res) {
        booking.getAllBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }
            if (result.length > 0) {
                booking.countBookingRoom(
                    req,
                    res,
                    function (err, res, result1) {
                        if (err) {
                            res.status(500).json({ message: "Lỗi truy vấn!" });
                            throw err;
                        }
                        req.session.book = null;
                        res.status(200).render("./pages/booking/cancellation", {
                            user: req.session.user,
                            message: "success",
                            data: result,
                            datax: result1,
                        });
                    }
                );
            } else {
                res.render("./pages/site/error404");
            }
        });
    }

    // [POST] /booking/cancellation
    postCancelBooking(req, res) {
        booking.postCancelBooking(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }

            if (result) {
                // req.session.book_id = null;
                res.status(200).json({ message: "Thành công" });
            }
        });
    }
}

module.exports = new BookingController();
