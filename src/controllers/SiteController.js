const db = require('../config/db');

class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/site/register', { title })
    }

    // [GET] /login
    showLoginForm(req, res) {
        const title = 'Đăng nhập'
        res.render("./pages/site/login.ejs", { title })
        // errors: req.flash("errors")
    };

    // [POST] /login
    login(req, res) {
        const { email, password } = req.body;
        db.query(
            'SELECT * FROM authuser WHERE au_user_email = ? AND au_user_pass = ?',
            [email, password],
            function (error, results, fields) {
                if (error) throw error;
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.email = email;
                    res.redirect('/');
                } else {
                    const conflictError = 'Email hoặc mật khẩu không chính xác';
                    res.send(conflictError);
                }
            }
        );
    }

    // [GET] /about
    about(req, res) {
        const nav_tree__data = [
            { text: 'Trang chủ', link: '/' },
            { text: 'Giới thiệu', link: '/about' }
        ]
        res.render('./pages/site/about', { nav_tree__data })
    }

    // [GET] /forgot-password
    showForgotForm(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/site/forgot-password', { title })
    }

    // [POST] /forgot-password
    forgot(req, res, next) {
        const { email } = req.body;
        db.query(
            'SELECT * FROM authuser WHERE au_user_email = ?',
            [email],
            (err, result, fields) => {
                if (err) throw err;
                if (result.length > 0) {
                    req.session.email = email;
                    res.status(200).json({ message: 'Email đã được gửi' });
                    next();
                } else {
                    res.status(404).json({ message: 'Email không tồn tại' });
                }
            }
        );
    }

    // [GET] /reset-password
    showResetForm(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/site/reset-password', { title })
    }

    // [PUT] /reset-password
    reset(req, res) {
        const { password } = req.body;
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = 'UPDATE authuser SET au_user_pass = ? WHERE au_user_email = ?';
        const params = [password, req.session.email];

        db.query(sql, params, (err, result, fields) => {
            if (err) {
                res.status(500).json({ message: 'Đặt lại mật khẩu thất bại', });
                throw err;
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ message: 'Không tìm thấy email!!!', });
                } else {
                    res.status(200).json({ message: 'Đặt lại mật khẩu thành công', });
                }
            }
        });
    }

    // [GET] /search-results
    search(req, res) {
        const title = 'Kết quả tìm kiếm'
        res.render('./pages/site/search-results', { title })
    }

}

module.exports = new SiteController()