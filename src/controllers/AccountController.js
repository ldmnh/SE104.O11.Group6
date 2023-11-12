const authuser = require('../models/authuser.model');
const accountHistory = require('../models/accountHistory.model');

class AccountController {

    // [GET] /account/information
    information(req, res) {
        authuser.getInfoByEmail({ "email": req.session.user.email },
            (err, result) => {
                if (err) {
                    res.status(500).json({ message: 'Lỗi truy vấn!!!' });
                    throw err;
                }

                if (result.length > 0) {
                    res.status(200).render('./pages/account/information', {
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
            }
        )
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

    // [GET] /account/payment
    payment(req, res) {
        res.render('./pages/account/payment')
    }

    // [POST] /account/payment/addBank
    addBank(req, res) {
        res.send("addBank")
    }

    // [POST] /account/payment/addDebit
    addDebit(req, res) {
        res.send("addDebit")
    }

    // [POST] /account/payment/delBank
    delBank(req, res) {
        res.send("delBank")
    }

    // [POST] /account/payment/delDebit
    delDebit(req, res) {
        res.send("delDebit")
    }

    // [GET] /account/change-password
    changePass(req, res) {
        res.render('./pages/account/change-password')
    }
}

module.exports = new AccountController()