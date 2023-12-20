const AccountModel = require('../models/account.model')
const authuser = require('../models/authuser.model');
const accountHistory = require('../models/accountHistory.model');

class AccountController {

    // [GET] /account/information
    accountInformation(req, res) {
        authuser.getInfoById({
            id: req.session.user?.id
        }, (err, result) => {
            if (err) {
                res.status(500).json({
                    statusCode: 500,
                    message: 'Lỗi truy vấn!!!',
                });
                throw err;
            }

            if (result.length === 0) {
                res.status(404).render('./pages/error/404')
                return;
            }

            const data = {
                first_name: result[0].au_user_first_name,
                last_name: result[0].au_user_last_name,
                email: result[0].au_user_email,
                birthday: result[0].au_user_birthday,
                sex: result[0].au_user_sex,
                avatar: result[0].au_user_avt_url
            }
            res.status(200).render('./pages/account/information', {
                message: 'Lấy thông tin tài khoản thành công',
                user: req.session.user,
                data
            })
        })
    }

    // [POST] /account/information
    putChangeInfo(req, res) {
        const id = req.session.user?.id;
        let { first_name, last_name, birthday, sex } = req.body;

        birthday = birthday.split('-').join('');
        sex = (sex == 'null') ? null : sex;

        authuser.putInfoById({
            id, first_name, last_name, birthday, sex
        }, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn!!!',
                });
                throw err;
            }

            authuser.getInfoById({ id }, (err, result) => {
                if (err) throw err;

                req.session.user = {
                    id: result[0].au_user_id,
                    first_name: result[0].au_user_first_name,
                    last_name: result[0].au_user_last_name,
                    email: result[0].au_user_email,
                    avatar: result[0].au_user_avt_url
                }
                res.redirect('/account/information')
            })
        })
    }

    // [GET] /account/history
    getBookingHistory(req, res) {
        const id = req.session.user?.id;
        const page = req.query.page ? req.query.page : 1;
        accountHistory.getDetail({ id, page }, (err, bookingDetails, totalRow, totalPage, page, limit) => {
            if (err) {
                res.status(404).redirect('/error404')
                throw err;
            }

            res.status(200).render('./pages/account/history', {
                user: req.session.user,
                bookingDetails,
                totalRow,
                totalPage,
                page,
                limit,
            })
        })
    }

    // [POST] /account/booking-history
    addRating(req, res) {
        const id = req.session.user.id;
        const { room_id, rating_point, rating_context } = req.body;
        const rating_datetime = new Date()
        AccountModel.addRating({
            room_id, rating_datetime, rating_point, rating_context, id
        }, (err, result) => {
            if (err) {
                res.status(404).redirect('/error404')
                throw err;
            }
            res.status(200).json({ message: "Thành công" });
        })
    }

    // [GET] /account/card
    getCards(req, res) {
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

                const data = {
                    bank_cards: req.session.user?.bank_cards,
                    debit_cards: req.session.user?.debit_cards
                }

                res.status(200).render('./pages/account/card', {
                    user: req.session.user,
                    data
                })
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
        })
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
        })
    }

    // [POST] /account/card/delBank
    delBank(req, res) {
        const { bank_id } = req.body
        AccountModel.delBank({
            "id": req.session.user?.id,
            bank_id
        }, (err, result) => {
            if (err) throw err;
            res.status(200).redirect('/account/card')
        })
    }

    // [POST] /account/card/delDebit
    delDebit(req, res) {
        const { debit_id } = req.body
        AccountModel.delDebit({
            "id": req.session.user?.id,
            debit_id
        }, (err, result) => {
            if (err) throw err;
            res.status(200).redirect('/account/card')
        })
    }

    // [GET] /account/change-password
    changePass(req, res) {
        res.status(200).render('./pages/account/change-password', { user: req.session.user })
    }
}


module.exports = new AccountController()
