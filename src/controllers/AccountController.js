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
        const {
            // room_id section trước lưu lại
            room_id,
            rating_point,
            rating_context,
        } = req.body;

        AccountModel.addReview({
            room_id,
            rating_point,
            rating_context,
            id: req.session.user?.id
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                message: "Thêm đánh giá phòng thành công",
            })
        })

    }



    // [GET] /account/change-password
    showChangeForm(req, res) {
        res.render('./pages/account/change-password')
    }

    // [GET] /account/card
    card(req, res) {
        AccountModel.cardAccount({
            "id": req.session.user?.id,
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                massage: "Lấy thông tin thẻ thành công",
                data: result
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

            res.status(200).json({
                message: "Thêm thẻ ngân hàng thành công",
            })
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

            res.status(200).json({
                message: "Thêm thẻ tín dụng thành công",
            })
        })
    }

    // [PUT] /account/card/delBank
    delBank(req, res) {
        AccountModel.delBank({
            "id": req.session.user?.id,
            "bank_id": "4"
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                massage: "Xóa thẻ ngân hàng thành công"
            })
        })
    }

    // [PUT] /account/card/delDebit
    delDebit(req, res) {
        AccountModel.delDebit({
            "id": req.session.user?.id,
            "debit_id": "4"
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                massage: "Xóa thẻ tín dụng thành công"
            })
        })
    }

    // [GET] /account/change-password
    changePass(req, res) {
        res.render('./pages/account/change-password')
    }
}

module.exports = new AccountController();
