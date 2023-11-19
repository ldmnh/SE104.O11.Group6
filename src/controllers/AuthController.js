const AuthUser = require("../models/authuser.model");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");

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

class AuthController {
    // [GET] /auth/register
    register(req, res) {
        res.render("./pages/auth/register");
    }

    // [POST] /auth/register
    registerPost(req, res) {
        authuser.checkRegister(req, res);
    }

    // [GET] /auth/login
    login(req, res) {
        res.status(200).render("./pages/auth/login");
    }

    // [POST] /auth/login
    loginPost(req, res) {
        const { email, password } = req.body;
        AuthUser.findByEmail(email, (err, user) => {
            if (err) {
                res.status(500).json({ message: "Lỗi truy vấn!" });
                throw err;
            }
            if (!user) {
                return res.status(404).json({
                    status: "error",
                    error: "Email không tồn tại!",
                });
            } else {
                if (bcrypt.compare(password, user.au_user_pass)) {
                // if (password === user.au_user_pass) {
                    req.session.user = {
                        id: user.au_user_id,
                        first_name: user.au_user_first_name,
                        last_name: user.au_user_last_name,
                        email: user.au_user_email,
                        avatar: user.au_user_avt_url,
                    };
                    return res.status(200).json({
                        status: "success",
                        success: "Thành công",
                        data: user,
                    });
                    // res.redirect('/')
                } else {
                    return res.status(401).json({
                        status: "error1",
                        error: "Mật khẩu không chính xác!",
                    });
                }
                // })
            }
        });
        // req.session.email = req.body.email;
        // res.send("loginPost")
    }

    // [GET] /auth/forgot-password
    forgot(req, res) {
        res.status(200).render("./pages/auth/forgot");
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) {
        const { email } = req.body;

        authuser.checkEmail({
            email: email,
        }, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: "Lỗi truy vấn!!!",
                });
                throw err;
            }

            if (result.length === 0) {
                res.status(404).json({
                    message: "Không tìm thấy email!!!",
                });
            } else {
                req.session.emailOfForgot = email;
                res.status(200).json({
                    message: "Gửi liên kết đặt lại mật khẩu thành công",
                });
            }
        });
    }

    // [GET] /auth/reset-password
    reset(req, res) {
        res.status(200).render("./pages/auth/reset");
    }

    // [POST] /auth/reset-password
    resetPost(req, res) {
        const email = req.session.emailOfForgot;
        const { password } = req.body;

        authuser.putResetPassByEmail({
            email: email,
            password: password,
        }, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: "Lỗi truy vấn!!!",
                });
                throw err;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    message: "Không tìm thấy tài khoản!!!",
                });
            } else {
                res.status(200).json({
                    message: "Cập nhật thông tin tài khoản thành công",
                });
            }
        }
        );
    }

    // [GET] /auth/logout
    logout(req, res) {
        // req.session.user = null
        // req.session.booking = null
        // req.session.rooms = null
        // req.session.acco = null

        // res.status(200).redirect('/');
        res.status(200).json({ message: "/auth/logout" });
    }

    // [PUT] /auth/change-password
    changePassPut(req, res) {
        // const { oldPass, newPass } = req.body;
        // const email = req.session.user?.email;

        authuser.putPass(
            {
                email,
                oldPass,
                newPass,
            },
            (err, result) => {
                if (err) {
                    res.status(500).json({
                        message: "Lỗi truy vấn!!!",
                    });
                    throw err;
                }

                if (result.affectedRows === 0) {
                    res.status(404).json({
                        message: "Không tìm thấy tài khoản!!!",
                    });
                } else {
                    res.status(200).json({
                        message: "Cập nhật thông tin tài khoản thành công",
                    });
                }
            }
        );
    }
}

module.exports = new AuthController();
