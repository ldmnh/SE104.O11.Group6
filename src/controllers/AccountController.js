const AccountModel = require('../models/account.model')
const authuser = require('../models/authuser.model');
const accountHistory = require('../models/accountHistory.model');

class AccountController {

    // [GET] /account/information
    information(req, res) {
        authuser.getInfoById({
            id: req.session.user?.id
        }, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn!!!',
                });
                throw err;
            }

            if (result.length > 0) {
                const data = {
                    first_name: result[0].au_user_first_name,
                    last_name: result[0].au_user_last_name,
                    email: result[0].au_user_email,
                    birthday: result[0].au_user_birthday?.toISOString().split('T')[0] ?? null,
                    sex: result[0].au_user_sex,
                    avatar: result[0].au_user_avt_url
                }
                res.status(200).render('./pages/account/information', {
                // res.status(200).json({
                    message: 'Lấy thông tin tài khoản thành công',
                    data
                })
            } else {
                res.status(404).json({
                    message: 'Không tìm thấy tài khoản!!!',
                });
            }
        })
    }

    // [PUT] /account/information
    informationPut(req, res) {
        // const id = req.session.user?.id;
        // const { first_name, last_name, birthday, sex } = req.body;

        // authuser.putInfoById({
        //     id, first_name, last_name, birthday, sex
        // }, (err, result) => {
        //     if (err) {
        //         res.status(500).json({
        //             message: 'Lỗi truy vấn!!!',
        //         });
        //         throw err;
        //     }

        //     if (result.affectedRows === 0) {
        //         res.status(404).json({
        //             message: 'Không tìm thấy tài khoản!!!',
        //         });
        //     } else {
        //         res.status(200).json({
        //             message: 'Cập nhật thông tin tài khoản thành công',
        //         });
        //     }
        // })
        res.status(200).json({ message: "/account/informationPut" })
    }

    // [GET] /account/history
    history(req, res) {
        accountHistory.getDetail(req, res, function (err, user, bookingDetails) {
            if (err) {
                res.status(404).render('./pages/site/error404')
                // res.status(500).json({ message: 'Lỗi truy vấn getBookingDetails!!!' });
                throw err;
            }

            // res.send({bookingDetails: bookingDetails})
            res.status(200).render('./pages/account/history', {
                user: user,
                bookingDetails: bookingDetails
            })
        })
    }

    // [POST] /account/booking-history
    addReview(req, res) {
        const id = req.session.user?.id;
        const { room_id, rating_point, rating_context } = req.body;

        AccountModel.addReview({
            room_id, rating_point, rating_context, id
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({ message: "Thêm đánh giá phòng thành công" })
        })
        // res.status(200).json({ message: "/account/addReview" })
    }

    // [GET] /account/card
    card(req, res) {

        authuser.getBankCardsById({
            id: req.session.user?.id
        }, (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                req.session.user.bank_cards = result;
            } else {
                req.session.user.bank_cards = [];
            }

            authuser.getDebitCardsById({
                id: req.session.user?.id
            }, (err, result) => {
                if (err) throw err;

                if (result.length > 0) {
                    req.session.user.debit_cards = result;
                } else {
                    req.session.user.debit_cards = [];
                }

                const nav_tree__data = [
                    { text: 'Trang chủ', link: '/' },
                    { text: 'Đặt phòng', link: null },
                    { text: 'Phương thức thanh toán', link: '/booking/payment' }
                ]

                const data = {
                    bank_cards: req.session.user?.bank_cards,
                    debit_cards: req.session.user?.debit_cards
                }
                // res.status(200).render('./pages/account/card', { data })

                res.status(200).render('./pages/account/card', { nav_tree__data, data })
                // res.status(200).json({ nav_tree__data, data })
            })
        })
    }

    // [POST] /account/card/addBank
    addBank(req, res) {
        const {
            bank_name,
            bank_branch,
            bank_num,
            bank_name_pers
        } = req.body;

        AccountModel.addBank({
            bank_name,
            bank_num,
            bank_branch,
            bank_name_pers,
            id: req.session.user?.id
        }, (err, result) => {
            if (err) throw err;

            res.status(200).redirect('/account/card')
            // json({message: "Thêm thẻ ngân hàng thành công",
        })
        // res.status(200).json({ message: "/account/addBank" })
    }

    // [POST] /account/card/addDebit
    addDebit(req, res) {
        const {
            debit_num,
            debit_end_date,
            debit_CCV,
            debit_name,
            debit_address,
            debit_postal
        } = req.body;

        AccountModel.addDebit({
            debit_num,
            debit_end_date,
            debit_CCV,
            debit_name,
            debit_address,
            debit_postal,
            id: req.session.user?.id
        }, (err, result) => {
            if (err) throw err;
            res.status(200).redirect('/account/card')
            // res.status(200).json({
            //     message: "Thêm thẻ tín dụng thành công",
            // })
        })
        // res.status(200).json({ message: "/account/addDebit" })
    }

    // [PUT] /account/card/delBank
    delBank(req, res) {
        const { bank_id } = req.body
        AccountModel.delBank({
            "id": req.session.user?.id,
            bank_id                    // bank_id lấy từ req.body
        }, (err, result) => {
            if (err) throw err;
            res.status(200).redirect('/account/card')
            // res.status(200).json({
            //     massage: "Xóa thẻ ngân hàng thành công"
            // })
        })
        // res.status(200).json({ message: "/account/delBank" })
    }

    // [POST] /account/card/delDebit
    delDebit(req, res) {
        const { debit_id } = req.body
        AccountModel.delDebit({
            "id": req.session.user?.id,
            debit_id                   // bank_id lấy từ req.body
        }, (err, result) => {
            if (err) throw err;
            res.status(200).redirect('/account/card')
            // res.status(200).json({
            //     massage: "Xóa thẻ tín dụng thành công"
            // })
        })
        // res.status(200).json({ message: "/account/delDebit" })
        // res.status(200).redirect('/account/card')
    }

    // [GET] /account/change-password
    changePass(req, res) {
        res.status(200).render('./pages/account/change-password')
    }
}

module.exports = new AccountController()
