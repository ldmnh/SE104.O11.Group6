const db = require('../config/db');

class AccountController {

    // [GET] /account/
    index(req, res) {
        res.render('./pages/account/index')
    }

    // [GET] /account/booking-history
    bookingHistory(req, res) {
        res.render('./pages/account/booking-history')
    }

    // [GET] /account/payment
    paymentAccount(req, res) {
        res.render('./pages/account/payment')
    }

    // [GET] /account/change-password
    showChangeForm(req, res) {
        res.render('./pages/account/change-password')
    }

    // [PUT] /account/change-password
    changePassword(req, res) {
        const { oldPassword, newPassword } = req.body;
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = 'UPDATE authuser SET au_user_pass = ? WHERE au_user_email = ? AND au_user_pass = ?';
        const params = [newPassword, req.session.email, oldPassword];

        db.query(sql, params, (err, result, fields) => {
            if (err) {
                res.status(500).json({ message: 'Đổi mật khẩu thất bại', });
                throw err;
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ message: 'Không tìm thấy tài khoản!!!', });
                } else {
                    res.status(200).json({ message: 'Đổi mật khẩu thành công' });
                }
            }
        });
    }

}

module.exports = new AccountController()