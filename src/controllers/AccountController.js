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
    showPayment(req, res) {
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = `
            SELECT BANK_NAME as 'NAME', BANK_NUM AS 'NUM', 'BANK' as 'TYPE'
            FROM view_BANKCARD AS A
            INNER JOIN AUTHUSER AS B
                ON A.au_user_id = B.au_user_id
            WHERE B.au_user_email = ?
            
            UNION
            
            SELECT 'SACOMBANK' AS 'NAME', DEBIT_NUM AS 'NUM', 'DEBIT' as 'TYPE'
            FROM view_DEBITCARD AS A
            INNER JOIN AUTHUSER AS B
                ON A.au_user_id = B.au_user_id
            WHERE B.au_user_email = ?`;
        const params = [req.session.email, req.session.email];

        db.query(sql, params, (err, result, fields) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!', });
                throw err;
            }
            // res.status(200).json(result);
            if (result.length > 0) {
                res.status(200).render('./pages/account/payment', {
                    message: 'Lấy thông tin phương thức thanh toán thành công',
                    data: result
                });
                console.log(result);
            } else {
                res.status(404).json({ message: 'Không tìm thấy tài khoản!!!', });
            }
        });
    }

    // [POST] /pages/account/payment
    addBankCard(req, res) {
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const {
            bank_name,
            bank_branch,
            bank_num,
            bank_name_pers
        } = req.body

        // TODO: Sẽ thay thế bằng procedure nhận thêm au_user_email
        const sql = `INSERT INTO bankcard SET ?`;
        const params = {
            bank_name: bank_name,
            bank_brach: bank_branch,
            bank_num: bank_num,
            bank_name_pers: bank_name_pers
        };

        db.query(sql, params, (err, results,) => {
            if (err) throw err;
            res.status(200).redirect('/account/payment')
        })
    }

    addDebitCard(req, res) {
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const {
            debit_num,
            debit_end_date,
            debit_CCV,
            debit_name,
            debit_address,
            debit_postal,
        } = req.body

        const sql = `INSERT INTO debitcard SET ?`;
        const params = {
            debit_num: debit_num,
            debit_end_date: debit_end_date,
            debit_CCV: debit_CCV,
            debit_name: debit_name,
            debit_address: debit_address,
            debit_postal: debit_postal,
        };

        db.query(sql, params, (err, results,) => {
            if (err) throw err;
            res.status(200).redirect("/account/payment")
        })
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