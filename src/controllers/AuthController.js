/**
 * AuthController class handles authentication related requests such as register, login, forgot password, reset password, logout, and change password.
 * @class
 * @property {function} register - Renders the register page.
 * @property {function} registerPost - Handles the registration form submission.
 * @property {function} login - Renders the login page.
 * @property {function} loginPost - Handles the login form submission and sets the email in the session.
 * @property {function} forgot - Renders the forgot password page.
 * @property {function} forgotPost - Handles the forgot password form submission and sets the email in the session.
 * @property {function} reset - Renders the reset password page.
 * @property {function} resetPost - Handles the reset password form submission and updates the password in the database.
 * @property {function} logout - Clears the user, booking, rooms, and acco from the session and redirects to the home page.
 * @property {function} changePassPut - Handles the change password form submission and updates the password in the database.
 */

const authuser = require('../models/authuser.model');

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
        req.session.email = req.body.email;
        res.send("loginPost")
    }

    // [GET] /auth/forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/auth/forgot', { title })
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) {
        const { email } = req.body;

        authuser.checkEmail({ email: email }, (err, result) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!' });
                throw err;
            }

            if (result.length === 0) {
                res.status(404).json({ message: 'Không tìm thấy email!!!' });
            } else {
                req.session.emailOfForgot = email;
                res.status(200).json({ message: 'Gửi liên kết đặt lại mật khẩu thành công' });
            }
        });
    }

    // [GET] /auth/reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/auth/reset', { title })
    }

    // [PUT] /auth/reset-password
    resetPost(req, res) {
        const email = req.session.emailOfForgot;
        const { password } = req.body;

        authuser.putResetPassByEmail({ email: email, password: password }, (err, result) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!' });
                throw err;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy tài khoản!!!' });
            } else {
                res.status(200).json({ message: 'Cập nhật thông tin tài khoản thành công' });
            }
        })
    }

    // [GET] /auth/logout
    logout(req, res) {
        req.session.user = null;
        req.session.booking = null;
        req.session.rooms = null;
        req.session.acco = null;

        res.status(200).redirect('/')
    }

    // [PUT] /auth/change-password
    changePassPut(req, res) {
        const { oldPass, newPass } = req.body;
        const email = req.session.user?.email;
        if (!email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        authuser.putPass({ email, oldPass, newPass }, (err, result) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!' });
                throw err;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Không tìm thấy tài khoản!!!' });
            } else {
                res.status(200).json({ message: 'Cập nhật thông tin tài khoản thành công' });
            }
        })
    }

}

module.exports = new AuthController()