
const db = require('../config/db');
// const User = require('../models/loginServer');
// const { validationResult } = require('express-validator');
const { query } = require('express');
// const loginService = require('../models/loginServer')
// const { check } = require('express-validator')

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
        // const title = 'Đăng nhập'
        res.render("./pages/login.ejs")
            // errors: req.flash("errors")
        };

    login(req, res) {
        const { email, password } = req.body
        // Execute SQL query that'll select the account from the database based on the specified username and password
        db.query('SELECT * FROM authuser WHERE au_user_email = ? AND au_user_pass = ?', [email, password], function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.email = email;
                res.redirect('/');
            } else {
                const conflictError = 'Email hoặc mật khẩu không chính xác';
                res.send(conflictError)
                res.render('./pages/login.ejs', { email, password, conflictError });
            }
        });
    }



//             if (user == null) {
//                 return done(null, false, { message: "No user found with that email" })
//             }
//             try {
//                 if (await bcrypt.compare(password, user.password)) {
//                     return done(null, user)
//                 } else {
//                     return done(null, false, { message: "Password Incorrect" })
//                 }
//             } catch (e) {
//                 console.log(e);
//                 return done(e)
//             }
//         }
//         passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUsers))
//         passport.serializeUser((user, done) => done(null,))
//         passport.deserializeUser((id, done) => {
//             return done(null, getUserById(id))
//         })
//     }
// }


// login = async (req, res) => {
//     let errorsArr = [];
//     let validationErrors = validationResult(req);
//     if (!validationErrors.isEmpty()) {
//         let errors = Object.values(validationErrors.mapped());
//         errors.forEach((item) => {
//             errorsArr.push(item.msg);
//         });
//         req.flash("errors", errorsArr);
//         return res.redirect("/login");
//     }

//     try {
//         await loginService.handleLogin(req.body.email, req.body.password);
//         return res.redirect("/");
//     } catch (err) {
//         req.flash("errors", err);
//         return res.redirect("/login");
//     }
// };





// const { email, password } = req.body
// console.log(email, password)
// if (email && password) {
//     User.findByEmail(email, (err, user) => {
//         if (!user) {
//             res.send('loi j do');
//             res.redirect('/login');
//         } else {
//             // bcrypt.compare(password, user.password, (err, result) => {
//             if (au_user_pass == password) {
//                 req.session.loggedin = true;
//                 req.session.user = user;
//                 res.redirect('/');
//             } else {
//                 // A user with that email address does not exists
//                 const conflictError = 'Thông tin không hợp lệ';
//                 res.send(conflictError);
//                 res.render('./pages/login.ejs', { email, password, conflictError });
//             }
//         
//         }
//     })
// }

// else {
//     // A user with that email address does not exists
//     const conflictError = 'Vui lòng điền đủ thông tin';
//     res.send(conflictError);
//     res.render('./pages/login.ejs', { email, password, conflictError });
// }

//     

    // [GET] /about-us
    about(req, res) {
        res.render('./pages/site/about-us')
    }

    // [GET] /forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/site/forgot-password', { title })
    }

    // [GET] /reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/site/reset-password', { title })
    }

    // [GET] /search-results
    search(req, res) {
        const title = 'Kết quả tìm kiếm'
        res.render('./pages/site/search-results', { title })
    }

}

module.exports = new SiteController()