const User = require('../models/user');
const bcrypt = require('bcrypt');
require('../models/db')

class SiteController {
    // [GET] /
    index(req, res) {
        res.send('trang chu')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/register.ejs', { title })
    }

    // [GET] /login
    showLoginForm(req, res) {
        res.render('./pages/login.ejs');
    }
    login(req, res) {
        const { email, password } = req.body;

        if (email && password) {
            User.findByEmail(email, (err, user) => {
                if (!user) {
                    res.redirect('/login');
                } else {
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (result == true) {
                            req.session.loggedin = true;
                            req.session.user = user;
                            res.redirect('/');
                        } else {
                            // A user with that email address does not exists
                            const conflictError = 'Thông tin không hợp lệ';
                            res.render('./pages/login.ejs', { email, password, conflictError });
                        }
                    })
                }
            })
        } else {
            // A user with that email address does not exists
            const conflictError = 'Thông tin không hợp lệ';
            res.render('./pages/login.ejs', { email, password, conflictError });
        }
    }

    logout(req, res) {
        req.session.destroy((err) => {
            if (err)
                res.redirect('/500');
                // res.send('loi!')
            res.redirect('/');
        })
    }

}

module.exports = new SiteController()