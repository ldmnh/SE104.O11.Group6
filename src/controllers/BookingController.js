const accommodation = require('../models/accommodation.model');
const authuser = require('../models/authuser.model');
const booking = require('../models/booking.model');

const bookingModel = require('../models/booking.model')
class BookingController {

	// [GET] /booking/information
	information(req, res) {
		const data = {

		}

		res.render('./pages/booking/information', { data })
	}

	// [POST] /booking/information
	informationPost(req, res) {
		// const {
		// 	book_first_name,
		// 	book_last_name,
		// 	book_num_adult,
		// 	book_num_child,
		// 	book_email,
		// 	book_phone,
		// 	book_note } = req.body

		// req.session.book = {
		// 	'book_first_name': book_first_name,
		// 	'book_last_name': book_last_name,
		// 	'book_num_adult': book_num_adult,
		// 	'book_num_child': book_num_child,
		// 	'book_email': book_email,
		// 	'book_phone': book_phone,
		// 	'book_note': book_note
		// }
		// res.redirect('/booking/payment')
		res.send('booking-informationPost')
	}

    // [GET] /booking/payment
    payment(req, res) {
        // authuser.getBankCardsById({
        //     id: req.session.user?.id
        // }, (err, result) => {
        //     if (err) throw err;

        //     if (result.length > 0) {
        //         req.session.user.bank_cards = result;
        //     } else {
        //         req.session.user.bank_cards = [];
        //     }

        //     authuser.getDebitCardsById({
        //         id: req.session.user?.id
        //     }, (err, result) => {
        //         if (err) throw err;

        //         if (result.length > 0) {
        //             req.session.user.debit_cards = result;
        //         } else {
        //             req.session.user.debit_cards = [];
        //         }

        //         const nav_tree__data = [
        //             { text: 'Trang chủ', link: '/' },
        //             { text: 'Đặt phòng', link: null },
        //             { text: 'Phương thức thanh toán', link: '/booking/payment' }
        //         ]

        //         const data = {
        //             acco: req.session.acco,
        //             search: req.session.search,
        //             rooms: req.session.rooms,
        //             book: {
        //                 total_room: req.session.rooms.reduce((sum, room) => sum + room.num, 0),
        //                 cost_before: req.session.rooms.reduce((sum, room) => sum + room.cost_before, 0),
        //                 cost_after: req.session.rooms.reduce((sum, room) => sum + room.cost_after, 0),
        //             },
        //             bank_cards: req.session.user?.bank_cards,
        //             debit_cards: req.session.user?.debit_cards
        //         }
        //         res.status(200).render('./pages/booking/payment', { nav_tree__data, data })
        //         // res.status(200).json({ nav_tree__data, data })
        //     })
        // })
        res.status(200).render('./pages/booking/payment')
    }

    // [POST] /bookinh/payment
    paymentPost(req, res) {
        // const {
        //     pay_id     // Phương thức thanh toán 0: tiền mặt, 1: thẻ ngân hàng, 2: thẻ tín dụng
        // } = req.body;

        // req.session.book.pay_id = pay_id;

        // booking.postInfo({
        //     acco_id: req.session.acco?.id,
        //     au_user_id: req.session.user?.id,
        //     book_datetime: new Date(),
        //     book_start_datetime: req.session.search?.check_in,
        //     book_end_datetime: req.session.search?.check_out,
        //     book_num_adult: req.session.search?.adult,
        //     book_num_child: req.session.search?.child,
        //     book_cost_before: req.session.rooms.reduce((sum, room) => sum + room.cost_before, 0),
        //     book_cost_after: req.session.rooms.reduce((sum, room) => sum + room.cost_after, 0),
        //     book_first_name: req.session.book?.first_name,
        //     book_last_name: req.session.book?.last_name,
        //     book_email: req.session.book?.email,
        //     book_phone: req.session.book?.phone,
        //     book_note: req.session.book?.note,
        //     pay_id: req.session.book?.pay_id,
        //     cancel_cost: 0,
        //     book_status: 0,
        //     book_is_paid: req.session.book?.pay_id ? 0 : 1,
        // }, (err, result) => {
        //     if (err) throw err;

        //     if (result.length > 0) {
        //         req.session.book.id = result[0].insertId;

        //         req.session.rooms?.forEach(room => {
        //             booking.postInfoDetailByIds({
        //                 book_id: req.session.book?.id,
        //                 room_id: room.id,
        //                 book_room_cost_before: room.cost_before,
        //                 book_room_cost_after: room.cost_after,
        //                 book_num_room: room.num
        //             }, (err, result) => {
        //                 if (err) throw err;

        //                 if (result.length > 0) {
        //                     res.redirect('/booking/success');
        //                 } else {
        //                     throw new Error('Đặt phòng thất bại!!!');
        //                 }
        //             })
        //         })
        //     }
        // })
        res.status(200).json({ message: "/booking/paymentPost" })
    }

    // [GET] /booking/success
    success(req, res) {
        res.status(200).render("./pages/booking/success");
    }

    // [GET] /booking/detail
    detail(req, res) {
        // bookingModel.getDetail(req, res, function (err, booking, bookingDetails) {
        //     if (err) throw err;
        //     res.render('./pages/booking/detail', {
        //         booking: booking,
        //         bookingDetails: bookingDetails,
        //     })
        // res.send({
        //     booking: booking,
        //     bookingDetails: bookingDetails,
        // })
        // })
        res.render('./pages/booking/detail')
    }

    // [GET] /booking/cancel
    cancel(req, res) {
        res.status(200).render("./pages/booking/cancellation");
    }

    // [POST] /booking/cancel
    cancelPost(req, res) {
        res.status(200).json({ message: "/booking/cancelPost" });
    }
}

module.exports = new BookingController()
