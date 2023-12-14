const AuthUser = require("../models/authuser.model");
const bcrypt = require("bcryptjs");

class AuthController {
    // [GET] /auth/register
    register(req, res) {
        res.render("./pages/auth/register");
    }

    // [POST] /auth/register
    registerPost(req, res) {
        const {
            au_user_last_name,
            au_user_first_name,
            au_user_email,
            au_user_pass
        } = req.body

        AuthUser.checkEmail({ email: au_user_email }, async function (err, result) {
            if (err) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Error1'
                })
            }

            if (result.length != 0) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Email đã được sử dụng'
                })
            }

            if (result.length === 0) {
                
                await AuthUser.insertUser({au_user_last_name,
                    au_user_first_name,
                    au_user_email,
                    au_user_pass}, function(err, result) {
                        if (err) {
                            return res.status(404).json({
                            status: 'error',
                            message: 'Error2'
                        })}

                        if (result) {
                            return res.status(200).json({
                                status: 'success',
                                message: 'Register successfully'
                            })
                        }
                    })
            }
        });
    }

    // [GET] /auth/login
    login(req, res) {
        res.status(200).render("./pages/auth/login");
    }

    // [POST] /auth/login
    loginPost(req, res) {
        const { email, password } = req.body;
        AuthUser.findByEmail(email, async (err, user) => {
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
                if (await bcrypt.compare(password, user.au_user_pass)) {
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
                } else {
                    return res.status(401).json({
                        status: "error1",
                        error: "Mật khẩu không chính xác!",
                    });
                }
                // })
            }
        });
    }

    // [GET] /auth/forgot-password
    forgot(req, res) {
        res.status(200).render("./pages/auth/forgot");
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) {
        const { email } = req.body;

        AuthUser.checkEmail({ email }, (err, result) => {
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

        AuthUser.putResetPassByEmail({
            email,
            password,
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
        });
    }

    // [GET] /auth/logout
    logout(req, res) {
        delete req.session.user;
        // Chuyển hướng người dùng về trang đăng nhập sau khi đăng xuất thành công
        return res.redirect("/");
    }

    // [POST] /auth/change-password
    async changePassPost(req, res) {
        const { oldPass, newPass } = req.body;

        // console.log(oldPass, newPass);

        AuthUser.checkEmail({
            email: req.session.user?.email
        }, async (err, result) => {
            if (err) {
                res.status(500).json({
                    message: "Lỗi truy vấn ở AuthUser.checkEmail!!!",
                });
                throw err;
            }

            if (result.length === 0) {
                res.status(404).json({
                    message: "Không tìm thấy email!!!",
                });
                return;
            }

            const pass = result[0]?.au_user_pass;
            console.log('pass: ', pass, '\noldPass: ', oldPass)
            if (!(await bcrypt.compare(oldPass, pass))) {
                res.status(404).json({
                    status: 404,
                    message: "Mật khẩu cũ không chính xác!!!",
                });
            } else {
                AuthUser.putResetPassByEmail({
                    email: req.session.user?.email,
                    password: newPass
                }, (err, result) => {
                    if (err) {
                        res.status(500).json({
                            status: 500,
                            message: "Lỗi truy vấn ở putResetPassByEmail!!!",
                        });
                        throw err;
                    }

                    res.status(200).json({
                        status: 200,
                        message: "Cập nhật thông tin tài khoản thành công",
                    });
                });
            }
        })
    }
}

module.exports = new AuthController();
