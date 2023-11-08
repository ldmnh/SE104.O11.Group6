const db = require('../config/db');

class AccountController {

    // [GET] /account/
    information(req, res) {
        res.render('./pages/account/index')
    }

    // [PUT] /account/
    informationPut(req, res) {
        res.send("indexPut")
    }

    // [GET] /account/booking-history
    history(req, res) {
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = `
        SELECT
            A.au_user_id,
            C.room_id,
        FROM AUTHUSER AS A 
        INNER JOIN BOOKING AS B ON A.au_user_id = B.au_user_id
        INNER JOIN BOOKINGDETAIL AS C ON B.book_id = C.book_id
        WHERE A.au_user_email = ?
        `;
        const params = [req.session.email];

        db.query(sql, params, (err, result, fields) => {
            if (err) throw err;
            if (result.length() > 0) {

                res.status(200).render('./pages/account/booking-history', {
                    message: "Successful",
                    data: result
                })
            }
            else
                res.status(404).json({
                    message: "Failed"
                })
        })
    }

    // [POST] /account/booking-history
    addReview(req, res) {
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const {
            rating_point,
            rating_context,
        } = req.body

        db.query(sql, params, (err, results,) => {
            if (err) throw err;
            res.status(200).redirect('/account/booking-history')
        })
        // TODO: Sẽ thay thế bằng procedure nhận thêm au_user_email, id_room
        const sql = `INSERT INTO rating SET ?`;
        const params = {
            rating_point: rating_point,
            rating_context: rating_context,
        };

    }

    // [GET] /account/payment
    paymentAccount(req, res) {
        res.render('./pages/account/payment')
    }

    // [GET] /account/change-password
    changePassword(req, res) {
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