const db = require('../config/db/connect');
const AccountModel = require('../models/accountModel')
const authuser = require('../models/authuser.model');
const accountHistory = require('../models/accountHistory.model');

class AccountController {
    // [GET] /account/information
    information(req, res) {
        res.render("./pages/account/information");
    }

    // [GET] /account/information
    information(req, res) {
        authuser.getInfoByEmail({
            "email": req.session.user.email
        }, (err, result) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!' });
                throw err;
            }

            if (result.length > 0) {
                // res.status(200).render('./pages/account/information', {
                res.status(200).json({
                    message: 'Lấy thông tin tài khoản thành công',
                    data: {
                        first_name: result[0].au_user_first_name,
                        last_name: result[0].au_user_last_name,
                        email: result[0].au_user_email,
                        birthday: result[0].au_user_birthday,
                        sex: result[0].au_user_sex,
                        avatar: result[0].au_user_avt_url
                    }
                });
            } else {
                res.status(404).json({
                    message: 'Không tìm thấy tài khoản!!!'
                });
            }
        })
    }

    // [PUT] /account/information
    informationPut(req, res) {
        const {
            account_first_name,
            account_last_name,
            account_birthday,
            account_sex
        } = req.body;

        authuser.putInfoByEmail({
            "email": req.session.user.email,
            "first_name": account_first_name,
            "last_name": account_last_name,
            "birthday": account_birthday,
            "sex": account_sex
        }, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn!!!'
                });
                throw err;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    message: 'Không tìm thấy tài khoản!!!'
                });
            } else {
                res.status(200).json({
                    message: 'Cập nhật thông tin tài khoản thành công'
                });
            }
        })
    }

    // [GET] /account/history
    history(req, res) {
        accountHistory.getDetail(req, res, function (err, bookingDetail) {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn getBookingDetails!!!'
                });
                throw err;
            }
            // res.send({bookingDetail: bookingDetail,})
            res.status(200).render('./pages/account/history', {
                bookingDetail: bookingDetail
            })
        })
    }

    // [POST] /account/booking-history
    addReview(req, res) {
        AccountModel.addReview(req, res, function (err, res, result) {
            if (err) throw err;
            res.status(200).redirect('/');
        })

    }



    // [GET] /account/change-password
    showChangeForm(req, res) {
        res.render('./pages/account/change-password')
    }

    // [GET] /account/card
    card(req, res) {
        AccountModel.cardAccount(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!', });
                throw err;
            }
            res.status(200).render('./pages/account/card', {
                message: 'Lấy thông tin phương thức thanh toán thành công',
                data_card: result,
            });
            // res.send({
            //     message: 'Lấy thông tin phương thức thanh toán thành công',
            //     data_card: result,
            // })
        })
    }


    // [POST] /account/card/addBank
    addBank(req, res) {
        AccountModel.addBank(req, res, function (err, res, result) {
            if (err) throw err;
            res.status(200).render('./pages/account/card-fill', {
                message: 'Thêm thẻ ngân hàng thành công',
                // data_bank: result,
            })
        })
    }

    // [POST] /account/card/addDebit
    addDebit(req, res) {
        AccountModel.addDebit(req, res, function (err, res, data_debit) {
            if (err) throw err;
            res.status(200).render('./pages/account/card-fill', {
                massage: "Thêm thẻ tín dụng thành công",
            })
        })
    }

    // [PUT] /account/card/delBank
    delBank(req, res) {
        AccountModel.delBank(req, res, function (err, res, data_del_bank) {
            if (err) throw err;
            res.status(200).redirect('/');
        })
    }

    // [PUT] /account/card/delDebit
    delDebit(req, res) {
        AccountModel.delDebit(req, res, function (err, res, data_del_debit) {
            if (err) throw err;
            res.status(200).redirect('/');
        })

    // [GET] /account/change-password
    changePass(req, res) {
        res.render('./pages/account/change-password')
    }
}

module.exports = new AccountController();
