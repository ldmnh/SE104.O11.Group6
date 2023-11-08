const db = require('../config/db/connect');

class AuthController {

    // [GET] /auth/register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/auth/register', { title })
    }

    // [POST] /auth/register
    registerPost(req, res) {
        res.send("registerPost")
    }

    // [GET] /auth/login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/auth/login', { title })
    }

    // [POST] /auth/login
    loginPost(req, res) {
        // const title = 'Đăng nhập'
        // res.render('./pages/site/login', { title })
    }

    // [GET] /auth/forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/auth/forgot', { title })
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) { 
        res.send("forgotPost")
    }

    // [GET] /auth/reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/auth/reset', { title })
    }

    // [POST] /auth/reset-password
    resetPost(req, res) {
        res.send("resetPost")
    }

    // [GET] /auth/logout
    logout(req, res) {
        res.redirect('/')
    }

    // [POST] /auth/change
    changePut(req, res) {
        const { oldPass, newPass } = req.body;
        const email = req.session.email;
        if (!email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = `
            UPDATE AUTHUSER
            SET au_user_pass = ?
            WHERE au_user_email = ?
                AND au_user_pass = ?`;
        const params = [newPass, email, oldPass];

        db.query(sql, params, (err, result, fields) => {
            if (err) { 
                res.status(500).json({ message: "Lỗi cơ sở dữ liệu!!!" });
                throw err;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Không tìm thấy tài khoản!!!" });
            } else {
                res.status(200).json({ message: "Cập nhật thông tin tài khoản thành công" });
            }
        });
    }

}

module.exports = new AuthController()