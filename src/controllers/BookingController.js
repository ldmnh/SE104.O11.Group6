const accommodation = require('../models/accommodation.model');

const bookingModel = require('../models/booking.model')
class BookingController {

    // [GET] /booking/information
    information(req, res) {
        accommodation.getAccoById({
            id: req.session.acco?.id
        }, (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                req.session.acco.star = result[0].acco_star;
                req.session.acco.name = result[0].acco_name;
                req.session.acco.type = result[0].acco_type;
                req.session.acco.exac_location = result[0].acco_exac_location;

                const nav_tree__data = [
                    { text: 'Trang chủ', link: '/' },
                    { text: 'Đặt phòng', link: null },
                    { text: 'Thông tin đặt phòng', link: '/booking/information' }
                ]
                const data = {
                    acco: req.session.acco,
                    search: req.session.search,
                    rooms: req.session.rooms,
                    book: {
                        total_room: req.session.rooms.reduce((sum, room) => sum + room.num, 0),
                        cost_before: req.session.rooms.reduce((sum, room) => sum + room.cost_before, 0),
                        cost_after: req.session.rooms.reduce((sum, room) => sum + room.cost_after, 0),
                    }
                }
                res.status(200).json({ nav_tree__data, data });
                // res.status(200).render("./pages/booking/information", { nav_tree__data, data });
            } else {
                throw new Error('Không tìm thấy khách sạn!!!');
            }
        })
    }

    // [POST] /booking/information
    informationPost(req, res) {
        const {
            book_first_name, book_last_name, book_num_adult, book_num_child,
            book_email, book_phone, book_note
        } = req.body;

        req.session.book = {
            book_first_name, book_last_name, book_num_adult, book_num_child,
            book_email, book_phone, book_note
        };
        // res.redirect('/booking/payment');
        res.status(200).json({ message: 'OK', data: req.session.book });
    }

    // [GET] /booking/payment
    payment(req, res) {
        const nav_tree__data = [{
                text: 'Trang chủ',
                link: '/'
            },
            {
                text: 'Đặt phòng',
                link: '/booking'
            },
            {
                text: 'Phương thức thanh toán',
                link: '/booking/payment'
            }
        ]

        res.status(200).render('./pages/booking/payment', {
            nav_tree__data
        })
    }

    // [POST] /bookinh/payment
    paymentPost(req, res) {

    }

    // [GET] /booking/success
    success(req, res) {
        res.render("./pages/booking/success");
    }

    // [GET] /booking/detail
    detail(req, res) {
        bookingModel.getDetail(req, res, function (err, booking, bookingDetails) {
            if (err) throw err;
            res.render('./pages/booking/detail', {
                booking: booking,
                bookingDetails: bookingDetails,
            })
            // res.send({
            //     booking: booking,
            //     bookingDetails: bookingDetails,
            // })
        })
    }

    // [GET] /booking/cancel
    cancel(req, res) {
        res.render("./pages/booking/cancellation");
    }

    // [POST] /booking/cancel
    cancelPost(req, res) {
        res.send("cancelPost");
    }
}

module.exports = new BookingController();
